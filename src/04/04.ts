export function parse(input: string) {
  return input.split("\n").map((str) => str.split(""));
}

export function partOne(input: ReturnType<typeof parse>) {
  let res = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === ".") {
        continue;
      }

      if (canBeRemoved(input, i, j)) {
        res++;
      }
    }
  }

  return res;
}

export function partTwo(input: ReturnType<typeof parse>) {
  let res = 0;
  let removedThisRound = 0;

  do {
    removedThisRound = 0;
    const toRemove: { x: number; y: number }[] = [];

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === ".") {
          continue;
        }

        if (canBeRemoved(input, i, j)) {
          removedThisRound++;
          toRemove.push({ x: i, y: j });
        }
      }
    }

    for (const indicies of toRemove) {
      input[indicies.x][indicies.y] = ".";
    }

    res += removedThisRound;
  } while (removedThisRound !== 0);

  return res;
}

function canBeRemoved(input: string[][], i: number, j: number): boolean {
  let paperAround = 0;

  const canLookUp = i > 0;
  const canLookDown = i < input.length;
  const canLookLeft = j > 0;
  const canLookRight = j < input[i].length;

  if (canLookUp && input[i - 1][j] === "@") {
    paperAround++;
  }

  if (canLookUp && canLookRight && input[i - 1][j + 1] === "@") {
    paperAround++;
  }

  if (canLookRight && input[i][j + 1] === "@") {
    paperAround++;
  }

  if (canLookDown && canLookRight && input[i + 1][j + 1] === "@") {
    paperAround++;
  }

  if (canLookDown && input[i + 1][j] === "@") {
    paperAround++;
  }

  if (canLookDown && canLookLeft && input[i + 1][j - 1] === "@") {
    paperAround++;
  }

  if (canLookLeft && input[i][j - 1] === "@") {
    paperAround++;
  }

  if (canLookUp && canLookLeft && input[i - 1][j - 1] === "@") {
    paperAround++;
  }

  return paperAround < 4;
}
