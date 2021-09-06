import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
// import copy from 'rollup-plugin-copy'

console.log(__dirname)
const packageJson = require(`./package.json`)

export default {
  input: `src/index.ts`,
  output: [
    {
      dir: `dist/cjs`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: `dist/`,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
  ],
}
