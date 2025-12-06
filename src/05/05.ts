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
  const ranges: Range[] = [input.ranges[0]];

  for (let i = 1; i < input.ranges.length; i++) {
    const toInsert = input.ranges[i];
    let inserted = false;

    for (let j = 0; j < ranges.length; j++) {
      if (toInsert.begin <= ranges[j].begin) {
        if (toInsert.end >= ranges[j].begin) {
          ranges[j].begin = toInsert.begin;
          ranges[j].end = Math.max(toInsert.end, ranges[j].end);

          while (j + 1 < ranges.length && toInsert.end >= ranges[j + 1].begin) {
            ranges[j].end = Math.max(toInsert.end, ranges[j + 1].end);
            ranges.splice(j + 1, 1);
          }
        } else {
          ranges.splice(j, 0, toInsert);
        }

        inserted = true;
        break;
      } else if (toInsert.begin <= ranges[j].end) {
        ranges[j].end = Math.max(toInsert.end, ranges[j].end);

        while (j + 1 < ranges.length && toInsert.end >= ranges[j + 1].begin) {
          ranges[j].end = Math.max(toInsert.end, ranges[j + 1].end);
          ranges.splice(j + 1, 1);
        }

        inserted = true;
        break;
      }
    }

    if (!inserted) {
      ranges.push(toInsert);
    }
  }

  let sum = 0;
  ranges.forEach((n) => {
    sum += n.end - n.begin + 1;
  });

  return sum;
}
