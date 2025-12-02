import { describe, expect, it } from 'bun:test'
import { parse, partOne, partTwo } from "./02.ts";

describe('Day 2', async () => {
  const { default: sample } = await import(`./example.txt`);
  const parsed = parse(sample);

  describe('Part One', () => {
    it('should work with example', () => {
      const res = partOne(parsed);

      expect(res).toEqual(1227775554);
    });
  })

  describe('Part Two', () => {
    it('should work with example', () => {
      const res = partTwo(parsed);

      expect(res).toEqual(4174379265);
    });
  })
})
