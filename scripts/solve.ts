import chalk from "chalk";
import { formatPerformance, isBetween, withPerformance } from "./utils.ts";
import { scaffold } from "./scaffold.ts";

const day = parseInt(Deno.args[0] ?? "");
const year = parseInt(Deno.env.YEAR ?? new Date().getFullYear());

if (!isBetween(day, [1, 25])) {
  console.log(`🎅 Pick a day between ${chalk.bold(1)} and ${chalk.bold(25)}.`);
  console.log(`🎅 To get started, try: ${chalk.cyan("bun solve 1")}`);
  Deno.exit(0);
}

await scaffold(day, year);

const name = `${day}`.padStart(2, "0");

const input = await Deno.readTextFile(`./src/${name}/input.txt`);
const { partOne, partTwo, parse } = await import(`@/src/${name}/${name}.ts`);

const [one, onePerformance] = withPerformance(() => partOne?.(parse(input)));
const [two, twoPerformance] = withPerformance(() => partTwo?.(parse(input)));

console.log(
  "🌲",
  "Part One:",
  chalk.green(one ?? "—"),
  one ? `(${formatPerformance(onePerformance)})` : "",
);
console.log(
  "🎄",
  "Part Two:",
  chalk.green(two ?? "—"),
  two ? `(${formatPerformance(twoPerformance)})` : "",
);
