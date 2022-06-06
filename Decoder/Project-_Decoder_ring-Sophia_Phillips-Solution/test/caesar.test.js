// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("shift error", ()=>{
    it("should return false if the shift amount is 0", () => {
        const shift = 0;
        const actual = caesar(shift);
  
        expect(actual).to.be.false;
      });

      it("should return false if the shift amount is above 25", () => {
        const shift = 26;
        const actual = caesar(shift);
  
        expect(actual).to.be.false;
      });
  
      it("should return false if the shift amount is less than -25", () => {
        const shift = -26;
        const actual = caesar(shift);
  
        expect(actual).to.be.false;
      });      
})

describe("encoding text", () => {
  it("should encode the inputed text", () => {
    const message = "test";
    const shift = 2;
    const actual = caesar(message, shift);
    const expected = "vguv";

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols untouched", () => {
    const message = "you are amazing!";
    const shift = 2;
    const actual = caesar(message, shift);
    const expected = "aqw ctg cocbkpi!";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const message = "You are amazing";
    const shift = 2;
    const actual = caesar(message, shift);
    const expected = "aqw ctg cocbkpi";

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const message = "you are amazing";
    const shift = 2;
    const actual = caesar(message, shift);
    const expected = "aqw ctg cocbkpi";

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const message = "you are amazing";
    const shift = -2;
    const actual = caesar(message, shift);
    const expected = "wms ypc ykyxgle";

    expect(actual).to.equal(expected);
  });
});

describe("decoding the inputed text", () => {
  it("should decode a message by shifting the letters in the opposite direction", () => {
    const message = "aqw ctg cocbkpi";
    const shift = 2;
    const actual = caesar(message, shift, false);
    const expected = "you are amazing";

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is", () => {
    const message = "aqw ctg cocbkpi!";
    const shift = 2;
    const actual = caesar(message, shift, false);
    const expected = "you are amazing!";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const message = "Aqw Ctg Cocbkpi";
    const shift = 2;
    const actual = caesar(message, shift, false);
    const expected = "you are amazing";

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const message = "aqw ctg cocbkpi";
    const shift = 2;
    const actual = caesar(message, shift, false);
    const expected = "you are amazing";

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const message = "wms ypc ykyxgle";
    const shift = -2;
    const actual = caesar(message, shift, false);
    const expected = "you are amazing";

    expect(actual).to.equal(expected);
  });
});

