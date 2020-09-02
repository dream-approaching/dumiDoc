import { defineConfig } from 'dumi';

export default defineConfig({
  title: '太极笔记',
  hash: true, // 文件hash后缀
  history: { type: 'hash' },
  publicPath: '/dumiDoc/',
  scripts: ['https://v1.cnzz.com/z_stat.php?id=1278974410&web_id=1278974410'],
  styles: ['a[title=站长统计] { display: none; }'],
  logo: '/dumiDoc/images/logo.png',
  favicon: '/dumiDoc/images/logo.png',
  // more config: https://d.umijs.org/config
});
