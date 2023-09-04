"use client";

import dayjs from "dayjs";

import { useDateTime } from "./useDateTime";

export default function DisplayDate() {
  const dateTime = useDateTime(100);
  return (
    <div suppressHydrationWarning className="text-[40px] leading-none">
      {dayjs(dateTime).format("YYYY-MM-DD ddd")}
    </div>
  );
}
