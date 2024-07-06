const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("./src/css");
  console.log('pathPrefix', eleventyConfig.pathPrefix);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin, { baseHref: '/recipes' });

  return ({
    dir: {
      input: 'src',
      output: 'public'
    }
  });
};
