"use client";

import DisplayDate from "./components/displayDate";
import DisplayTime from "./components/displayTime";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-inherit">
      <div className="flex flex-col justify-center text-center bg-[rgba(39,39,39,0.7)] text-white w-80 h-40 rounded-lg">
        <DisplayTime />
        <DisplayDate />
      </div>
    </main>
  );
}
