module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: { 
                postCssPlugins: [require("tailwindcss")()],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        { resolve: `gatsby-source-filesystem`, options: { path: `./src/images/` } },
    ],
}