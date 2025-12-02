export function parse(input: string) {
    return input
        .split("\n")
        .map(row => {
            let multiplier = row.substring(0, 1) === 'L' ? -1 : 1;
            return Number(row.substring(1)) * multiplier;
        });
}

export function partOne(input: ReturnType<typeof parse>): number {
    let dial = 50;
    let count = 0;

    for (let rotation of input) {
        dial += rotation;

        let overflow = 0;
        if (dial < 0 || dial > 99) {
            overflow = Math.trunc(dial / 100) * 100;
        }

        dial -= overflow;

        if (dial === 0) {
            count++;
        }
    }

    return count;
}

export function partTwo(input: ReturnType<typeof parse>) {
    let dial = 50;
    let count = 0;

    for (let rotation of input) {
        let delta = rotation < 0 ? -1 : 1;

        while (rotation !== 0) {
            dial += delta;

            if (dial === -1) {
                dial = 99;
            }

            if (dial === 100) {
                dial = 0;
            }

            if (dial === 0) {
                count++;
            }

            rotation -= delta;
        }
    }

    return count;
}
