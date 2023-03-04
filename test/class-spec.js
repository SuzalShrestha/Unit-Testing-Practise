const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  
  
  describe("Word constructor function", function () {
    let word=new Word("Iamword");
    it('should have a "word" property', function () {
      expect(word.word).to.exist;
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("Iamword");
    });
  });

  describe("removeVowels function", function () {
    let word=new Word("IcontainVowels");
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("cntnVwls");
    });
  });

  describe("removeConsonants function", function () {
    let word=new Word("IcontainConsonant");
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal("Ioaiooa");
    });
  });
  
  describe("pigLatin function", function () {
    
    it("should return the word converted to pig latin", function () {
      let word=new Word("IamPigLatin");
      expect(word.pigLatin()).to.equal("IamPigLatinyay");
    });
    it("should return the word converted to pig latin", function () {
      let word=new Word("VowelinBetween");
      expect(word.pigLatin()).to.equal("owelinBetweenVay");
    });
  });
});