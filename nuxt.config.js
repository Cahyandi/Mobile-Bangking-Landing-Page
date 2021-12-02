export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Mobile-Bangking-Landing-Page',
        htmlAttrs: {
            lang: 'en',
            style: 'overflow-x: hidden; scroll-behavior: smooth;'


        },
        // bodyAttrs: {
        //     style: 'overflow-x: hidden;'
        // },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    },


    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~assets/scss/style.scss"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'nuxt-lazy-load'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}