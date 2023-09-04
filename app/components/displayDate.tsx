"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

import { useDateTime } from "./useDateTime";

export default function DisplayDate() {
  const dateTime = useDateTime(100);
  return (
    <div suppressHydrationWarning className="text-[40px] leading-none">
      {dayjs.tz(dateTime, "Asia/Tokyo").format("YYYY-MM-DD ddd")}
    </div>
  );
}
