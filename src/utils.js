const consonants = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "X",
  "Z",
  "W",
  "Y"
]

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const vowels = ["A", "E", "I", "O", "U", "Y"]

const getRandomLetterInArray = array =>
  array[getRandomIntInclusive(0, array.length - 1)]

const getVowel = () => getRandomLetterInArray(vowels)

const getConsonant = () => getRandomLetterInArray(consonants)

const scrabbleTwoLetterWords = [
  "AA",
  "AB",
  "AD",
  "AE",
  "AG",
  "AH",
  "AI",
  "AL",
  "AM",
  "AN",
  "AR",
  "AS",
  "AT",
  "AW",
  "AX",
  "AY",
  "BA",
  "BE",
  "BI",
  "BO",
  "BY",
  "DA",
  "DE",
  "DO",
  "ED",
  "EF",
  "EH",
  "EL",
  "EM",
  "EN",
  "ER",
  "ES",
  "ET",
  "EW",
  "EX",
  "FA",
  "FE",
  "GI",
  "GO",
  "HA",
  "HE",
  "HI",
  "HM",
  "HO",
  "ID",
  "IF",
  "IN",
  "IS",
  "IT",
  "JO",
  "KA",
  "KI",
  "LA",
  "LI",
  "LO",
  "MA",
  "ME",
  "MI",
  "MM",
  "MO",
  "MU",
  "MY",
  "NA",
  "NE",
  "NO",
  "NU",
  "OD",
  "OE",
  "OF",
  "OH",
  "OI",
  "OK",
  "OM",
  "ON",
  "OP",
  "OR",
  "OS",
  "OW",
  "OX",
  "OY",
  "PA",
  "PE",
  "PI",
  "PO",
  "QI",
  "RE",
  "SH",
  "SI",
  "SO",
  "TA",
  "TE",
  "TI",
  "TO",
  "UH",
  "UM",
  "UN",
  "UP",
  "US",
  "UT",
  "WE",
  "WO",
  "XI",
  "XU",
  "YA",
  "YE",
  "YO",
  "ZA"
]

export const isValidScrabbleWord = word => scrabbleTwoLetterWords.includes(word)

// possible combos
// vowel vowel (1)
// vowel consonsant (2)
// consonsant vowel (3)

export const getRandomTwoLetterWord = () => {
  switch (getRandomIntInclusive(1, 3)) {
    case 1:
      return getVowel() + getVowel()
    case 2:
      return getVowel() + getConsonant()
    default:
      return getConsonant() + getVowel()
  }
}
