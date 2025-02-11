"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";

export default function IPPage() {
  const [ip, setIp] = useState<string | null>(null);

  useEffect(() => {
    async function fetchIP() {
      const res = await fetch("/api/ip", { method: "POST" });
      const data = await res.json();
      setIp(data.ip);
    }
    fetchIP();
  }, []);

  return (
    <div>
      <TopBar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Your IP Address</h1>
        <p className="mt-2 text-2xl">{ip ? ip : "Fetching..."}</p>
      </div>
    </div>
  );
}
