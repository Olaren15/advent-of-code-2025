import { assertEquals } from "@std/assert";
import { parse, partOne, partTwo } from "./06.ts";

const input = await Deno.readTextFile(`src/06/example.txt`);
const parsed = parse(input);

Deno.test("Day 6 - part 1 - should solve example", () => {
  const result = partOne(parsed);

  assertEquals(result, 4277556);
});

Deno.test("Day 6 - part 2 - should solve example", () => {
  const result = partTwo(parsed);

  assertEquals(result, 3263827);
});

