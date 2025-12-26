/**
 * Base Webpack Configuration for Remote Micro-frontends
 * 
 * This configuration should be used by ALL remote applications.
 * It ensures all dependencies are consumed from the host (custom-main)
 * and remotes don't need to install duplicate dependencies.
 * 
 * Usage in your remote's webpack.config.js:
 * const baseConfig = require('./webpack.remote.base.js');
 * 
 * module.exports = baseConfig({
 *   name: 'yourRemoteName',
 *   port: 5001,
 *   exposes: {
 *     './YourApp': './src/App'
 *   }
 * });
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (options) => {
  const { name, port, exposes } = options;
  
  return (env, argv) => {
    const isProduction = argv.mode === 'production';
    const customMainUrl = isProduction 
      ? 'https://custom.shoaibarif.site/remoteEntry.js'
      : 'http://localhost:5000/remoteEntry.js';
  
    return {
    mode: argv.mode || "development",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
      chunkFilename: "[name].chunk.js",
      clean: true,
      publicPath: isProduction ? "https://user.shoaibarif.site/" : "auto"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
            "postcss-loader"
          ]
        }
      ]
    },
    plugins: [
      new ModuleFederationPlugin({
        name,
        filename: "remoteEntry.js",
        exposes,
        remotes: {
          customMain: `customMain@${customMainUrl}`
        },
        shared: {
          react: { 
            singleton: true,
            strictVersion: false,
            requiredVersion: "^18.2.0 || ^19.0.0"
          },
          "react-dom": { 
            singleton: true,
            strictVersion: false,
            requiredVersion: "^18.2.0 || ^19.0.0"
          },
          "@babel/core": { singleton: true, import: false, strictVersion: false },
          "@babel/preset-env": { singleton: true, import: false, strictVersion: false },
          "@babel/preset-react": { singleton: true, import: false, strictVersion: false },
          "@babel/preset-typescript": { singleton: true, import: false, strictVersion: false },
          "babel-loader": { singleton: true, import: false, strictVersion: false },
          "typescript": { singleton: true, import: false, strictVersion: false },
          "css-loader": { singleton: true, import: false, strictVersion: false },
          "style-loader": { singleton: true, import: false, strictVersion: false },
          "postcss-loader": { singleton: true, import: false, strictVersion: false },
          "postcss": { singleton: true, import: false, strictVersion: false },
          "tailwindcss": { singleton: true, import: false, strictVersion: false },
          "autoprefixer": { singleton: true, import: false, strictVersion: false }
        }
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
    ],
    devServer: {
      port,
      open: false,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  };
  };
};
