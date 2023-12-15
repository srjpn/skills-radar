const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const { dts } = require("rollup-plugin-dts");
const packageJson = require("./package.json");


module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/umd/index.js",
        format: "umd",
        sourcemap: true,
        name: 'skills-radar',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: 'skills-radar',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        name: 'skills-radar',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];