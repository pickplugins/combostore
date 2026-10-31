import React, { useState, useRef } from "react";
import { useCounterStore } from '../../store/useCounterStore'

/* Buttons here were dark gray slabs that lightened on hover. */
const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer";


export default function UploadMedia({
	acceptedTypes = "*/*",
	multiple = true,
	onUploadComplete,
}) {

	const inputRef = useRef(null);

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX } = useCounterStore()


	const [files, setFiles] = useState([]);
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

		console.log(formData);


		const response = await fetch(serverUrl + "wp-json/combo-store/v2/upload_media", {
			method: "POST",
			headers: {
				'Authorization': `Bearer ${token}`
			},
			body: formData,
		});

		if (!response.ok) {
			const message = await response.text();
			throw new Error(message);
		}



		return response.json();
	};

	const handleUpload = async () => {
		if (!files.length) return;

		setUploading(true);
		setError("");

		try {
			const results = await Promise.all(
				files.map((file) => uploadFile(file))
			);

			setUploadedFiles(results);
			onUploadComplete()

			setTimeout(() => {
				setUploadedFiles([]); // Clear uploaded files after 3 seconds
				addNotification("Media uploaded successfully!", "success");

				inputRef.current.value = ""; // Clear the file input
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
			<div className="flex items-center gap-2">
				<input ref={inputRef}
					className="!shadow-none bg-white px-2 py-1 rounded-sm w-fit !border-2 border-solid border-gray-400  !outline-none focus:border-0"
					type="file"
					accept={acceptedTypes}
					multiple={multiple}
					onChange={handleFileChange}
				/>

				<div className={`${PRIMARY_BUTTON} w-max`}
					onClick={handleUpload}
					disabled={uploading || files.length === 0}
				>
					{uploading ? "Uploading..." : "Upload"}
				</div>
			</div>

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
								<a
									href={file.source_url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{file.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}