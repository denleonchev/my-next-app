"use client";

import "./globals.css";

import { useState } from "react";

const ErrorSimulator = ({ message }: { message: string }) => {
    const [error, setError] = useState(false);

    if (error) {
        throw new Error(message);
    }

    return <button onClick={() => setError(true)}>Simulate Error</button>;
}

export default function ErrorWrapper ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ErrorSimulator message="An error occurred!" />
            {children}
        </div>
    );
}
