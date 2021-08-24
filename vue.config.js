module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: 
        `
          @import "@/assets/sass/layout/_header.scss";
          @import "@/assets/sass/layout/_footer.scss";
        `
      }
    }
  }
}