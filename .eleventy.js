module.exports = function(eleventyConfig) {

    const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


    //Add plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Input Directory : src Output directory: _site

    eleventyConfig.addPassthroughCopy("src/css");

    eleventyConfig.addPassthroughCopy("src/js");

    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addPassthroughCopy("src/CNAME");

    return {
        dir: { input: 'src', output: '_site' }
    }; 



};