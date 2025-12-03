# Advent of Code 2025

## Getting started

1. Make sure you have installed
   [Deno](https://docs.deno.com/runtime/getting_started/installation/).
2. Install dependencies:

```bash
deno install
```

3. Create `.env` file based on `.env.example`.
4. (Optional) Set your session token with environment variables to automatically
   fetch your input. You can obtain the session token from the AoC session
   cookie.

## Running the Code

To run any solution you have to run the `solve` script. It will create all
directories and files for a day, and also it can fetch your input file. Besides
that, it watches all the changes you make and shows a result in a terminal.

### Example usage

To run a solution for the first day:

```bash
deno task solve 1
```

To run tests in watch mode:

```bash
deno test --watch --allow-read
```

## Structure

For each day a directory in `src` is created with the following structure:

```bash
📂 01
├── 📜 01.ts
├── 📜 01.test.ts
├── 📜 example.txt
└── 📜 input.txt
```

## Licence

MIT Licence
