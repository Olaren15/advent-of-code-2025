export function parse(input: string) {
    return input.split("\n");
}

export function partOne(input: ReturnType<typeof parse>): number {
    let dial = 50;
    let count = 0;

    for (let rotation of input) {
        const direction = rotation.substring(0, 1);
        const amount = Number(rotation.substring(1));

        if (direction === 'L') {
            dial -= amount;
        } else if (direction === 'R') {
            dial += amount;
        }

        let overflow = 0;

        if (dial < 0) {
            overflow = Math.ceil(dial / 100) * 100;
        }

        if (dial > 99) {
            overflow = Math.floor(dial / 100) * 100;
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
        const direction = rotation.substring(0, 1);
        let amount = Number(rotation.substring(1));

        let delta = direction === 'L' ? -1 : 1;

        while (amount > 0) {
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


            amount--;
        }
    }

    return count;
}
