// ./docs/.vitepress/config.js

module.exports = {
    base: '/tw-bg-palette-default/',
    title: '@obewds/tw-bg-palette-default',
    description: 'A documentation site for the twBgPaletteDefault component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/tw-bg-palette-default" },
            { text: "GitHub", link: "https://github.com/obewds/tw-bg-palette-default" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
