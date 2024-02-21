"use client";

import DisplayDateTime from "./components/displayDateTime";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-transparent">
      <div className="flex flex-col justify-center text-center bg-[rgba(39,39,39,0.7)] text-white w-80 h-40 rounded-lg">
        <DisplayDateTime />
      </div>
    </main>
  );
}
