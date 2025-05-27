describe("String Methods Tests", () => {
  describe("replace()", () => {
    test.each([
      {
        name: "Replace - TC1",
        input: ["hello world", "world", "JS"],
        expected: "hello JS",
      },
      {
        name: "Replace - TC2",
        input: [" hello ", " ", "-"],
        expected: "-hello ",
      },
      {name: "Replace - TC3", input: ["aaa", "a", "b"], expected: "baa"},
      {name: "Replace - TC4", input: ["", "a", "b"], expected: ""},
      {name: "Replace - TC6", input: ["test", "", "x"], expected: "xtest"},
      {
        name: "Replace - TC7",
        input: ["test test", /test/g, "X"],
        expected: "X X",
      },
    ])("$name", ({input, expected}) => {
      expect(input[0].replace(input[1], input[2])).toBe(expected);
    });

    test.each([
      {name: "Replace - TC5", input: [null, "a", "b"]},
      {name: "Replace - TC8", input: [undefined, "a", "b"]},
      {name: "Replace - TC9", input: [12345, "2", "x"]},
    ])("$name should throw error", ({input}) => {
      expect(() => input[0].replace(input[1], input[2])).toThrow();
    });
  });

  describe("includes()", () => {
    test.each([
      {name: "Includes - TC1", input: ["hello world", "world"], expected: true},
      {name: "Includes - TC2", input: [" hello ", " "], expected: true},
      {name: "Includes - TC3", input: ["hello", ""], expected: true},
      {name: "Includes - TC4", input: ["", "a"], expected: false},
      {name: "Includes - TC6", input: ["abc", "A"], expected: false},
    ])("$name", ({input, expected}) => {
      expect(input[0].includes(input[1])).toBe(expected);
    });

    test.each([
      {name: "Includes - TC5", input: [null, "a"]},
      {name: "Includes - TC7", input: [undefined, "a"]},
    ])("$name should throw error", ({input}) => {
      expect(() => input[0].includes(input[1])).toThrow();
    });

    test("Includes - TC8 should handle null search string", () => {
      expect("abc".includes(null)).toBe(false);
    });
  });

  describe("split()", () => {
    test.each([
      {name: "Split - TC1", input: ["a b c", " "], expected: ["a", "b", "c"]},
      {name: "Split - TC2", input: ["a,,b", ","], expected: ["a", "", "b"]},
      {name: "Split - TC3", input: ["", ","], expected: [""]},
      {
        name: "Split - TC4",
        input: ["a b c", ""],
        expected: ["a", " ", "b", " ", "c"],
      },
      {name: "Split - TC6", input: ["a|b|c", "|"], expected: ["a", "b", "c"]},
    ])("$name", ({input, expected}) => {
      expect(input[0].split(input[1])).toEqual(expected);
    });

    test.each([
      {name: "Split - TC5", input: [null, " "]},
      {name: "Split - TC7", input: [undefined, ","]},
    ])("$name should throw error", ({input}) => {
      expect(() => input[0].split(input[1])).toThrow();
    });

    test("Split - TC8 should handle null separator", () => {
      expect("abc".split(null)).toEqual(["abc"]);
    });
  });

  describe("join()", () => {
    test.each([
      {name: "Join - TC1", input: [["a", "b", "c"], " "], expected: "a b c"},
      {name: "Join - TC2", input: [[], "-"], expected: ""},
      {name: "Join - TC3", input: [[null, "b"], "+"], expected: "+b"},
      {name: "Join - TC4", input: [["a", "b"], ""], expected: "ab"},
      {name: "Join - TC5", input: [["a", "b"], undefined], expected: "a,b"},
      {name: "Join - TC6", input: [[1, 2, 3], "|"], expected: "1|2|3"},
      {name: "Join - TC9", input: [["a", "b"], null], expected: "anullb"},
    ])("$name", ({input, expected}) => {
      expect(input[0].join(input[1])).toBe(expected);
    });

    test.each([
      {name: "Join - TC7", input: [null, ","]},
      {name: "Join - TC8", input: [undefined, ","]},
    ])("$name should throw error", ({input}) => {
      expect(() => input[0].join(input[1])).toThrow();
    });
  });
});
