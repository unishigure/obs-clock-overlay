"use client";

import dayjs from "dayjs";

import { useDateTime } from "./useDateTime";

export default function DisplayTime() {
  const dateTime = useDateTime(100);
  return (
    <div suppressHydrationWarning className="text-[80px] leading-none">
      {dayjs(dateTime).format("HH:mm:ss")}
    </div>
  );
}
