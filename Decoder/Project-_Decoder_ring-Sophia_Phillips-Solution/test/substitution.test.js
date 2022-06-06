// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("errors", () => {
     it("should return false if the cipher alphabet is missing", () => {
       const message = "text";
       const actual = substitution(message);
       expect(actual).to.be.false;
     });

    it("should return false if the cipher alphabet is not 26 characters", () => {
      const message = "text";
      const alphabet = "abcd";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the cipher alphabet has repeating characters", () => {
      const message = "none"  
      const alphabet = "qwertyuiopasdfghjklzxcvbbm";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode a message by using the given cipher alphabet", () => {
      const message = "you are amazing";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "ngx qkt qdqmofu";

      expect(actual).to.equal(expected);
    });

    it("should work with special characters", () => {
      const message = "you are amazing";
      const alphabet = "!wertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "ngx !kt !d!mofu";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "you are amazing";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "ngx qkt qdqmofu";

      expect(actual).to.equal(expected);
    });
  });
 
  describe("decoding", () => {
    it("should decode a message by using the given cipher alphabet", () => {
      const message = "ngx qkt qdqmofu";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "you are amazing";

      expect(actual).to.equal(expected);
    });

    it("should work with any character", () => {
      const message = "ngx !kt !d!mofu";
      const alphabet = "!wertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "you are amazing";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "ngx qkt qdqmofu";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "you are amazing";

      expect(actual).to.equal(expected);
    });
  });