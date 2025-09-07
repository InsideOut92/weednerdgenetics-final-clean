"use client";
import { useState, useEffect } from "react";

export default function AgeGate() {
  const [showGate, setShowGate] = useState<boolean | null>(null);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (verified === "true") {
      setShowGate(false);
    } else {
      setShowGate(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true");
    setShowGate(false);
  };

  // solange wir noch prüfen → nichts rendern
  if (showGate === null) return null;

  // wenn schon bestätigt → nichts anzeigen (aber App läuft weiter)
  if (showGate === false) return <></>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 text-white">
      <div className="p-8 rounded-2xl shadow-lg bg-[#111] text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">Age Verification</h2>
        <p className="mb-6">
          You must be over <strong>18 years old</strong> to enter this site.
        </p>
        <button
          onClick={handleConfirm}
          className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-bold transition"
        >
          I am over 18
        </button>
      </div>
    </div>
  );
}
