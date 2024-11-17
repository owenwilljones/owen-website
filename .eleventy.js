const path = require("path");
const sass = require("sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("scss");

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }

      return async (data) => {
        let result = sass.compileString(inputContent, {
          loadPaths: [parsed.dir],
          style: 'compressed'
        });

        return result.css;
      };
    }
  });

  eleventyConfig.addCollection("nav", function(collectionsApi) {
    return collectionsApi.getFilteredByTags("nav").sort(function(a, b) {
      return a.data.order - b.data.order
    });
  });

  eleventyConfig.addCollection("footer", function(collectionsApi) {
    return collectionsApi.getFilteredByTags("footer").sort(function(a, b) {
      return a.data.order - b.data.order
    });
  });
};
