import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Longzi Doc',
  hash: true, // 文件hash后缀
  history: { type: 'hash' },
  publicPath: '/dumiDoc/',
  // more config: https://d.umijs.org/config
});
