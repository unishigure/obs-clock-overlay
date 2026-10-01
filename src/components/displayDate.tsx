import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

import { useDateTime } from "@/hooks/useDateTime";

export default function DisplayDate() {
	const dateTime = useDateTime(100);
	return (
		<div className="text-[40px] leading-none">
			{dayjs.tz(dateTime, "Asia/Tokyo").format("YYYY-MM-DD ddd")}
		</div>
	);
}
