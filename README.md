# node npm 前端工具安裝全域工具
- 前往 [node.js](https://nodejs.org/en/) 下戴 node & npm 套件選用 LTS 版本，輸入 `node -v` & `npm -v` 指令驗証。
- `npm install gulp-cli -g` 安裝 gulp cli 全域套件，如安裝驗証可輸入指令 `gulp` 於終端機有回應 `CLI version: x.x.x` & `Local version: x.x.x` 相關版本別，就表示可在全域下執行 gulp cli 指令。

# npm & gulp 前端工具，執行指令依序輸入
- `npm install` or `npm i`：安裝所需的 gulp 與相關的 npm 套件、賴件。
  - `gulp jade` 與 `gulp copyHTML` 依是否需要 html template 選一處理 html。
  - 此 GitHub repos 的 css 編譯使用 LESS 預處理，如需使用 sass/scss 選用 [gulp-bootstrap4-scss-jade-folder-pattern](https://github.com/gmwu185/gulp-bootstrap4-scss-jade-folder-pattern) GitHub repos。
- `gulp`：執行 gulp 開發環境。
- 執行 gulp 打包任務
  - `gulp build --env production` 只執行檔案編譯不會開啟瀏覽器 browser-sysc 功能
  - `--env production` 參數指令運行環境會針對壓縮圖片、壓縮單行程式碼、移除註解處理。
  - `gulp deploy` 配合 `gulp build` 指令後，可以直接發佈到 GitHub Pages。

# JavaScript 函式庫、框架、賴件、套件來源
- 透過 gulpfile.js 設定的 vendor.js - gulp task `vendorJs`
  - 自訂的來源路徑 `./source/assets/js/mergeVendors/**/*.js` ，讓舊專案直接引入打包出來的 `allVendors.js` 檔中。
  - npm 引入的 `./node_modules/...` 專案中有用到的 JavaScript `.js` 檔整合後，打包出來的 `allVendors.js` 檔中。
  - jQuery 會於引用後，由 `$.order(['jquery.js'])` 排序較前，函式庫需於相關自行饌寫的程式碼前戴入完成。
- gulp 的 `babel` task 自訂的來源路徑 `./source/assets/js/custom/**/*.js`，用來自行饌寫的 JavaScript 程式碼，輸出後會到 `all.js` 檔中。