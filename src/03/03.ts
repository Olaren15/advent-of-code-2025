export function parse(input: string) {
  return input.split("\n").filter((a) => a !== "");
}

export function partOne(input: ReturnType<typeof parse>) {
  let res = 0;

  for (const batt of input) {
    let max = 0;

    for (let i = 0; i < batt.length - 1; i++) {
      for (let j = i + 1; j < batt.length; j++) {
        const num = Number(`${batt[i]}${batt[j]}`);

        if (num > max) {
          max = num;
        }
      }
    }

    res += max;
  }

  return res;
}

export function partTwo(input: ReturnType<typeof parse>) {
  let res = 0;

  for (const batt of input) {
    let leftBoundary = -1;
    let max = "";

    for (let charsLeft = 12; charsLeft > 0; charsLeft--) {
      const start = batt.length - charsLeft;
      let maxIndex = start;

      for (let i = start; i > leftBoundary; i--) {
        if (batt[i] >= batt[maxIndex]) {
          maxIndex = i;
        }
      }

      leftBoundary = maxIndex;
      max += batt[maxIndex];
    }

    res += Number(max);
  }

  return res;
}
