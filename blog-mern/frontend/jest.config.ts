module.exports = {
    testRunner: "jest-circus/runner",
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/**/*.{ts,tsx}",
      "!src/utils/*.{ts,tsx}",
      "!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}",
      "!src/vite-env.d.ts",
      "!src/App.tsx",
      "!src/main.tsx",
    ],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };