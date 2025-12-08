import { assertEquals } from "@std/assert";
import { parse, partOne, partTwo } from "./07.ts";

const input = await Deno.readTextFile(`src/07/example.txt`);

Deno.test("Day 7 - part 1 - should solve example", () => {
  const parsed = parse(input);
  const result = partOne(parsed);

  assertEquals(result, 21);
});

Deno.test("Day 7 - part 2 - should solve example", () => {
  const parsed = parse(input);
  const result = partTwo(parsed);

  assertEquals(result, 40);
});

