module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "pM1DMTeGeVMly1-vGAuQd7ExGTiynaYrRjcU4Umjl04",
        spaceId: "0aj490m4ifby",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
