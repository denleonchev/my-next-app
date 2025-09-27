"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function ReviewDetailsError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }
  return (
    <>
      <h1>Error {error.message}</h1>
      <button onClick={reload}>Try again</button>
    </>
  );
}
             