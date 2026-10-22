"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import {
	GoogleMap,
	Marker,
	useJsApiLoader,
	Autocomplete,
} from "@react-google-maps/api";
import {
	IconSearch,
	IconMapPin,
	IconCurrentLocation,
	IconCopy,
	IconCircleCheck,
	IconAlertCircle,
} from "@tabler/icons-react";
import { useCounterStore } from "../store/useCounterStore";

/* ---------------- Style tokens ---------------- */
const containerStyle = {
	width: "100%",
	height: "400px",
	borderRadius: "10px",
};

const inputBase =
	"w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 " +
	"shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

const btnPrimary =
	"inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm " +
	"font-semibold text-white shadow-sm transition hover:bg-indigo-700 " +
	"focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:opacity-50";

const btnGhost =
	"inline-flex items-center justify-center gap-1.5 rounded-md border border-gray-200 bg-white " +
	"px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 " +
	"focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60";

const DEFAULT_CENTER = { lat: 25.75161473382205, lng: 89.25362506498416 };

export default function LocationPicker({
	onLocationSelect,
	latlng,
	markerDraggable,
	enableSearch = true,
}) {
	const { settings, addNotification } = useCounterStore();

	const { isLoaded, loadError } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: settings?.apiKeys?.googleMap?.key,
		libraries: ["places"],
		mapIds: [settings?.apiKeys?.googleMap?.map_id],
	});

	const [selected, setSelected] = useState({
		lat: latlng?.lat || DEFAULT_CENTER.lat,
		lng: latlng?.lng || DEFAULT_CENTER.lng,
	});
	const [autocomplete, setAutocomplete] = useState(null);
	const [latLngInput, setLatLngInput] = useState("");
	const [copied, setCopied] = useState(false);
	const [locating, setLocating] = useState(false);
	const mapRef = useRef(null);

	/* Sync from parent */
	useEffect(() => {
		if (latlng?.lat && latlng?.lng) {
			setSelected({ lat: latlng.lat, lng: latlng.lng });
		}
	}, [latlng?.lat, latlng?.lng]);

	const notifyError = (content) =>
		addNotification({ type: "error", title: "Invalid location", content });

	/* Central state commit — keeps parent + map in sync */
	const commitLocation = useCallback(
		(newLocation, { pan = true } = {}) => {
			setSelected(newLocation);
			onLocationSelect?.(newLocation);
			if (pan && mapRef.current) {
				mapRef.current.panTo(newLocation);
			}
		},
		[onLocationSelect]
	);

	/* --- Manual lat,lng entry --- */
	const handleLatLngEnter = () => {
		if (!latLngInput.trim()) return;
		const parts = latLngInput.split(",");
		if (parts.length !== 2) {
			notifyError("Please enter coordinates in the format: lat, lng");
			return;
		}
		const lat = parseFloat(parts[0].trim());
		const lng = parseFloat(parts[1].trim());
		if (isNaN(lat) || isNaN(lng)) {
			notifyError("Invalid coordinates. Example: 25.76, 89.26");
			return;
		}
		if (Math.abs(lat) > 90 || Math.abs(lng) > 180) {
			notifyError("Coordinates out of range (lat ±90, lng ±180).");
			return;
		}
		commitLocation({ lat, lng });
	};

	/* --- "Use my location" --- */
	const handleUseMyLocation = () => {
		if (!navigator.geolocation) {
			notifyError("Geolocation is not supported by this browser.");
			return;
		}
		setLocating(true);
		navigator.geolocation.getCurrentPosition(
			(position) => {
				commitLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
				setLocating(false);
			},
			() => {
				notifyError("Unable to retrieve your location.");
				setLocating(false);
			},
			{ enableHighAccuracy: true, timeout: 8000 }
		);
	};

	/* --- Map click / drag --- */
	const handleClick = useCallback(
		(event) => {
			commitLocation(
				{ lat: event.latLng.lat(), lng: event.latLng.lng() },
				{ pan: false }
			);
		},
		[commitLocation]
	);

	const handleDragEnd = useCallback(
		(event) => {
			commitLocation(
				{ lat: event.latLng.lat(), lng: event.latLng.lng() },
				{ pan: false }
			);
		},
		[commitLocation]
	);

	/* --- Place autocomplete --- */
	const onPlaceChanged = () => {
		if (!autocomplete) return;
		const place = autocomplete.getPlace();
		if (place.geometry?.location) {
			commitLocation({
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			});
		} else {
			notifyError("Could not find that place. Try a more specific search.");
		}
	};

	/* --- Copy coords --- */
	const handleCopyCoords = async () => {
		const text = `${selected.lat?.toFixed(6)}, ${selected.lng?.toFixed(6)}`;
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {
			notifyError("Unable to copy coordinates to clipboard.");
		}
	};

	/* --- Load states --- */
	if (loadError) {
		return (
			<div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
				<IconAlertCircle size={16} className="mt-0.5 shrink-0" />
				<span>Unable to load Google Maps. Please check the API key.</span>
			</div>
		);
	}

	if (!isLoaded) {
		return (
			<div
				style={containerStyle}
				className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500"
			>
				Loading map…
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-3">
			{enableSearch && (
				<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
					{/* Place autocomplete */}
					<div className="relative flex-1">
						<IconSearch
							size={16}
							className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						/>
						<Autocomplete
							onLoad={setAutocomplete}
							onPlaceChanged={onPlaceChanged}
						>
							<input
								type="text"
								placeholder="Search a place"
								aria-label="Search a place"
								className={`${inputBase} pl-9`}
							/>
						</Autocomplete>
					</div>

					{/* Manual lat,lng entry */}
					<div className="flex flex-1 items-center gap-2">
						<input
							type="text"
							inputMode="decimal"
							placeholder="lat, lng e.g. 25.7581, 89.2610"
							aria-label="Enter latitude and longitude"
							className={inputBase}
							value={latLngInput}
							onChange={(e) => setLatLngInput(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									e.preventDefault();
									handleLatLngEnter();
								}
							}}
						/>
						<div
							type="button"
							onClick={handleLatLngEnter}
							className={btnPrimary}
						>
							Go
						</div>
					</div>
				</div>
			)}

			{/* Locate me */}
			<div>
				<button
					type="button"
					onClick={handleUseMyLocation}
					disabled={locating}
					className={btnGhost}
				>
					<IconCurrentLocation size={16} className="text-indigo-600" />
					{locating ? "Locating…" : "Use my location"}
				</button>
			</div>

			{/* Map */}
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={selected}
				zoom={selected.lat ? 14 : 12}
				mapId={settings?.apiKeys?.googleMap?.map_id}
				onClick={handleClick}
				onLoad={(map) => (mapRef.current = map)}
				options={{
					streetViewControl: false,
					fullscreenControl: false,
					mapTypeControl: false,
					gestureHandling: "cooperative",
				}}
			>
				{selected?.lat != null && (
					<Marker
						position={selected}
						draggable={!!markerDraggable}
						onDragEnd={handleDragEnd}
					/>
				)}
			</GoogleMap>

			{/* Selected-coordinates footer */}
			<div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-2">
				<div className="flex items-center gap-2 text-sm text-gray-700">
					<IconMapPin size={16} className="text-indigo-600" />
					<span className="font-medium">Selected:</span>
					<code className="rounded bg-white px-2 py-0.5 font-mono text-xs text-gray-800">
						{selected?.lat?.toFixed(6)}, {selected?.lng?.toFixed(6)}
					</code>
				</div>
				<button
					type="button"
					onClick={handleCopyCoords}
					className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-gray-600 transition hover:bg-white hover:text-gray-900"
				>
					{copied ? (
						<>
							<IconCircleCheck size={14} className="text-green-600" /> Copied
						</>
					) : (
						<>
							<IconCopy size={14} /> Copy
						</>
					)}
				</button>
			</div>
		</div>
	);
}