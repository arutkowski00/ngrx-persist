module.exports = {
  preset: "jest-preset-angular",
  setupTestFrameworkScriptFile: "<rootDir>/src/setup-jest.ts",
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.spec.json"
    },
    "__TRANSFORM_HTML__": true
  }
};
