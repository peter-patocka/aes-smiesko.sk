/** @type {import('jest').Config} */
const config = {
    modulePathIgnorePatterns: ['<rootDir>/build/'],
    moduleFileExtensions: ['web.js', 'js', 'jsx', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'node'],
};

module.exports = config;