import { assertEquals } from "@std/assert";
import { parse, partOne, partTwo } from "./02.ts";

const input = await Deno.readTextFile(`src/02/example.txt`);
const parsed = parse(input);

Deno.test("Day 2 - part 1 - should solve example", () => {
  const result = partOne(parsed);

  assertEquals(result, 1227775554);
});

Deno.test("Day 2 - part 2 - should solve example", () => {
  const result = partTwo(parsed);

  assertEquals(result, 4174379265);
});
