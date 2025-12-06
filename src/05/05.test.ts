import { assertEquals } from "@std/assert";
import { parse, partOne, partTwo } from "./05.ts";

const input = await Deno.readTextFile(`src/05/example.txt`);
const parsed = parse(input);

Deno.test("Day 5 - part 1 - should solve example", () => {
  const result = partOne(parsed);

  assertEquals(result, 3);
});

Deno.test("Day 5 - part 2 - should solve example", () => {
  const result = partTwo(parsed);

  assertEquals(result, 14);
});

