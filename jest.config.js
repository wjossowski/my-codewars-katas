// tslint:disable
module.exports = {
  verbose: true,
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  rootDir: "./",
  testMatch: ["**/?(*.)test.ts?(x)"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@types)",
    "<rootDir>/docs/",
    "<rootDir>/build/",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/docs/"],
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/docs/",
    "<rootDir>/legacy/",
    "<rootDir>/_src/",
  ],
  watchPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/docs/",
    "<rootDir>/legacy/",
    "<rootDir>/_src/",
  ],
};
