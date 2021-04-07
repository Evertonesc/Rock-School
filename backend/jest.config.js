module.exports = {
    roots: ['<rootDir>/test'],
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '@/tests/(.*)': '<rootDir>/test/$1',
        '@/(.*)': '<rootDir>/src/$1'
    }
}