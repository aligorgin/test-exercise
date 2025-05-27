// Improved test runner
function runTest(
  name: string,
  fn: () => string | string[] | boolean,
  expected: string | boolean | number | null | undefined | string[],
  expectError: boolean | undefined | null
) {
  try {
    const result = fn();
    if (expectError) {
      console.log(`${name}: ❌ Expected error but got result`, result);
    } else if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`${name}: ✅`, result);
    } else {
      console.log(`${name}: ❌ Expected`, expected, "but got", result);
    }
  } catch (e) {
    if (expectError) {
      console.log(`${name}: ✅ Threw as expected`, e.message);
    } else {
      console.log(`${name}: ❌ Unexpected error`, e.message);
    }
  }
}

// Parameterized test cases
const replaceTests = [
  {
    name: "Replace - TC1",
    input: ["hello world", "world", "JS"],
    expected: "hello JS",
  },
  {name: "Replace - TC2", input: [" hello ", " ", "-"], expected: "-hello "},
  {name: "Replace - TC3", input: ["aaa", "a", "b"], expected: "baa"},
  {name: "Replace - TC4", input: ["", "a", "b"], expected: ""},
  {name: "Replace - TC5", input: [null, "a", "b"], expectError: true},
  {name: "Replace - TC6", input: ["test", "", "x"], expected: "xtest"},
  {name: "Replace - TC7", input: ["test test", /test/g, "X"], expected: "X X"},
  {name: "Replace - TC8", input: [undefined, "a", "b"], expectError: true},
  {name: "Replace - TC9", input: [12345, "2", "x"], expectError: true},
];

replaceTests.forEach((tc) =>
  runTest(
    tc.name,
    () =>
      (tc.input[0] as string).replace(
        tc.input[1] as string,
        tc.input[2] as string
      ),
    tc.expected,
    tc.expectError
  )
);

const includesTests = [
  {name: "Includes - TC1", input: ["hello world", "world"], expected: true},
  {name: "Includes - TC2", input: [" hello ", " "], expected: true},
  {name: "Includes - TC3", input: ["hello", ""], expected: true},
  {name: "Includes - TC4", input: ["", "a"], expected: false},
  {name: "Includes - TC5", input: [null, "a"], expectError: true},
  {name: "Includes - TC6", input: ["abc", "A"], expected: false},
  {name: "Includes - TC7", input: [undefined, "a"], expectError: true},
  {name: "Includes - TC8", input: ["abc", null], expected: false},
];

includesTests.forEach((tc) =>
  runTest(
    tc.name,
    () => (tc.input[0] as string).includes(tc.input[1] as string),
    tc.expected,
    tc.expectError
  )
);

const splitTests = [
  {name: "Split - TC1", input: ["a b c", " "], expected: ["a", "b", "c"]},
  {name: "Split - TC2", input: ["a,,b", ","], expected: ["a", "", "b"]},
  {name: "Split - TC3", input: ["", ","], expected: [""]},
  {
    name: "Split - TC4",
    input: ["a b c", ""],
    expected: ["a", " ", "b", " ", "c"],
  },
  {name: "Split - TC5", input: [null, " "], expectError: true},
  {name: "Split - TC6", input: ["a|b|c", "|"], expected: ["a", "b", "c"]},
  {name: "Split - TC7", input: [undefined, ","], expectError: true},
  {name: "Split - TC8", input: ["abc", null], expected: ["abc"]},
];

splitTests.forEach((tc) =>
  runTest(
    tc.name,
    () => (tc.input[0] as string).split(tc.input[1] as string | RegExp),
    tc.expected,
    tc.expectError
  )
);

const joinTests = [
  {name: "Join - TC1", input: [["a", "b", "c"], " "], expected: "a b c"},
  {name: "Join - TC2", input: [[], "-"], expected: ""},
  {name: "Join - TC3", input: [[null, "b"], "+"], expected: "+b"},
  {name: "Join - TC4", input: [["a", "b"], ""], expected: "ab"},
  {name: "Join - TC5", input: [["a", "b"], undefined], expected: "a,b"},
  {name: "Join - TC6", input: [[1, 2, 3], "|"], expected: "1|2|3"},
  {name: "Join - TC7", input: [null, ","], expectError: true},
  {name: "Join - TC8", input: [undefined, ","], expectError: true},
  {name: "Join - TC9", input: [["a", "b"], null], expected: "anullb"},
];

joinTests.forEach((tc) =>
  runTest(
    tc.name,
    () => (tc.input[0] as string[]).join(tc.input[1] as string),
    tc.expected,
    tc.expectError
  )
);
