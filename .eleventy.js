
module.exports = function(eleventyConfig) {
    // Handlebars Helper
    eleventyConfig.addPairedHandlebarsShortcode("ifEven", function(content, index) {
        if ((index == 0) || (index%2 == 0)) {
            return content;
        }
    });
    eleventyConfig.addPairedHandlebarsShortcode("ifOdd", function(content, index) {
        if (index%2 != 0) {
            return content;
        }
    });
    eleventyConfig.addPairedHandlebarsShortcode("ifVideo", function(content, type) {
        if (type == "video") {
            return content;
        }
    });
    eleventyConfig.addPairedHandlebarsShortcode("ifGif", function(content, type) {
        if (type == "gif") {
            return content;
        }
    });
    eleventyConfig.addPairedHandlebarsShortcode("ifImage", function(content, type) {
        if (type == "image") {
            return content;
        }
    });
};
