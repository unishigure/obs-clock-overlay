"use client";

import { useEffect, useState } from "react";

export const useDateTime = (interval: number) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(Date.now()), interval);
    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return time;
};
