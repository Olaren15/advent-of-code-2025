import chalk from "chalk";
import dedent from "dedent";

import { fetchInput } from "./api.ts";

export async function scaffold(day: number, year: number) {
  const name = `${day}`.padStart(2, "0");

  const directory = `./src/${name}`;

  try {
    const _ = await Deno.lstat(directory);
    return;
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) {
      throw err;
    }
  }

  console.log(`📂 Setting up day ${day} of ${year}`);

  await Deno.mkdir(directory);

  const test = dedent`
  import { assertEquals } from "@std/assert";
  import { parse, partOne, partTwo } from "./${name}.ts";

  const input = await Deno.readTextFile(\`src/${name}/example.txt\`);
  const parsed = parse(input);

  Deno.test("Day 1 - part 1 - should solve example", () => {
    const result = partOne(parsed);

    assertEquals(result, undefined);
  });

  Deno.test("Day 2 - part 2 - should solve example", () => {
    const result = partTwo(parsed);

    assertEquals(result, undefined);
  });
  `;

  const solution = dedent`
  export function parse(input: string) {
    return input
  }
  
  export function partOne(input: ReturnType<typeof parse>) {}

  export function partTwo(input: ReturnType<typeof parse>) {}
  `;

  console.log(`📂 Fetching your input`);

  const input = await fetchInput({ day, year }).catch(() => {
    console.log(
      chalk.red.bold(
        "📂 Fetching your input have failed, empty file will be created.",
      ),
    );
  });

  const encoder = new TextEncoder();

  await Deno.writeFile(
    `${directory}/${name}.test.ts`,
    encoder.encode(test),
  );
  await Deno.writeFile(
    `${directory}/${name}.ts`,
    encoder.encode(solution),
  );
  await Deno.writeFile(
    `${directory}/input.txt`,
    encoder.encode(input ?? ""),
  );
  await Deno.writeFile(
    `${directory}/example.txt`,
    encoder.encode(""),
  );

  console.log("📂 You all set up, have fun!");
}
