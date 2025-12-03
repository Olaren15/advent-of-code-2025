import assert from "node:assert";

export function parse(input: string) {
  return input.split(",");
}

export function partOne(input: ReturnType<typeof parse>) {
  let sum = 0;

  for (const range of input) {
    const [begin, end] = range.split("-").map((n) => Number(n));

    assert(typeof begin === "number");
    assert(typeof end === "number");

    for (let i = begin; i < end + 1; i++) {
      const str = String(i);
      if (str.length % 2 !== 0) {
        continue;
      }

      const splitIndex = str.length / 2;
      const l = str.substring(0, splitIndex);
      const r = str.substring(splitIndex);

      if (l === r) {
        sum += i;
      }
    }
  }

  return sum;
}

export function partTwo(input: ReturnType<typeof parse>) {
  let sum = 0;

  for (const range of input) {
    const [begin, end] = range.split("-").map((n) => Number(n));

    assert(typeof begin === "number");
    assert(typeof end === "number");

    for (let i = begin; i < end + 1; i++) {
      if (isFake(i)) {
        sum += i;
      }
    }
  }

  return sum;
}

function isFake(num: number) {
  const str = String(num);

  for (let repeat = 2; repeat < str.length + 1; repeat++) {
    if (str.length % repeat !== 0) {
      continue;
    }

    const splitIndex = str.length / repeat;

    const splits = [];

    for (let a = 0; a < repeat; a++) {
      splits.push(str.substring(a * splitIndex, (a + 1) * splitIndex));
    }

    if (splits.filter(unique).length === 1) {
      return true;
    }
  }
}

function unique(value: string, index: number, array: string[]) {
  return array.indexOf(value) === index;
}
