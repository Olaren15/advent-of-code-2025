import { isOk } from "./utils.ts";

const headers = {
  Cookie: `session=${Deno.env.get("SESSION")}`,
};

export async function fetchInput({ day, year }: { day: number; year: number }) {
  const response = await fetch(
    `https://adventofcode.com/${year}/day/${day}/input`,
    {
      headers,
    },
  );
  const response_1 = await isOk(response);
  return await response_1.text();
}
