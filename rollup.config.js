const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = [
  {
    input: "src/index.ts",
    output: 
      {
        file: "dist/index.js",
        format: "umd",
        name: 'SkillRadar',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
    ],
    external: ['react', 'react-dom'],
  }
];