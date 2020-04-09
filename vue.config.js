const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/shared/common/styles/common/_colors.scss";`
      }
    }
  },
}
