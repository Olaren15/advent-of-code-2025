interface Operation {
  numbers: number[];
  operator: "+" | "*";
}

export function parse(input: string) {
  return input.split("\n");
}

export function partOne(input: ReturnType<typeof parse>) {
  const operations: Operation[] = [];

  for (let i = 0; i < input.length - 2; i++) {
    const numbers = input[i]
      .split(" ")
      .map((a) => a.trim())
      .filter((a) => a !== "")
      .map((n) => Number(n));

    while (operations.length < numbers.length) {
      operations.push({ numbers: [], operator: "+" });
    }

    for (let j = 0; j < numbers.length; j++) {
      operations[j].numbers.push(numbers[j]);
    }
  }

  const operators = input[input.length - 2]
    .split(" ")
    .map((a) => a.trim())
    .filter((a) => a === "+" || a === "*");

  for (let j = 0; j < operators.length; j++) {
    operations[j].operator = operators[j];
  }

  let grandTotal = 0;

  for (const op of operations) {
    grandTotal += execute(op);
  }

  return grandTotal;
}

export function partTwo(input: ReturnType<typeof parse>) {
  const chars = input.map((l) => l.split(""));

  let grandTotal = 0;
  let op: Operation = { numbers: [], operator: "+" };

  for (let i = 0; i < chars[chars.length - 2].length; i++) {
    const char = chars[chars.length - 2][i];

    if (char === "+" || char === "*") {
      const res = execute(op);
      grandTotal += res;

      op = { numbers: [], operator: char };
    }

    let numStr = "";
    for (let j = 0; j < chars.length - 2; j++) {
      numStr += chars[j][i];
    }

    const num = Number(numStr);
    if (num !== 0) {
      op.numbers.push(num);
    }
  }

  grandTotal += execute(op);

  return grandTotal;
}

function execute(op: Operation): number {
  if (op.numbers.length === 0) {
    return 0;
  }

  let total = op.numbers[0];

  if (op.operator === "+") {
    for (let i = 1; i < op.numbers.length; i++) {
      total += op.numbers[i];
    }
  }

  if (op.operator === "*") {
    for (let i = 1; i < op.numbers.length; i++) {
      total *= op.numbers[i];
    }
  }

  return total;
}

