module.exports = {
  '*.{ts,tsx}': () => ['npm run lint:fix', 'npm run typecheck'],
  '*.{js,json,md}': () => 'npm run format',
};
