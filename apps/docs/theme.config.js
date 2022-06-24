// theme.config.js
export default {
    projectLink: 'https://github.com/jacobhq/core', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/jacobhq/core/blob/main/apps/docs', // base URL for the docs repository
    titleSuffix: ' – JacobHQ Core',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    feedbackLink: "Give feedback on this page",
    floatTOC: true,
    footerText: `© ${new Date().getFullYear()}, Jacob Marshall.`,
    footerEditLink: `Edit this page on GitHub`,
    logo: (
      <>
        <span className="mr-2 font-extrabold md:inline">JacobHQ Core</span>
        <span className="md:inline hidden">- UI components used by JacobHQ</span>
      </>
    ),
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="JacobHQ Core - UI components used by JacobHQ" />
        <meta name="og:title" content="JacobHQ Core - UI components used by JacobHQ" />
      </>
    ),
  }