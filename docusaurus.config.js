// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.dracula;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Push | The Communication Protocol of Web3",
  tagline: "One place to learn about everything Push Protocol!",
  favicon: "/assets/website/favicon.ico",

  // Set the production url of your site here
  url: "https://push.org/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ethereum-push-notification-service", // Usually your GitHub org/user name.
  projectName: "push-website", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Static linking
  staticDirectories: ["public", "static"],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        path: "./blog",
        routeBasePath: "blog",
        blogSidebarTitle: "All posts",
        blogSidebarCount: "ALL",
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: "all",
          createFeedItems: async (params) => {
            const { blogPosts, defaultCreateFeedItems, ...rest } = params;
            return defaultCreateFeedItems({
              // keep only the 10 most recent blog posts in the feed
              blogPosts: blogPosts.filter((item, index) => index < 10),
              ...rest,
            });
          },
        },
      },
    ],
    require.resolve("./plugins/custom-webpack-plugin"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/docs/chat/build/stream-chat/',
            from: '/docs/chat/build/stream-chats/',
          },
          // // Redirect from multiple old paths to the new path
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/docs/dev")) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [existingPath.replace("/docs/dev", "/docs")];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-N9ZHXNRLYL",
        },
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the 'edit this page' links.
          editUrl:
            "https://github.com/ethereum-push-notification-service/push-website/blob/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "/assets/docs/social-card.jpg",
      themeconfig: {
        sidebarCollapsible: true,
      },
      navbar: {
        hideOnScroll: true,
        // title: 'Title with Logo',
        logo: {
          alt: "Push Logo",
          src: "/assets/docs/PushLogoTextDark.svg",
          srcDark: "/assets/docs/PushLogoTextWhite.svg",
        },
        items: [
          {
            to: "/docs/",
            position: "right",
            label: "Docs Hub",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            to: "https://discord.com/invite/pushprotocol",
            label: "Discord",
            position: "right",
          },
          {
            to: "https://app.push.org/",
            label: "App",
            position: "right",
          },
          {
            href: "https://github.com/ethereum-push-notification-service/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "LHUKHXUHQP",

        // Public API key: it is safe to commit it
        apiKey: "2fc69a715b81b57bcae4ad6edeb52abe",

        indexName: "v2-push",
        insights: true,
        replaceSearchResultPathname: {
          from: "/dev/", // or as RegExp: /\/docs\//
          to: "/docs/",
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target='_blank' rel='noopener noreferrer' href='#'>this survey</a>',
      //   backgroundColor: '#fff',
      //   textColor: '#e03dc1',
      //   isCloseable: true,
      // },
    }),
};

module.exports = config;
