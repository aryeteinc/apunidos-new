import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), alpinejs(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  site: 'https://www.apunidos.com',
  output: 'static',
  //trailingSlash: 'never',
  build: {
    // Ejemplo: Genera `page.html` en lugar de `page/index.html` durante la compilación.
    // format: 'directory',
    // client: './client',
    // server: './server',
    //chunkSizeWarningLimit: 99999999999999999,
    assets: 'scripts'
  }
});