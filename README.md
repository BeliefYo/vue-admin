# vue-admin

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


{
  "workbench.colorTheme": "Atom One Dark",
  "workbench.iconTheme": "vscode-simpler-icons",
  "gitlens.advanced.messages": {
    "suppressGitMissingWarning": true
  },
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "workbench.startupEditor": "none",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.settings.useSplitJSON": true,
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复
  "eslint.codeActionsOnSave": true,
  // 添加 vue 支持
  "eslint.validate": ["javascript", "javascriptreact", "html", "vue"],
  //  #去掉代码结尾的分号
  "prettier.semi": false,
  //  #使用带引号替代双引号
  "prettier.singleQuote": true,
  //  #让函数(名)和后面的括号之间加个空格

  // #这个按用户自身习惯选择
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_line_length": 120,
      "wrap_attributes": "auto",
      "end_with_newline": false
      // #vue组件中html代码格式化样式
    }
  },
  "prettier.arrowParens": "avoid",
  "prettier.useEditorConfig": false,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  "debug.javascript.pickAndAttachOptions": {},
  "prettier.trailingComma": "none",
  "terminal.integrated.profiles.osx": {
    "bash": {
      "path": "bash",
      "args": ["-l"],
      "icon": "terminal-bash"
    },
    "zsh": {
      "path": "zsh",
      "args": ["-l"]
    },
    "fish": {
      "path": "fish",
      "args": ["-l"]
    },
    "tmux": {
      "path": "tmux",
      "icon": "terminal-tmux"
    },
    "pwsh": {
      "path": "pwsh",
      "icon": "terminal-powershell"
    },
    "dash": {
      "path": "/bin/dash"
    }
  },
  "terminal.integrated.defaultProfile.osx": "zsh",
  "workbench.editor.wrapTabs": true,
  "workbench.view.alwaysShowHeaderActions": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "markdown.preview.breaks": true,
  "liveServer.settings.donotVerifyTags": true,
  "terminal.integrated.fontFamily": "Meslo LG M for Powerline",
  "eslint.codeAction.showDocumentation": {
    "enable": false
  },
  "eslint.enable": true,
  "javascript.format.insertSpaceAfterConstructor": true,
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "vscode-office.openOutline": true,
  "tabnine.experimentalAutoImports": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  // 头部注释
  "fileheader.customMade": {
    "autoAdd": false
    //   "Author": "yuanxiaolong@youlu.com",
    //   "Date": "Do not edit",
    //   "Desc": "file content",
    //   "LastEditTime": "Do not edit",
    //   "LastEditors": "yuanxiaolong@youlu.com"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "security.workspace.trust.untrustedFiles": "open",
  "vetur.validation.script": false,
  "editor.foldingMaximumRegions": 65000
}
