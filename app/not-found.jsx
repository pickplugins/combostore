
import React from "react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;








export default function NotFound() {
  return (
    <div className="py-10 text-center">
      <h1>404 - Page Not Found #1</h1>
    </div>
  );
}
