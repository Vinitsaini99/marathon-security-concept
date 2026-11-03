import { createRequire } from 'node:module'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

const require = createRequire(import.meta.url)
const JavaScriptObfuscator = require('javascript-obfuscator') as {
  obfuscate: (
    source: string,
    options: Record<string, unknown>,
  ) => { getObfuscatedCode: () => string }
}

function productionObfuscator(): Plugin {
  return {
    name: 'production-obfuscator',
    apply: 'build',
    enforce: 'post',
    renderChunk(code, chunk) {
      if (!chunk.fileName.endsWith('.js')) return null

      const result = JavaScriptObfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        renameGlobals: false,
        selfDefending: false,
        stringArray: true,
        stringArrayCallsTransform: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75,
        splitStrings: true,
        splitStringsChunkLength: 8,
        transformObjectKeys: false,
        unicodeEscapeSequence: false,
        sourceMap: false,
      })

      return {
        code: result.getObfuscatedCode(),
        map: null,
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), productionObfuscator()],
  build: {
    sourcemap: false,
    cssMinify: true,
  },
})
