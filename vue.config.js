module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: 
        `
          @import "@/assets/sass/layout/_header.scss";
        `
      }
    }
  }
}