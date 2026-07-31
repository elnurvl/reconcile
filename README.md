# Reconcile library

This library provides a simple function to check if sum of given numbers is zero.
The function accepts an arbitrary number of arguments of type `number` or `bigint`.

```typescript
isSumEqualsToZero(3, -1, -0.5, -0.25, -0.25, -1) // true
isSumEqualsToZero(3, -1, -0.5, -0.25) // false
isSumEqualsToZero(3n, -2n, -1) // true
```

## Tests
TDD was used for implementation of `reconcile_improved.ts`, but the initial variant is also covered by tests.
To run tests:
```shell
npm run test
```

## CLI usage
A simple CLI entrypoint is also provided:

```shell
npx tsx main.ts 3 -2 -1
```

_Disclosure: An AI agent was used only to configure the testing framework and
boilerplate configurations for a publishable library.
For the research and choosing an implementation approach search engines, documentations, forums and AI chatbots were used._