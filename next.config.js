/** @type {import('next').NextConfig} */
// const nextConfig = {
// experimental: {
//   appDir: true,
// },
// };

// const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";
// module.exports = {
//   assetPrefix: urlPrefix,
//   basePath: urlPrefix,
//   trailingSlash: true,
//   publicRuntimeConfig: { urlPrefix },
//   // nextConfig,
// };
// module.exports = nextConfig;

module.exports = {
  typescript: {
    // !! 警告 !!
    // あなたのプロジェクトに型エラーがあったとしても、プロダクションビルドを正常に完了するために危険な許可をする。
    // !! 警告 !!
    ignoreBuildErrors: true,
  },
  basePath: process.env.GITHUB_ACTIONS && "/tailwind-portfolio",
  trailingSlash: true,
};
