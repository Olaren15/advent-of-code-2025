import { assert } from "@std/assert";

export function parse(input: string) {
  return input.split("\n").map((l) => l.split(""));
}

export function partOne(input: ReturnType<typeof parse>) {
  let count = 0;

  for (let i = 1; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const up = input[i - 1][j];

      if (up !== "S" && up !== "|") {
        continue;
      }

      if (input[i][j] === ".") {
        input[i][j] = "|";
      }

      if (input[i][j] === "^") {
        count++;

        if (input[i][j - 1] === ".") {
          input[i][j - 1] = "|";
        }

        if (input[i][j + 1] === ".") {
          input[i][j + 1] = "|";
        }
      }
    }
  }

  return count;
}

export function partTwo(input: ReturnType<typeof parse>) {
  const mem = new Map<number, Map<number, number>>();

  for (let j = 0; j < input[0].length; j++) {
    if (input[0][j] === "S") {
      return countTimelines(input, 0, j, mem) + 1;
    }
  }

  return 0;
}

function countTimelines(
  input: ReturnType<typeof parse>,
  i: number,
  j: number,
  mem: Map<number, Map<number, number>>,
): number {
  const memVal = mem.get(i)?.get(j);
  if (memVal !== undefined) {
    return memVal;
  }

  if (input[i + 1][j] === ".") {
    const val = countTimelines(input, i + 1, j, mem);
    memorize(val, i, j, mem);
    return val;
  }

  if (input[i + 1][j] === "^") {
    let sum = 0;

    if (input[i + 1][j - 1] !== undefined) {
      sum += countTimelines(input, i + 1, j - 1, mem);
    }

    if (input[i + 1][j + 1] !== undefined) {
      sum += countTimelines(input, i + 1, j + 1, mem);
    }

    memorize(sum, i, j, mem);
    return 1 + sum;
  }

  return 0;
}

function memorize(
  val: number,
  i: number,
  j: number,
  mem: Map<number, Map<number, number>>,
) {
  if (mem.get(i) === undefined) {
    mem.set(i, new Map());
  }

  mem.get(i)?.set(j, val);
}

