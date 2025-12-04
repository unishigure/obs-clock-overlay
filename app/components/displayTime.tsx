"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

import { useDateTime } from "./useDateTime";

export default function DisplayTime() {
  const dateTime = useDateTime(100);
  return (
    <div className="text-[80px] leading-none">
      {dayjs.tz(dateTime, "Asia/Tokyo").format("HH:mm:ss")}
    </div>
  );
}
