module.exports = function(eleventyConfig) {
    // Input Directory : src Output directory: _site

    eleventyConfig.addPassthroughCopy("src/css");

    eleventyConfig.addPassthroughCopy("src/js");

    eleventyConfig.addPassthroughCopy("src/images");

    return {
        dir: { input: 'src', output: '_site' }
    }; 



};