// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "you are amazing";
      const actual = polybius(message);
      const expected = "454354 112451 11231155423322";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "do not jinx";
      const actual = polybius(message);
      const expected = "4143 334344 42423335";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "you are amazing";
      const actual = polybius(message);
      const expected = "454354 112451 11231155423322";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const message = "44513444";
        const actual = polybius(message, false);
        const expected = "test";
  
        expect(actual).to.equal(expected);
      });

    it("should translate 42 to (i/j)", () => {
      const message = "11231155423322";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "454354 112451 11231155423322";
      const actual = polybius(message, false);
      const expected = "you are amaz(i/j)ng";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "454354 112451 112311554233221";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });