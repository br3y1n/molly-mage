module.exports = {
  transform: {
    "^.+\\.ts$": ["ts-jest"],
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: "node",
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".(models|enums).(ts|tsx)",
    "index.(ts|tsx)",
  ],
};
