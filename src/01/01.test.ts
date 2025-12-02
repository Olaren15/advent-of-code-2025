import { describe, expect, it } from 'bun:test'
import { partOne, partTwo, parse } from "./01.ts"

describe('Day 1', async () => {
    const { default: sample } = await import(`./example.txt`);
    const parsed = parse(sample);

    describe('Part One', () => {
        it('Should solve example', () => {
            const result = partOne(parsed);

            expect(result).toEqual(3);
        });
    })

    describe('Part Two', () => {
        it('Should solve example', () => {
            const result = partTwo(parsed);

            expect(result).toEqual(6);
        });

        it('R1000 gives 10', () => {
            const result = partTwo(["R1000"]);

            expect(result).toEqual(10);
        });

        it('L1000 gives 10', () => {
            const result = partTwo(["L1000"]);

            expect(result).toEqual(10);
        });

        it('L55 gives 1', () => {
            const result = partTwo(["L55"]);

            expect(result).toEqual(1);
        });

        it('go back to 0 before', () => {
            const result = partTwo(["L50", "R1000"]);

            expect(result).toEqual(11);
        });

        it('go to 0 and then left again', () => {
            const res = partTwo(["L50", "L5"]);

            expect(res).toEqual(1);
        });

        it('go to 99, then to 0 left', () => {
            const res = partTwo(["R49", "L99"]);

            expect(res).toEqual(1);
        });

        it('go to 99, then to 0 left then to 0 again', () => {
            const res = partTwo(["R49", "L99", "R100"]);

            expect(res).toEqual(2);
        });

        it('go to 1 then overflow to two', () => {
            const res = partTwo(["L49", "R101"]);

            expect(res).toEqual(1);
        });

        it('go to 1 then to 0', () => {
            const res = partTwo(["L49", "R99"]);

            expect(res).toEqual(1);
        });

        it('go to 0 then -531', () => {
            const res = partTwo(["L28", "L522"]);

            expect(res).toEqual(6);
        });
    });
});
