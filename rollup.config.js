export default {
  input: 'src/lib/modal/index.ts',
  output: [
    {
      file: 'dist/modal.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/modal.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
    }),
  ],
  external: ['react', 'react-dom', 'lucide-react'],
}