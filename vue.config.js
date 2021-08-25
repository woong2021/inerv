module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: 
        ` 
          @import "@/assets/sass/base/_variablesList.scss";
          @import "@/assets/sass/base/_mixin.scss";
          
          @import "@/assets/sass/components/_button.scss";
          @import "@/assets/sass/components/_common.scss";
          @import "@/assets/sass/components/_table.scss";
          @import "@/assets/sass/components/_input.scss";

          @import "@/assets/sass/layout/_header.scss";
          @import "@/assets/sass/layout/_content.scss";
          @import "@/assets/sass/layout/_footer.scss";
        `
      }
    }
  }
}