const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
};
