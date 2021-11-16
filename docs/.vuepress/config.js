module.exports = {
    title: '帮助中心-无锡欣跃不锈钢有限公司',
    description: '帮助中心-无锡欣跃不锈钢有限公司',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/BNQDZJ/bsblog/images/wxxybxg/wxxybxg.png' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    plugins: ['@vuepress/back-to-top'],
    plugins: ['@vuepress/pwa'],
    skipWaiting: true,
    serviceWorker: true,
    updatePopup: true,
    themeConfig: {
        navbar: [
            // NavbarItem
            {
            text: '电子邮件支持 7×24h',
            link: 'mailto:wdnmd.wocnmd@foxmail.com',
            },
            {
            text: '移动电话支持 6×24h',
            link: 'tel:18651512055',
            },
            {
            text: '固定电话支持 6×8h',
            link: 'tel:051088999735',
            },
        ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
      logo: 'https://cdn.jsdelivr.net/gh/BNQDZJ/bsblog/images/wxxybxg/wxxybxg.png',
      lastUpdated: false,
      contributors: false
    }
  };