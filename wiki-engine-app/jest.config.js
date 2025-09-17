// Jest 설정: src 내부 모듈 및 경로 매핑 지원
module.exports = {
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
};
