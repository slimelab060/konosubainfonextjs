/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');

//useEffectが2回実行される場合は、reactStrictModeを無効にしてください。この挙動はReact18の仕様です。
const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(nextConfig);
