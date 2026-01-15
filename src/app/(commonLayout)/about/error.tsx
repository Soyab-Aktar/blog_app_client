"use client"

import { useEffect } from "react";

export default function AboutError({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [])
  return (
    <div>
      <h1> Error..., SomeThing Wrong </h1>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
