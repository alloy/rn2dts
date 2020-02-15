module.exports = {
  "testMatch": [
    "<rootDir>/codemods/**/__tests__/*-test.ts"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}