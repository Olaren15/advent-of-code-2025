import { assertEquals } from "@std/assert";
import { parse, partOne, partTwo } from "./03.ts";

const input = await Deno.readTextFile(`src/03/example.txt`);
const parsed = parse(input);

Deno.test("Day 3 - part 1 - should solve example", () => {
  const result = partOne(parsed);

  assertEquals(result, 357);
});

Deno.test("Day 3 - part 2 - should solve example", () => {
  const result = partTwo(parsed);

  assertEquals(result, 3121910778619);
});
