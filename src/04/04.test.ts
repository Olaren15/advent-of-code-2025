import { assertEquals } from "@std/assert";
import { parse, partOne, partTwo } from "./04.ts";

const input = await Deno.readTextFile(`src/04/example.txt`);
const parsed = parse(input);

Deno.test("Day 4 - part 1 - should solve example", () => {
  const result = partOne(parsed);

  assertEquals(result, 13);
});

Deno.test("Day 4 - part 2 - should solve example", () => {
  const result = partTwo(parsed);

  assertEquals(result, 43);
});
