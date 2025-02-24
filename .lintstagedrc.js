/* eslint-disable import/no-anonymous-default-export */
module.exports = {
  // TypeScript, JavaScript files
  '*.{ts,tsx,js,jsx}': (files) => [
    'rm -rf .next',
    'bun typecheck',
    `prettier --write ${files.join(' ')}`,
    `bunx eslint --quiet --fix ${files.join(' ')}`,
  ],

  // Other files
  '*.{json,mdx}': (files) => [`prettier --write ${files.join(' ')}`],

  // 明确忽略 tsbuildinfo 文件
  '!tsconfig.tsbuildinfo': [],
};
