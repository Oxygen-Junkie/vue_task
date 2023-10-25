export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss'
  ],
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
