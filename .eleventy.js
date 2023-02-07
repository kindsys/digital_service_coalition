module.exports = function (eleventyConfig) {
  // allows css, assets, and CMS config files to be passed into /_site
  eleventyConfig.addPassthroughCopy("src/assets/images/");
  eleventyConfig.addPassthroughCopy("src/admin/");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
