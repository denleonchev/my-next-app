"use client";

import "./globals.css";

export default function GlobalError() {
  return (
    <div>
      <h1>something went wrong</h1>
      <button onClick={() => window.location.reload()}>Try again</button>
    </div>
  );
}