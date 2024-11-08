import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import { resolve, relative } from 'path'
import fs from 'fs'

function getSvgFilesRecursively(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const svgFiles = entries.flatMap((entry) => {
    const fullPath = resolve(dir, entry.name)
    return entry.isDirectory() ? getSvgFilesRecursively(fullPath)
                               : entry.name.endsWith('.svg') ? [fullPath] : []
  })
  return svgFiles
}

const iconsDir = resolve(__dirname, 'public/svg')
const svgFiles = getSvgFilesRecursively(iconsDir)

const svgoConfig = {
  plugins: [
    {
      name: 'removeAttrs' as const,
      params: {
        attrs: '(style)'
      }
    },
    {
      name: 'addAttributesToSVGElement' as const,
      params: {
        attributes: [
          { style: 'width: 1em; min-width: 1em; height: 1em; min-height: 1em; fill: currentColor;' }
        ]
      }
    }
  ]
}

export default defineConfig({
  plugins: [
    svgLoader({
      svgoConfig,
    }),
  ],
  build: {
    rollupOptions: {
      external: ['vue'],
      input: Object.fromEntries(
        svgFiles.map((file) => [
          relative(iconsDir, file).replace('.svg', ''),
          file,
        ])
      ),
      output: {
        globals: {
          vue: 'Vue',
        },
        entryFileNames: ({ name }) => `${name}.js`,
        format: 'es',
        dir: 'dist',
      },
    },
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      formats: ['es'],
    },
  },
})
