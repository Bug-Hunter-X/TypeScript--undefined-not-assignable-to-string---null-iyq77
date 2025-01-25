# TypeScript: Handling undefined in string | null parameters

This repository demonstrates a common TypeScript error related to handling `undefined` values when a function parameter is declared as `string | null`.  The core problem is that `undefined` is not a subtype of `null` in TypeScript, leading to type errors.

The `bug.ts` file shows the original code and the resulting error. The `bugSolution.ts` file provides a corrected version demonstrating how to handle `undefined` appropriately.

## Reproducing the Bug

1. Clone this repository.
2. Open `bug.ts`.
3. Compile using the TypeScript compiler (tsc).
4. Observe the compiler error related to type assignment.

## Solution

The solution involves explicitly checking for `undefined` alongside `null` using the `typeof` operator or using a type that includes `undefined`, such as `string | null | undefined`.