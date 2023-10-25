export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
      '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/input.css',
    configPath: "tailwind.config"
  },
  app: {
    head: {
      title: 'NuxtVueTest',
      htmlAttrs: { lang: 'ru' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Nuxt Vue Tailwind Task' },
      ]
    }
  }
})
