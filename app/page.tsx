"use client";

import { Suspense } from "react";

import DisplayDate from "./components/displayDate";
import DisplayTime from "./components/displayTime";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <div className="flex flex-col justify-center text-center bg-[rgba(39,39,39,0.7)] text-white w-80 h-40 rounded-lg">
          <DisplayTime />
          <DisplayDate />
        </div>
      </main>
    </Suspense>
  );
}

function Loading() {
  return <h2>Loading...</h2>;
}
