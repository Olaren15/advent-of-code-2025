interface Range {
  begin: number;
  end: number;
}

export function parse(input: string) {
  const lines = input.split("\n");
  const ret: { ranges: Range[]; ingredients: number[] } = {
    ranges: [],
    ingredients: [],
  };

  let i = 0;
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (line === "") {
      break;
    }

    const [begin, end] = line.split("-").map((n) => Number(n));

    ret.ranges.push({ begin, end });
  }

  for (; i < lines.length; i++) {
    const line = lines[i];
    if (line === "") {
      continue;
    }

    ret.ingredients.push(Number(lines[i]));
  }

  return ret;
}

export function partOne(input: ReturnType<typeof parse>) {
  let sum = 0;

  for (const ingredient of input.ingredients) {
    for (const range of input.ranges) {
      if (ingredient >= range.begin && ingredient <= range.end) {
        sum++;
        break;
      }
    }
  }

  return sum;
}

export function partTwo(input: ReturnType<typeof parse>) {
  // It looks like I am too stupid for this one :(
}

