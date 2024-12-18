import {defineConfig} from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  manifest: {
    name: 'Anthropic Balance',
    description: 'Shows your Anthropic balance',
    version: '0.0.0',
    author: {
      email: "avi.shams@gmail.com"
    },
    host_permissions: ['https://console.anthropic.com/*']
  },
  outDir: "build",
  outDirTemplate: "{{browser}}-mv{{manifestVersion}}-{{mode}}"
});
