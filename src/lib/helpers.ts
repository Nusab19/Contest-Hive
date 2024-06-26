import type { ContestType } from "@/lib/types";

import { updateData as updateStatsData } from "@/lib/dbConnect";

type update = "api" | "page";

export async function getStatsData(update: update) {
  // increment whenever called
  const data = await updateStatsData(update);
  return [
    {
      title: "Today",
      value: data.past24page,
      description: "visited",
    },
    {
      title: "Total served",
      value: data.api,
      description: "API requests",
    },
    {
      title: "Total",
      value: data.page,
      description: "page visits",
    },
  ];
}

export function secondsToReadableTime(s: number) {
  if (!s) {
    return "13 seconds";
  }

  const seconds = s % 60;
  const minutes = Math.floor(s / 60) % 60;
  const hours = Math.floor(s / 3600) % 24;
  const days = Math.floor(s / 86400);

  let result = "";

  if (days > 0) {
    result += `${days} day${days > 1 ? "s" : ""}`;
  }
  if (hours > 0) {
    result += `${result ? " " : ""}${hours} hour${hours > 1 ? "s" : ""}`;
  }
  if (minutes > 0) {
    result += `${result ? " " : ""}${minutes} minute${minutes > 1 ? "s" : ""}`;
  }
  if (!result) {
    result = `${seconds} second${seconds > 1 ? "s" : ""}`;
  }

  return result;
}

export function secondsToShortReadableTime(s: number) {
  if (!s) {
    return "13s";
  }

  const seconds = s % 60;
  const minutes = Math.floor(s / 60) % 60;
  const hours = Math.floor(s / 3600) % 24;
  const days = Math.floor(s / 86400);

  let result = "";

  if (days > 0) {
    result += `${days}d`;
  }
  if (hours > 0) {
    result += `${result ? " " : ""}${hours}h`;
  }
  if (minutes > 0) {
    result += `${result ? " " : ""}${minutes}m`;
  }
  if (!result) {
    result = `${seconds}s`;
  }

  return result;
}

export function getSecondsDifferencesFromNow(isoTime: string) {
  const startDate = new Date();
  const endDate = new Date(isoTime);

  const differenceInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;

  return Math.floor(differenceInSeconds);
}

export function timeToReadableTime(isoTime: string) {
  const x = getSecondsDifferencesFromNow(isoTime);
  if (x < 1) return "Started";
  return secondsToShortReadableTime(x);
}

export function timeToLocalTime(isoTime: string) {
  const dt = new Date(isoTime);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dt.getDate();
  const month = months[dt.getMonth()];
  const year = dt.getFullYear();
  const hours = dt.getHours().toString().padStart(2, "0");
  const minutes = dt.getMinutes().toString().padStart(2, "0");
  const seconds = dt.getSeconds().toString().padStart(2, "0");

  let daySuffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  }

  const timeString = `${day}${daySuffix} ${month}, ${year} at ${hours}:${minutes}:${seconds}`;

  return timeString;
}

// function that will take a utc 8601 format date and a duration seconds and return the end time in utc 8601 format.
export function getEndTime(isoStartTime: string, durationSeconds: number) {
  const startDate = new Date(isoStartTime);
  const endDate =
    new Date(startDate.getTime() + durationSeconds * 1000)
      .toISOString()
      .slice(0, -5) + "Z";

  return endDate;
}

export function getEncodedDate(isoTime: string) {
  const dt = new Date(isoTime);
  const year = dt.getFullYear();
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const day = dt.getDate().toString().padStart(2, "0");
  const hours = dt.getHours().toString().padStart(2, "0");
  const minutes = dt.getMinutes().toString().padStart(2, "0");
  const seconds = dt.getSeconds().toString().padStart(2, "0");
  const encodedDate = `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
  return encodedDate;
}

export function getGoogleCalenderLink(contest: ContestType) {
  const text = `
<b>Title      :</b> ${contest.title}
<b>Platform   :</b> ${contest.platform}
<b>Duration   :</b> ${secondsToReadableTime(contest.duration)}
<b>Link       :</b> <a href="${contest.url}">here</a>

<b>Created by:</b> <a href="https://contest-hive.vercel.app/">Contest Hive</a>
  `.trim();
  return encodeURI(
    `https://calendar.google.com/calendar/u/0/r/eventedit?text=${contest.title}&dates=${getEncodedDate(contest.startTime)}/${getEncodedDate(contest.endTime)}&details=${text}&location=${contest.url}`,
  );
}

export function formatNumber(num: number) {
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
  });
  let formatted = formatter.format(num);
  return formatted;
}

export function getPlatformLogo(
  platform: string,
  transparent: boolean = false,
) {
  let plt = platform.toLowerCase();
  if (platform.toLowerCase().includes("codeforces")) {
    plt = "codeforces";
  }

  if (transparent) return `/assets/svgs/platforms/transparent/${plt}.svg`;

  return `/assets/svgs/platforms/${plt}.svg`;
}

export async function sendMessage(message: string) {
  const response = await fetch("/api/others/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  return response.json();
}

export const pascalNames = {
  all: "All",
  atcoder: "Atcoder",
  codechef: "CodeChef",
  codeforces: "Codeforces",
  "codeforces-gym": "CF GYM",
  codeforces_gym: "CF GYM",
  hackerearth: "HackerEarth",
  hackerrank: "HackerRank",
  leetcode: "LeetCode",
  toph: "Toph",
};

export const contestUrlData = {
  atcoder: "https://atcoder.jp/contests/",
  codechef: "https://www.codechef.com/",
  codeforces: "https://codeforces.com/contests/",
  "codeforces-gym": "https://codeforces.com/gymRegistration/",
  hackerearth: "https://",
  hackerrank: "https://www.hackerrank.com/contests/",
  leetcode: "https://leetcode.com/contest/",
  toph: "https://toph.co/c/",
};
