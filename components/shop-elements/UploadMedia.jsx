import React, { useState, useRef } from "react";
import { IconLock } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore'

/* Buttons here were dark gray slabs that lightened on hover. */
const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer";

const STAFF_ROLES = ["administrator", "store_manager"];


/*
	File upload through upload_media.

	A "Restricted upload" checkbox (store staff only; on by default, turned off
	with allowSecure={false}). Unchecked, files upload as they always have.
	Checked, they go to wp-content/uploads/combostore, the restricted folder for
	paid downloads and licensed files, which cannot be opened by URL. The server
	refuses a restricted upload from anyone who is not staff, so the checkbox is
	a convenience, not the guard. Checkout turns it off: a receipt saved there
	could not be shown back on the order.
*/
export default function UploadMedia({
	acceptedTypes = "*/*",
	multiple = true,
	allowSecure = true,
	defaultSecure = false,
	onUploadComplete,
}) {

	const inputRef = useRef(null);

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, addNotification, userDataX } = useCounterStore()

	const isStaff = STAFF_ROLES.some(role => userDataX?.roles?.includes(role));
	const showSecure = allowSecure && isStaff;

	const [files, setFiles] = useState([]);
	const [secure, setSecure] = useState(defaultSecure);
	const [uploading, setUploading] = useState(false);
	const [uploadedFiles, setUploadedFiles] = useState([]);
	const [error, setError] = useState("");

	const handleFileChange = (e) => {
		setFiles(Array.from(e.target.files));
		setError("");
	};

	const uploadFile = async (file) => {
		const formData = new FormData();
		formData.append("file", file);
		if (showSecure && secure) formData.append("secure", "1");

		const response = await fetch(serverUrl + "wp-json/combo-store/v2/upload_media", {
			method: "POST",
			headers: {
				'Authorization': `Bearer ${token}`
			},
			body: formData,
		});

		if (!response.ok) {
			const message = await response.json().then(res => res?.message, () => null);
			throw new Error(message || `Upload failed (HTTP ${response.status}).`);
		}

		return response.json();
	};

	const handleUpload = async () => {
		if (!files.length || uploading) return;

		setUploading(true);
		setError("");

		try {
			const results = await Promise.all(
				files.map((file) => uploadFile(file))
			);

			setUploadedFiles(results);
			onUploadComplete?.(results)

			addNotification({
				type: 'success',
				title: 'Uploaded',
				content: results.some(file => file?.secure)
					? `${results.length} file(s) saved to the restricted folder.`
					: `${results.length} file(s) uploaded.`,
			});

			setTimeout(() => {
				setUploadedFiles([]); // Clear uploaded files after 3 seconds
				if (inputRef.current) inputRef.current.value = ""; // Clear the file input
				setFiles([]);
			}, 3000);

		} catch (err) {
			setError(err.message || "Upload failed");
		} finally {
			setUploading(false);
		}
	};

	return (
		<div >
			<div className="flex flex-wrap items-center gap-2">
				<input ref={inputRef}
					className="!shadow-none bg-white px-2 py-1 rounded-sm w-fit !border-2 border-solid border-gray-400  !outline-none focus:border-0"
					type="file"
					accept={acceptedTypes}
					multiple={multiple}
					onChange={handleFileChange}
				/>

				{showSecure && (
					<label className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-gray-700" title="Saved to wp-content/uploads/combostore, which cannot be opened by URL. Use for paid downloads and licensed files.">
						<input type="checkbox" className="h-4 w-4 accent-gray-900" checked={secure} onChange={ev => setSecure(ev.target.checked)} />
						<IconLock size={16} className="text-gray-500" />
						Restricted upload
					</label>
				)}

				<button type="button" className={`${PRIMARY_BUTTON} w-max disabled:cursor-not-allowed disabled:opacity-50`}
					onClick={handleUpload}
					disabled={uploading || files.length === 0}
				>
					{uploading ? "Uploading..." : "Upload"}
				</button>
			</div>

			{showSecure && secure && (
				<p className="mt-1.5 text-xs text-gray-500">
					Restricted: these files are kept out of public reach and cannot be opened from their link.
				</p>
			)}

			{error && (
				<div style={{ color: "red", marginTop: 10 }}>
					{error}
				</div>
			)}



			{uploadedFiles.length > 0 && (
				<div style={{ marginTop: 20 }}>
					<h3 className="my-3">Uploaded Files</h3>

					<ul>
						{uploadedFiles.map((file) => (
							<li key={file.id} className="bg-gray-100 px-3 py-2 rounded-sm mb-2">
								{file.secure ? (
									<span className="inline-flex items-center gap-1.5">
										<IconLock size={14} className="text-gray-500" /> {file.title}
										<span className="text-xs text-gray-500">({file.path})</span>
									</span>
								) : (
									<a
										href={file.url ?? file.source_url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{file.title}
									</a>
								)}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
