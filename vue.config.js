module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: 
        `
          @import "@/assets/sass/components/_common.scss";
          
          @import "@/assets/sass/layout/_header.scss";
          @import "@/assets/sass/layout/_content.scss";
          @import "@/assets/sass/layout/_footer.scss";
        `
      }
    }
  }
}