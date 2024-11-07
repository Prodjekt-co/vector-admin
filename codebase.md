# vite.config.ts

```ts
import { vitePluginVersionMark } from "vite-plugin-version-mark";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    vitePluginVersionMark({
      command: "git describe --tags",
      ifMeta: true,
      ifLog: true,
      ifGlobal: true,
    }),
  ],
});

```

# tsconfig.vite.json

```json
{
  "compilerOptions": {
    "composite": true,
    "module": "esnext",
    "moduleResolution": "node"
  },
  "include": ["vite.config.ts"]
}

```

# tsconfig.json

```json
// prettier-ignore
{
  "compilerOptions": {
    /* Basic Options */
    "target": "ESNext"                        /* Specify ECMAScript target version */,
    "module": "ESNext"                        /* Specify module code generation */,
    "lib": ["DOM", "DOM.Iterable", "ESNext"]  /* Specify library files to be included in the compilation. */,
    "allowJs": false                          /* Allow javascript files to be compiled. */,
    // "checkJs": true,                       /* Report errors in .js files. */
    "jsx": "react-jsx"                        /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
    "declaration": true                       /* Generates corresponding '.d.ts' file. */,
    "declarationMap": true                    /* Generates a sourcemap for each corresponding '.d.ts' file. */,
    "sourceMap": true                         /* Generates corresponding '.map' file. */,
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./lib",                     /* Redirect output structure to the directory. */
    "rootDir": "./",                          /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "removeComments": true,                /* Do not emit comments to output. */
    "noEmit": true,                           /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    "isolatedModules": true,                  /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true                            /* Enable all strict type-checking options. */,
    "noImplicitAny": false                    /* Raise error on expressions and declarations with an implied 'any' type. */,
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    "noFallthroughCasesInSwitch": true        /* Report errors for fallthrough cases in switch statement. */,

    /* Module Resolution Options */
    "moduleResolution": "Bundler"             /* Specify module resolution strategy */,
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    "types": ["vite/client"],                 /* Type declaration files to be included in compilation. */
    "allowSyntheticDefaultImports": true      /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    "esModuleInterop": false                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    "resolveJsonModule": true,

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
    "skipLibCheck": false
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.vite.json" }]
}

```

# tsconfig.eslint.json

```json
{
  "extends": "./tsconfig.json",
  "include": ["./**/*.ts", "./**/*.tsx"]
}

```

# screenshots.jpg

This is a binary file of the type: Image

# package.json

```json
{
  "name": "synapse-admin",
  "version": "0.10.3",
  "description": "Admin GUI for the Matrix.org server Synapse",
  "type": "module",
  "author": "Awesome Technologies Innovationslabor GmbH",
  "license": "Apache-2.0",
  "homepage": ".",
  "repository": {
    "type": "git",
    "url": "https://github.com/Awesome-Technologies/synapse-admin"
  },
  "packageManager": "yarn@4.1.1",
  "devDependencies": {
    "@eslint/js": "^9.7.0",
    "@testing-library/dom": "^10.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.12",
    "@types/lodash": "^4.17.7",
    "@types/node": "^20.14.12",
    "@types/papaparse": "^5.3.14",
    "@types/react": "^18.3.3",
    "@typescript-eslint/eslint-plugin": "^7.16.1",
    "@typescript-eslint/parser": "^7.16.1",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.9.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-unused-imports": "^3.2.0",
    "eslint-plugin-yaml": "^1.0.3",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "jest-fetch-mock": "^3.0.3",
    "prettier": "^3.3.3",
    "react-test-renderer": "^18.3.1",
    "ts-jest": "^29.2.3",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.5",
    "typescript-eslint": "^7.16.1",
    "vite": "^5.3.4",
    "vite-plugin-version-mark": "^0.1.0"
  },
  "dependencies": {
    "@emotion/react": "^11.13.0",
    "@emotion/styled": "^11.13.0",
    "@haleos/ra-language-german": "^1.0.0",
    "@haxqer/ra-language-chinese": "^4.16.2",
    "@mui/icons-material": "^5.16.4",
    "@mui/material": "^5.16.4",
    "history": "^5.3.0",
    "lodash": "^4.17.21",
    "papaparse": "^5.4.1",
    "query-string": "^7.1.3",
    "ra-core": "^4.16.20",
    "ra-i18n-polyglot": "^4.16.20",
    "ra-language-english": "^4.16.20",
    "ra-language-farsi": "^4.2.0",
    "ra-language-french": "^4.16.20",
    "ra-language-italian": "^3.13.1",
    "ra-language-russian": "^4.14.2",
    "react": "^18.3.1",
    "react-admin": "^4.16.20",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.52.1",
    "react-is": "^18.3.1",
    "react-query": "^3.39.3",
    "react-router": "^6.25.1",
    "react-router-dom": "^6.25.1"
  },
  "scripts": {
    "start": "vite serve",
    "build": "vite build",
    "lint": "eslint --ignore-path .gitignore --ext .ts,.tsx,.yml,.yaml .",
    "fix": "yarn lint --fix",
    "test": "yarn jest",
    "test:watch": "yarn jest --watch"
  },
  "eslintConfig": {
    "env": {
      "browser": true
    },
    "plugins": [
      "import",
      "prettier",
      "unused-imports",
      "@typescript-eslint",
      "yaml"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/stylistic",
      "plugin:import/typescript",
      "plugin:yaml/legacy"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "project": "./tsconfig.eslint.json"
    },
    "root": true,
    "rules": {
      "prettier/prettier": "error",
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": [
            "**/vite.config.ts",
            "**/jest.setup.ts",
            "**/*.test.ts",
            "**/*.test.tsx"
          ]
        }
      ],
      "import/order": [
        "error",
        {
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": false
          },
          "newlines-between": "always",
          "groups": [
            "external",
            "builtin",
            "internal",
            [
              "parent",
              "sibling",
              "index"
            ]
          ]
        }
      ],
      "unused-imports/no-unused-imports-ts": 2
    }
  },
  "prettier": {
    "printWidth": 120,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": false,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "arrowParens": "avoid"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

# jest.config.ts

```ts
import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  coveragePathIgnorePatterns: ["node_modules", "dist"],
  coverageDirectory: "<rootDir>/coverage/",
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
};
export default config;

```

# index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Synapse-Admin"
    />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="./manifest.json" />
    <link rel="shortcut icon" href="./favicon.ico" />
    <title>Synapse-Admin</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }

      .loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fafafa;
      }

      /* CSS Spinner from https://projects.lukehaas.me/css-loaders/ */

      .loader,
      .loader:before,
      .loader:after {
        border-radius: 50%;
      }

      .loader {
        color: #283593;
        font-size: 11px;
        text-indent: -99999em;
        margin: 55px auto;
        position: relative;
        width: 10em;
        height: 10em;
        box-shadow: inset 0 0 0 1em;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
      }

      .loader:before,
      .loader:after {
        position: absolute;
        content: '';
      }

      .loader:before {
        width: 5.2em;
        height: 10.2em;
        background: #fafafa;
        border-radius: 10.2em 0 0 10.2em;
        top: -0.1em;
        left: -0.1em;
        -webkit-transform-origin: 5.2em 5.1em;
        transform-origin: 5.2em 5.1em;
        -webkit-animation: load2 2s infinite ease 1.5s;
        animation: load2 2s infinite ease 1.5s;
      }

      .loader:after {
        width: 5.2em;
        height: 10.2em;
        background: #fafafa;
        border-radius: 0 10.2em 10.2em 0;
        top: -0.1em;
        left: 5.1em;
        -webkit-transform-origin: 0px 5.1em;
        transform-origin: 0px 5.1em;
        -webkit-animation: load2 2s infinite ease;
        animation: load2 2s infinite ease;
      }

      @-webkit-keyframes load2 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
      }

      @keyframes load2 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      <div class="loader-container">
        <div class="loader">Loading...</div>
      </div>
    </div>
    <script type="module" src="/src/index.tsx"></script>
    <footer
      style="position: relative; z-index: 2; height: 2em; margin-top: -2em; line-height: 2em; background-color: #eee; border: 0.5px solid #ddd">
      <a id="copyright" href="https://github.com/Awesome-Technologies/synapse-admin"
        style="margin-left: 1em; color: #888; font-family: Roboto, Helvetica, Arial, sans-serif; font-weight: 100; font-size: 0.8em; text-decoration: none;">
        Synapse-Admin <b><span id="version"></span></b> by Awesome Technologies Innovationslabor GmbH
      </a>
    </footer>
  </body>
  <script>document.getElementById("version").textContent = __SYNAPSE_ADMIN_VERSION__</script>
</html>

```

# docker-compose.yml

```yml
services:
  synapse-admin:
    container_name: synapse-admin
    hostname: synapse-admin
    image: awesometechnologies/synapse-admin:latest
    # build:
    #   context: .

    # to use the docker-compose as standalone without a local repo clone,
    # replace the context definition with this:
    # context: https://github.com/Awesome-Technologies/synapse-admin.git

    #  args:
    #    - BUILDKIT_CONTEXT_KEEP_GIT_DIR=1
    #    if you're building on an architecture other than amd64, make sure
    #    to define a maximum ram for node. otherwise the build will fail.
    #    - NODE_OPTIONS="--max_old_space_size=1024"
    #    - BASE_PATH="/synapse-admin"
    ports:
      - "8080:80"
    restart: unless-stopped

```

# README.md

```md
[![GitHub license](https://img.shields.io/github/license/Awesome-Technologies/synapse-admin)](https://github.com/Awesome-Technologies/synapse-admin/blob/master/LICENSE)
[![Build Status](https://api.travis-ci.com/Awesome-Technologies/synapse-admin.svg?branch=master)](https://app.travis-ci.com/github/Awesome-Technologies/synapse-admin)
[![build-test](https://github.com/Awesome-Technologies/synapse-admin/actions/workflows/build-test.yml/badge.svg)](https://github.com/Awesome-Technologies/synapse-admin/actions/workflows/build-test.yml)
[![gh-pages](https://github.com/Awesome-Technologies/synapse-admin/actions/workflows/edge_ghpage.yml/badge.svg)](https://awesome-technologies.github.io/synapse-admin/)
[![docker-release](https://github.com/Awesome-Technologies/synapse-admin/actions/workflows/docker-release.yml/badge.svg)](https://hub.docker.com/r/awesometechnologies/synapse-admin)
[![github-release](https://github.com/Awesome-Technologies/synapse-admin/actions/workflows/github-release.yml/badge.svg)](https://github.com/Awesome-Technologies/synapse-admin/releases)

# Synapse admin ui

This project is built using [react-admin](https://marmelab.com/react-admin/).

## Usage

### Supported Synapse

It needs at least [Synapse](https://github.com/element-hq/synapse) v1.93.0 for all functions to work as expected!

You get your server version with the request `/_synapse/admin/v1/server_version`.
See also [Synapse version API](https://element-hq.github.io/synapse/latest/admin_api/version_api.html).

After entering the URL on the login page of synapse-admin the server version appears below the input field.

### Prerequisites

You need access to the following endpoints:

- `/_matrix`
- `/_synapse/admin`

See also [Synapse administration endpoints](https://element-hq.github.io/synapse/latest/reverse_proxy.html#synapse-administration-endpoints)

### Use without install

You can use the current version of Synapse Admin without own installation direct
via [GitHub Pages](https://awesome-technologies.github.io/synapse-admin/).

**Note:**
If you want to use the deployment, you have to make sure that the admin endpoints (`/_synapse/admin`) are accessible for your browser.
**Remember: You have no need to expose these endpoints to the internet but to your network.**
If you want your own deployment, follow the [Step-By-Step Install Guide](#step-by-step-install) below.

### Step-By-Step install

You have three options:

1.  [Download the tarball and serve with any webserver](#steps-for-1)
2.  [Download the source code from github and run using nodejs](#steps-for-2)
3.  [Run the Docker container](#steps-for-3)

#### Steps for 1)

- make sure you have a webserver installed that can serve static files (any webserver like nginx or apache will do)
- configure a vhost for synapse admin on your webserver
- download the .tar.gz from the latest release: https://github.com/Awesome-Technologies/synapse-admin/releases/latest
- unpack the .tar.gz
- move or symlink the `synapse-admin-x.x.x` into your vhosts root dir
- open the url of the vhost in your browser

#### Steps for 2)

- make sure you have installed the following: git, yarn, nodejs
- download the source code: `git clone https://github.com/Awesome-Technologies/synapse-admin.git`
- change into downloaded directory: `cd synapse-admin`
- download dependencies: `yarn install`
- start web server: `yarn start`

#### Steps for 3)

- run the Docker container from the public docker registry: `docker run -p 8080:80 awesometechnologies/synapse-admin` or use the [docker-compose.yml](docker-compose.yml): `docker-compose up -d`

  > note: if you're building on an architecture other than amd64 (for example a raspberry pi), make sure to define a maximum ram for node. otherwise the build will fail.

  \`\`\`yml
  services:
    synapse-admin:
      container_name: synapse-admin
      hostname: synapse-admin
      build:
        context: https://github.com/Awesome-Technologies/synapse-admin.git
        args:
          - BUILDKIT_CONTEXT_KEEP_GIT_DIR=1
        #   - NODE_OPTIONS="--max_old_space_size=1024"
        #   - BASE_PATH="/synapse-admin"
      ports:
        - "8080:80"
      restart: unless-stopped
  \`\`\`

- browse to http://localhost:8080

### Restricting available homeserver

You can restrict the homeserver(s), so that the user can no longer define it himself.

Edit `config.json` to restrict either to a single homeserver:

\`\`\`json
{
  "restrictBaseUrl": "https://your-matrixs-erver.example.com"
}
\`\`\`

or to a list of homeservers:

\`\`\`json
{
  "restrictBaseUrl": ["https://your-first-matrix-server.example.com", "https://your-second-matrix-server.example.com"]
}
\`\`\`

The `config.json` can be injected into a Docker container using a bind mount.

\`\`\`yml
services:
  synapse-admin:
    ...
    volumes:
      ./config.json:/app/config.json:ro
    ...
\`\`\`

### Serving Synapse-Admin on a different path

The path prefix where synapse-admin is served can only be changed during the build step.

If you downloaded the source code, use `yarn build --base=/my-prefix` to set a path prefix.

If you want to build your own Docker container, use the `BASE_PATH` argument.

We do not support directly changing the path where Synapse-Admin is served in the pre-built Docker container. Instead please use a reverse proxy if you need to move Synapse-Admin to a different base path. If you want to serve multiple applications with different paths on the same domain, you need a reverse proxy anyway.

Example for Traefik:

`docker-compose.yml`

\`\`\`yml
services:
  traefik:
    image: traefik:mimolette
    restart: unless-stopped
    ports:
      - 80:80
      - 443:443
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro

  synapse-admin:
    image: awesometechnologies/synapse-admin:latest
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.synapse-admin.rule=Host(`example.com`)&&PathPrefix(`/admin`)"
      - "traefik.http.routers.synapse-admin.middlewares=admin,admin_path"
      - "traefik.http.middlewares.admin.redirectregex.regex=^(.*)/admin/?"
      - "traefik.http.middlewares.admin.redirectregex.replacement=$${1}/admin/"
      - "traefik.http.middlewares.admin_path.stripprefix.prefixes=/admin"
\`\`\`

## Screenshots

![Screenshots](./screenshots.jpg)

## Development

- See https://yarnpkg.com/getting-started/editor-sdks how to setup your IDE
- Use `yarn lint` to run all style and linter checks
- Use `yarn test` to run all unit tests
- Use `yarn fix` to fix the coding style

```

# Dockerfile

```
# Builder
FROM node:lts AS builder
LABEL org.opencontainers.image.url=https://github.com/Prodjekt-co/vector-admin org.opencontainers.image.source=https://github.com/Prodjekt-co/vector-admin
# Base path for synapse admin
ARG BASE_PATH=./

WORKDIR /src

# Copy .yarn directory to the working directory (must be on a separate line!)
# Use https://docs.docker.com/engine/reference/builder/#copy---parents when available
COPY .yarn .yarn
COPY package.json .yarnrc.yml yarn.lock ./

# Disable telemetry and install packages
RUN yarn config set enableTelemetry 0 && yarn install --immutable --network-timeout=300000

COPY . /src
RUN yarn build --base=$BASE_PATH

# App
FROM nginx:stable-alpine

COPY --from=builder /src/dist /app

RUN rm -rf /usr/share/nginx/html \
 && ln -s /app /usr/share/nginx/html

```

# .yarnrc.yml

```yml
yarnPath: .yarn/releases/yarn-4.1.1.cjs

```

# .prettierignore

```
.vscode
.yarn

```

# .gitignore

```
# Created by https://www.toptal.com/developers/gitignore/api/node,yarn,react,visualstudiocode
# Edit at https://www.toptal.com/developers/gitignore?templates=node,yarn,react,visualstudiocode

### Node ###
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*

### Node Patch ###
# Serverless Webpack directories
.webpack/

# Optional stylelint cache

# SvelteKit build / generate output
.svelte-kit

### react ###
.DS_*
**/*.backup.*
**/*.back.*

node_modules

*.sublime*

psd
thumb
sketch

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix

### VisualStudioCode Patch ###
# Ignore all local history of files
.history
.ionide

### yarn ###
# https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored

.yarn/*
!.yarn/releases
!.yarn/patches
!.yarn/plugins
!.yarn/sdks
!.yarn/versions

# if you are NOT using Zero-installs, then:
# comment the following lines
!.yarn/cache

# and uncomment the following lines
# .pnp.*

# End of https://www.toptal.com/developers/gitignore/api/node,yarn,react,visualstudiocode

```

# .gitattributes

```
yarn*.cjs binary

```

# .editorconfig

```
# EditorConfig https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 120
trim_trailing_whitespace = true

```

# .dockerignore

```
# Exclude a bunch of stuff which can make the build context a larger than it needs to be
tests/
build/
dist/
lib/
node_modules/
electron_app/
karma-reports/
.pnp.cjs
.pnp.loader.mjs
.idea/
.tmp/
config.json*

```

# src/storage.ts

```ts
const storage = localStorage;

export default storage;

```

# src/jest.setup.ts

```ts
import "@testing-library/jest-dom";

```

# src/index.tsx

```tsx
import React from "react";

import { createRoot } from "react-dom/client";

import App from "./App";
import { AppContext } from "./AppContext";

fetch("config.json")
  .then(res => res.json())
  .then(props =>
    createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <AppContext.Provider value={props}>
          <App />
        </AppContext.Provider>
      </React.StrictMode>
    )
  );

```

# src/AppContext.tsx

```tsx
import { createContext, useContext } from "react";

interface AppContextType {
  restrictBaseUrl: string | string[];
}

export const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext) as AppContextType;

```

# src/App.tsx

```tsx
import { merge } from "lodash";
import polyglotI18nProvider from "ra-i18n-polyglot";

import { Admin, CustomRoutes, Resource, resolveBrowserLocale } from "react-admin";
import { Route } from "react-router-dom";

import { ImportFeature } from "./components/ImportFeature";
import germanMessages from "./i18n/de";
import englishMessages from "./i18n/en";
import frenchMessages from "./i18n/fr";
import italianMessages from "./i18n/it";
import russianMessages from "./i18n/ru";
import chineseMessages from "./i18n/zh";
import LoginPage from "./pages/LoginPage";
import destinations from "./resources/destinations";
import registrationToken from "./resources/registration_tokens";
import reports from "./resources/reports";
import roomDirectory from "./resources/room_directory";
import rooms from "./resources/rooms";
import userMediaStats from "./resources/user_media_statistics";
import users from "./resources/users";
import authProvider from "./synapse/authProvider";
import dataProvider from "./synapse/dataProvider";

// TODO: Can we use lazy loading together with browser locale?
const messages = {
  de: germanMessages,
  en: englishMessages,
  fr: frenchMessages,
  it: italianMessages,
  ru: russianMessages,
  zh: chineseMessages,
};
const i18nProvider = polyglotI18nProvider(
  locale => (messages[locale] ? merge({}, messages.en, messages[locale]) : messages.en),
  resolveBrowserLocale(),
  [
    { locale: "en", name: "English" },
    { locale: "de", name: "Deutsch" },
    { locale: "fr", name: "Français" },
    { locale: "it", name: "Italiano" },
    { locale: "fa", name: "Persian(فارسی)" },
    { locale: "ru", name: "Russian(Русский)" },
    { locale: "zh", name: "简体中文" },
  ]
);

const App = () => (
  <Admin
    disableTelemetry
    requireAuth
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    darkTheme={{ palette: { mode: "dark" } }}
  >
    <CustomRoutes>
      <Route path="/import_users" element={<ImportFeature />} />
    </CustomRoutes>
    <Resource {...users} />
    <Resource {...rooms} />
    <Resource {...userMediaStats} />
    <Resource {...reports} />
    <Resource {...roomDirectory} />
    <Resource {...destinations} />
    <Resource {...registrationToken} />
    <Resource name="connections" />
    <Resource name="devices" />
    <Resource name="room_members" />
    <Resource name="users_media" />
    <Resource name="joined_rooms" />
    <Resource name="pushers" />
    <Resource name="servernotices" />
    <Resource name="forward_extremities" />
    <Resource name="room_state" />
    <Resource name="destination_rooms" />
  </Admin>
);

export default App;

```

# src/App.test.tsx

```tsx
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders", async () => {
    render(<App />);
    await screen.findAllByText("Welcome to Synapse-admin");
  });
});

```

# public/robots.txt

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow: /

```

# public/manifest.json

```json
{
  "short_name": "Synapse-Admin",
  "name": "Synapse-Admin",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

# public/favicon.ico

This is a binary file of the type: Binary

# public/config.json

```json
{}

```

# .github/dependabot.yml

```yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    ignore:
      # Major updates for react-admin have breaking changes
      - dependency-name: "react-admin"
        update-types: ["version-update:semver-major"]

  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"

```

# .vscode/settings.json

```json
{
  "search.exclude": {
    "**/.yarn": true,
    "**/.pnp.*": true
  },
  "eslint.nodePath": ".yarn/sdks",
  "prettier.prettierPath": ".yarn/sdks/prettier/index.cjs",
  "typescript.tsdk": ".yarn/sdks/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}

```

# .vscode/extensions.json

```json
{
  "recommendations": [
    "arcanis.vscode-zipfs",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}

```

# src/synapse/synapse.ts

```ts
import { fetchUtils } from "react-admin";

import storage from "../storage";

export const splitMxid = mxid => {
  const re = /^@(?<name>[a-zA-Z0-9._=\-/]+):(?<domain>[a-zA-Z0-9\-.]+\.[a-zA-Z]+)$/;
  return re.exec(mxid)?.groups;
};

export const isValidBaseUrl = baseUrl => /^(http|https):\/\/[a-zA-Z0-9\-.]+(:\d{1,5})?$/.test(baseUrl);

/**
 * Resolve the homeserver URL using the well-known lookup
 * @param domain  the domain part of an MXID
 * @returns homeserver base URL
 */
export const getWellKnownUrl = async domain => {
  const wellKnownUrl = `https://${domain}/.well-known/matrix/client`;
  try {
    const response = await fetchUtils.fetchJson(wellKnownUrl, { method: "GET" });
    return response.json["m.homeserver"].base_url;
  } catch {
    // if there is no .well-known entry, return the domain itself
    return `https://${domain}`;
  }
};

/**
 * Get synapse server version
 * @param base_url  the base URL of the homeserver
 * @returns server version
 */
export const getServerVersion = async baseUrl => {
  const versionUrl = `${baseUrl}/_synapse/admin/v1/server_version`;
  const response = await fetchUtils.fetchJson(versionUrl, { method: "GET" });
  return response.json.server_version;
};

/** Get supported Matrix features */
export const getSupportedFeatures = async baseUrl => {
  const versionUrl = `${baseUrl}/_matrix/client/versions`;
  const response = await fetchUtils.fetchJson(versionUrl, { method: "GET" });
  return response.json;
};

/**
 * Get supported login flows
 * @param baseUrl  the base URL of the homeserver
 * @returns array of supported login flows
 */
export const getSupportedLoginFlows = async baseUrl => {
  const loginFlowsUrl = `${baseUrl}/_matrix/client/r0/login`;
  const response = await fetchUtils.fetchJson(loginFlowsUrl, { method: "GET" });
  return response.json.flows;
};

export const getMediaUrl = media_id => {
  const baseUrl = storage.getItem("base_url");
  return `${baseUrl}/_matrix/media/v1/download/${media_id}?allow_redirect=true`;
};

/**
 * Generate a random MXID for current homeserver
 * @returns full MXID as string
 */
export function generateRandomMxId(): string {
  const homeserver = storage.getItem("home_server");
  const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
  const localpart = Array.from(crypto.getRandomValues(new Uint32Array(8)))
    .map(x => characters[x % characters.length])
    .join("");
  return `@${localpart}:${homeserver}`;
}

/**
 * Generate a random user password
 * @returns a new random password as string
 */
export function generateRandomPassword(length = 20): string {
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$";
  return Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map(x => characters[x % characters.length])
    .join("");
}

```

# src/synapse/synapse.test.ts

```ts
import { isValidBaseUrl, splitMxid } from "./synapse";

describe("splitMxid", () => {
  it("splits valid MXIDs", () =>
    expect(splitMxid("@name:domain.tld")).toEqual({
      name: "name",
      domain: "domain.tld",
    }));
  it("rejects invalid MXIDs", () => expect(splitMxid("foo")).toBeUndefined());
});

describe("isValidBaseUrl", () => {
  it("accepts a http URL", () => expect(isValidBaseUrl("http://foo.bar")).toBeTruthy());
  it("accepts a https URL", () => expect(isValidBaseUrl("https://foo.bar")).toBeTruthy());
  it("accepts a valid URL with port", () => expect(isValidBaseUrl("https://foo.bar:1234")).toBeTruthy());
  it("rejects undefined base URLs", () => expect(isValidBaseUrl(undefined)).toBeFalsy());
  it("rejects null base URLs", () => expect(isValidBaseUrl(null)).toBeFalsy());
  it("rejects empty base URLs", () => expect(isValidBaseUrl("")).toBeFalsy());
  it("rejects non-string base URLs", () => expect(isValidBaseUrl({})).toBeFalsy());
  it("rejects base URLs without protocol", () => expect(isValidBaseUrl("foo.bar")).toBeFalsy());
  it("rejects base URLs with path", () => expect(isValidBaseUrl("http://foo.bar/path")).toBeFalsy());
  it("rejects invalid base URLs", () => expect(isValidBaseUrl("http:/foo.bar")).toBeFalsy());
});

```

# src/synapse/dataProvider.ts

```ts
import { stringify } from "query-string";

import { DataProvider, DeleteParams, Identifier, Options, RaRecord, fetchUtils } from "react-admin";

import storage from "../storage";

// Adds the access token to all requests
const jsonClient = (url: string, options: Options = {}) => {
  const token = storage.getItem("access_token");
  console.log("httpClient " + url);
  if (token != null) {
    options.user = {
      authenticated: true,
      token: `Bearer ${token}`,
    };
  }
  return fetchUtils.fetchJson(url, options);
};

const mxcUrlToHttp = (mxcUrl: string) => {
  const homeserver = storage.getItem("base_url");
  const re = /^mxc:\/\/([^/]+)\/(\w+)/;
  const ret = re.exec(mxcUrl);
  console.log("mxcClient " + ret);
  if (ret == null) return null;
  const serverName = ret[1];
  const mediaId = ret[2];
  return `${homeserver}/_matrix/media/r0/thumbnail/${serverName}/${mediaId}?width=24&height=24&method=scale`;
};

interface Room {
  room_id: string;
  name?: string;
  canonical_alias?: string;
  avatar_url?: string;
  joined_members: number;
  joined_local_members: number;
  version: number;
  creator: string;
  encryption?: string;
  federatable: boolean;
  public: boolean;
  join_rules: "public" | "knock" | "invite" | "private";
  guest_access?: "can_join" | "forbidden";
  history_visibility: "invited" | "joined" | "shared" | "world_readable";
  state_events: number;
  room_type?: string;
}

interface RoomState {
  age: number;
  content: {
    alias?: string;
  };
  event_id: string;
  origin_server_ts: number;
  room_id: string;
  sender: string;
  state_key: string;
  type: string;
  user_id: string;
  unsigned: {
    age?: number;
  };
}

interface ForwardExtremity {
  event_id: string;
  state_group: number;
  depth: number;
  received_ts: number;
}

interface EventReport {
  id: number;
  received_ts: number;
  room_id: string;
  name: string;
  event_id: string;
  user_id: string;
  reason?: string;
  score?: number;
  sender: string;
  canonical_alias?: string;
}

interface Threepid {
  medium: string;
  address: string;
  added_at: number;
  validated_at: number;
}

interface ExternalId {
  auth_provider: string;
  external_id: string;
}

interface User {
  name: string;
  displayname?: string;
  threepids: Threepid[];
  avatar_url?: string;
  is_guest: 0 | 1;
  admin: 0 | 1;
  deactivated: 0 | 1;
  erased: boolean;
  shadow_banned: 0 | 1;
  creation_ts: number;
  appservice_id?: string;
  consent_server_notice_sent?: string;
  consent_version?: string;
  consent_ts?: number;
  external_ids: ExternalId[];
  user_type?: string;
  locked: boolean;
}

interface Device {
  device_id: string;
  display_name?: string;
  last_seen_ip?: string;
  last_seen_user_agent?: string;
  last_seen_ts?: number;
  user_id: string;
}

interface Connection {
  ip: string;
  last_seen: number;
  user_agent: string;
}

interface Whois {
  user_id: string;
  devices: Record<
    string,
    {
      sessions: {
        connections: Connection[];
      }[];
    }
  >;
}

interface Pusher {
  app_display_name: string;
  app_id: string;
  data: {
    url?: string;
    format: string;
  };
  url: string;
  format: string;
  device_display_name: string;
  profile_tag: string;
  kind: string;
  lang: string;
  pushkey: string;
}

interface UserMedia {
  created_ts: number;
  last_access_ts?: number;
  media_id: string;
  media_length: number;
  media_type: string;
  quarantined_by?: string;
  safe_from_quarantine: boolean;
  upload_name?: string;
}

interface UserMediaStatistic {
  displayname: string;
  media_count: number;
  media_length: number;
  user_id: string;
}

interface RegistrationToken {
  token: string;
  uses_allowed: number;
  pending: number;
  completed: number;
  expiry_time?: number;
}

interface RaServerNotice {
  id: string;
  body: string;
}

interface Destination {
  destination: string;
  retry_last_ts: number;
  retry_interval: number;
  failure_ts: number;
  last_successful_stream_ordering?: number;
}

interface DestinationRoom {
  room_id: string;
  stream_ordering: number;
}

export interface DeleteMediaParams {
  before_ts: string;
  size_gt: number;
  keep_profiles: boolean;
}

export interface DeleteMediaResult {
  deleted_media: Identifier[];
  total: number;
}

export interface SynapseDataProvider extends DataProvider {
  deleteMedia: (params: DeleteMediaParams) => Promise<DeleteMediaResult>;
}

const resourceMap = {
  users: {
    path: "/_synapse/admin/v2/users",
    map: (u: User) => ({
      ...u,
      id: u.name,
      avatar_src: u.avatar_url ? mxcUrlToHttp(u.avatar_url) : undefined,
      is_guest: !!u.is_guest,
      admin: !!u.admin,
      deactivated: !!u.deactivated,
      // need timestamp in milliseconds
      creation_ts_ms: u.creation_ts * 1000,
    }),
    data: "users",
    total: json => json.total,
    create: (data: RaRecord) => ({
      endpoint: `/_synapse/admin/v2/users/@${encodeURIComponent(data.id)}:${storage.getItem("home_server")}`,
      body: data,
      method: "PUT",
    }),
    delete: (params: DeleteParams) => ({
      endpoint: `/_synapse/admin/v1/deactivate/${encodeURIComponent(params.id)}`,
      body: { erase: true },
      method: "POST",
    }),
  },
  rooms: {
    path: "/_synapse/admin/v1/rooms",
    map: (r: Room) => ({
      ...r,
      id: r.room_id,
      alias: r.canonical_alias,
      members: r.joined_members,
      is_encrypted: !!r.encryption,
      federatable: !!r.federatable,
      public: !!r.public,
    }),
    data: "rooms",
    total: json => json.total_rooms,
    delete: (params: DeleteParams) => ({
      endpoint: `/_synapse/admin/v2/rooms/${params.id}`,
      body: { block: false },
    }),
  },
  reports: {
    path: "/_synapse/admin/v1/event_reports",
    map: (er: EventReport) => ({ ...er }),
    data: "event_reports",
    total: json => json.total,
  },
  devices: {
    map: (d: Device) => ({
      ...d,
      id: d.device_id,
    }),
    data: "devices",
    total: json => json.total,
    reference: (id: Identifier) => ({
      endpoint: `/_synapse/admin/v2/users/${encodeURIComponent(id)}/devices`,
    }),
    delete: (params: DeleteParams) => ({
      endpoint: `/_synapse/admin/v2/users/${encodeURIComponent(params.previousData.user_id)}/devices/${params.id}`,
    }),
  },
  connections: {
    path: "/_synapse/admin/v1/whois",
    map: (c: Whois) => ({
      ...c,
      id: c.user_id,
    }),
    data: "connections",
  },
  room_members: {
    map: (m: string) => ({
      id: m,
    }),
    reference: (id: Identifier) => ({
      endpoint: `/_synapse/admin/v1/rooms/${id}/members`,
    }),
    data: "members",
    total: json => json.total,
  },
  room_state: {
    map: (rs: RoomState) => ({
      ...rs,
      id: rs.event_id,
    }),
    reference: (id: Identifier) => ({
      endpoint: `/_synapse/admin/v1/rooms/${id}/state`,
    }),
    data: "state",
    total: json => json.state.length,
  },
  pushers: {
    map: (p: Pusher) => ({
      ...p,
      id: p.pushkey,
    }),
    reference: (id: Identifier) => ({
      endpoint: `/_synapse/admin/v1/users/${encodeURIComponent(id)}/pushers`,
    }),
    data: "pushers",
    total: json => json.total,
  },
  joined_rooms: {
    map: (jr: string) => ({
      id: jr,
    }),
    reference: (id: Identifier) => ({
      endpoint: `/_synapse/admin/v1/users/${encodeURIComponent(id)}/joined_rooms`,
    }),
    data: "joined_rooms",
    total: json => json.total,
  },
  users_media: {
    map: (um: UserMedia) => ({
      ...um,
      id: um.media_id,
    }),
    reference: (id: Identifier) => ({
      endpoint: `/_synapse/admin/v1/users/${encodeURIComponent(id)}/media`,
    }),
    data: "media",
    total: json => json.total,
    delete: (params: DeleteParams) => ({
      endpoint: `/_synapse/admin/v1/media/${storage.getItem("home_server")}/${params.id}`,
    }),
  },
  protect_media: {
    map: (pm: UserMedia) => ({ id: pm.media_id }),
    create: (params: UserMedia) => ({
      endpoint: `/_synapse/admin/v1/media/protect/${params.media_id}`,
      method: "POST",
    }),
    delete: (params: DeleteParams) => ({
      endpoint: `/_synapse/admin/v1/media/unprotect/${params.id}`,
      method: "POST",
    }),
  },
  quarantine_media: {
    map: (qm: UserMedia) => ({ id: qm.media_id }),
    create: (params: UserMedia) => ({
      endpoint: `/_synapse/admin/v1/media/quarantine/${storage.getItem("home_server")}/${params.media_id}`,
      method: "POST",
    }),
    delete: (params: DeleteParams) => ({
      endpoint: `/_synapse/admin/v1/media/unquarantine/${storage.getItem("home_server")}/${params.id}`,
      method: "POST",
    }),
  },
  servernotices: {
    map: (n: { event_id: string }) => ({ id: n.event_id }),
    create: (data: RaServerNotice) => ({
      endpoint: "/_synapse/admin/v1/send_server_notice",
      body: {
        user_id: data.id,
        content: {
          msgtype: "m.text",
          body: data.body,
        },
      },
      method: "POST",
    }),
  },
  user_media_statistics: {
    path: "/_synapse/admin/v1/statistics/users/media",
    map: (usms: UserMediaStatistic) => ({
      ...usms,
      id: usms.user_id,
    }),
    data: "users",
    total: json => json.total,
  },
  forward_extremities: {
    map: (fe: ForwardExtremity) => ({
      ...fe,
      id: fe.event_id,
    }),
    reference: (id: Identifier) => ({
      endpoint: `/_synapse/admin/v1/rooms/${id}/forward_extremities`,
    }),
    data: "results",
    total: json => json.count,
    delete: (params: DeleteParams) => ({
      endpoint: `/_synapse/admin/v1/rooms/${params.id}/forward_extremities`,
    }),
  },
  room_directory: {
    path: "/_matrix/client/r0/publicRooms",
    map: (rd: Room) => ({
      ...rd,
      id: rd.room_id,
      public: !!rd.public,
      guest_access: !!rd.guest_access,
      avatar_src: rd.avatar_url ? mxcUrlToHttp(rd.avatar_url) : undefined,
    }),
    data: "chunk",
    total: json => json.total_room_count_estimate,
    create: (params: RaRecord) => ({
      endpoint: `/_matrix/client/r0/directory/list/room/${params.id}`,
      body: { visibility: "public" },
      method: "PUT",
    }),
    delete: (params: DeleteParams) => ({
      endpoint: `/_matrix/client/r0/directory/list/room/${params.id}`,
      body: { visibility: "private" },
      method: "PUT",
    }),
  },
  destinations: {
    path: "/_synapse/admin/v1/federation/destinations",
    map: (dst: Destination) => ({
      ...dst,
      id: dst.destination,
    }),
    data: "destinations",
    total: json => json.total,
    delete: params => ({
      endpoint: `/_synapse/admin/v1/federation/destinations/${params.id}/reset_connection`,
      method: "POST",
    }),
  },
  destination_rooms: {
    map: (dstroom: DestinationRoom) => ({
      ...dstroom,
      id: dstroom.room_id,
    }),
    reference: (id: Identifier) => ({
      endpoint: `/_synapse/admin/v1/federation/destinations/${id}/rooms`,
    }),
    data: "rooms",
    total: json => json.total,
  },
  registration_tokens: {
    path: "/_synapse/admin/v1/registration_tokens",
    map: (rt: RegistrationToken) => ({
      ...rt,
      id: rt.token,
    }),
    data: "registration_tokens",
    total: json => json.registration_tokens.length,
    create: (params: RaRecord) => ({
      endpoint: "/_synapse/admin/v1/registration_tokens/new",
      body: params,
      method: "POST",
    }),
    delete: (params: DeleteParams) => ({
      endpoint: `/_synapse/admin/v1/registration_tokens/${params.id}`,
    }),
  },
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
function filterNullValues(key: string, value: any) {
  // Filtering out null properties
  // to reset user_type from user, it must be null
  if (value === null && key !== "user_type") {
    return undefined;
  }
  return value;
}

function getSearchOrder(order: "ASC" | "DESC") {
  if (order === "DESC") {
    return "b";
  } else {
    return "f";
  }
}

const dataProvider: SynapseDataProvider = {
  getList: async (resource, params) => {
    console.log("getList " + resource);
    const { user_id, name, guests, deactivated, search_term, destination, valid } = params.filter;
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const from = (page - 1) * perPage;
    const query = {
      from: from,
      limit: perPage,
      user_id: user_id,
      search_term: search_term,
      name: name,
      destination: destination,
      guests: guests,
      deactivated: deactivated,
      valid: valid,
      order_by: field,
      dir: getSearchOrder(order),
    };
    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homeserver not set");

    const res = resourceMap[resource];

    const endpoint_url = homeserver + res.path;
    const url = `${endpoint_url}?${stringify(query)}`;

    const { json } = await jsonClient(url);
    return {
      data: json[res.data].map(res.map),
      total: res.total(json, from, perPage),
    };
  },

  getOne: async (resource, params) => {
    console.log("getOne " + resource);
    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homeserver not set");

    const res = resourceMap[resource];

    const endpoint_url = homeserver + res.path;
    const { json } = await jsonClient(`${endpoint_url}/${encodeURIComponent(params.id)}`);
    return { data: res.map(json) };
  },

  getMany: async (resource, params) => {
    console.log("getMany " + resource);
    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homerserver not set");

    const res = resourceMap[resource];

    const endpoint_url = homeserver + res.path;
    const responses = await Promise.all(params.ids.map(id => jsonClient(`${endpoint_url}/${encodeURIComponent(id)}`)));
    return {
      data: responses.map(({ json }) => res.map(json)),
      total: responses.length,
    };
  },

  getManyReference: async (resource, params) => {
    console.log("getManyReference " + resource);
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const from = (page - 1) * perPage;
    const query = {
      from: from,
      limit: perPage,
      order_by: field,
      dir: getSearchOrder(order),
    };

    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homeserver not set");

    const res = resourceMap[resource];

    const ref = res.reference(params.id);
    const endpoint_url = `${homeserver}${ref.endpoint}?${stringify(query)}`;

    const { json } = await jsonClient(endpoint_url);
    return {
      data: json[res.data].map(res.map),
      total: res.total(json, from, perPage),
    };
  },

  update: async (resource, params) => {
    console.log("update " + resource);
    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homeserver not set");

    const res = resourceMap[resource];

    const endpoint_url = homeserver + res.path;
    const { json } = await jsonClient(`${endpoint_url}/${encodeURIComponent(params.id)}`, {
      method: "PUT",
      body: JSON.stringify(params.data, filterNullValues),
    });
    return { data: res.map(json) };
  },

  updateMany: async (resource, params) => {
    console.log("updateMany " + resource);
    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homeserver not set");

    const res = resourceMap[resource];

    const endpoint_url = homeserver + res.path;
    const responses = await Promise.all(
      params.ids.map(id => jsonClient(`${endpoint_url}/${encodeURIComponent(id)}`), {
        method: "PUT",
        body: JSON.stringify(params.data, filterNullValues),
      })
    );
    return { data: responses.map(({ json }) => json) };
  },

  create: async (resource, params) => {
    console.log("create " + resource);
    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homeserver not set");

    const res = resourceMap[resource];
    if (!("create" in res)) return Promise.reject();

    const create = res.create(params.data);
    const endpoint_url = homeserver + create.endpoint;
    const { json } = await jsonClient(endpoint_url, {
      method: create.method,
      body: JSON.stringify(create.body, filterNullValues),
    });
    return { data: res.map(json) };
  },

  createMany: async (resource: string, params: { ids: Identifier[]; data: RaRecord }) => {
    console.log("createMany " + resource);
    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homeserver not set");

    const res = resourceMap[resource];
    if (!("create" in res)) throw Error(`Create ${resource} is not allowed`);

    const responses = await Promise.all(
      params.ids.map(id => {
        params.data.id = id;
        const cre = res.create(params.data);
        const endpoint_url = homeserver + cre.endpoint;
        return jsonClient(endpoint_url, {
          method: cre.method,
          body: JSON.stringify(cre.body, filterNullValues),
        });
      })
    );
    return { data: responses.map(({ json }) => json) };
  },

  delete: async (resource, params) => {
    console.log("delete " + resource);
    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homeserver not set");

    const res = resourceMap[resource];

    if ("delete" in res) {
      const del = res.delete(params);
      const endpoint_url = homeserver + del.endpoint;
      const { json } = await jsonClient(endpoint_url, {
        method: "method" in del ? del.method : "DELETE",
        body: "body" in del ? JSON.stringify(del.body) : null,
      });
      return { data: json };
    } else {
      const endpoint_url = homeserver + res.path;
      const { json } = await jsonClient(`${endpoint_url}/${params.id}`, {
        method: "DELETE",
        body: JSON.stringify(params.previousData, filterNullValues),
      });
      return { data: json };
    }
  },

  deleteMany: async (resource, params) => {
    console.log("deleteMany " + resource);
    const homeserver = storage.getItem("base_url");
    if (!homeserver || !(resource in resourceMap)) throw Error("Homeserver not set");

    const res = resourceMap[resource];

    if ("delete" in res) {
      const responses = await Promise.all(
        params.ids.map(id => {
          const del = res.delete({ ...params, id: id });
          const endpoint_url = homeserver + del.endpoint;
          return jsonClient(endpoint_url, {
            method: "method" in del ? del.method : "DELETE",
            body: "body" in del ? JSON.stringify(del.body) : null,
          });
        })
      );
      return {
        data: responses.map(({ json }) => json),
      };
    } else {
      const endpoint_url = homeserver + res.path;
      const responses = await Promise.all(
        params.ids.map(id =>
          jsonClient(`${endpoint_url}/${id}`, {
            method: "DELETE",
            // body: JSON.stringify(params.data, filterNullValues),  @FIXME
          })
        )
      );
      return { data: responses.map(({ json }) => json) };
    }
  },

  // Custom methods (https://marmelab.com/react-admin/DataProviders.html#adding-custom-methods)

  /**
   * Delete media by date or size
   *
   * @link https://matrix-org.github.io/synapse/latest/admin_api/media_admin_api.html#delete-local-media-by-date-or-size
   *
   * @param before_ts Unix timestamp in milliseconds. Files that were last used before this timestamp will be deleted. It is the timestamp of last access, not the timestamp when the file was created.
   * @param size_gt   Size of the media in bytes. Files that are larger will be deleted.
   * @param keep_profiles Switch to also delete files that are still used in image data (e.g user profile, room avatar). If false these files will be deleted.
   * @returns
   */
  deleteMedia: async ({ before_ts, size_gt = 0, keep_profiles = true }) => {
    const homeserver = storage.getItem("home_server"); // TODO only required for synapse < 1.78.0
    const endpoint = `/_synapse/admin/v1/media/${homeserver}/delete?before_ts=${before_ts}&size_gt=${size_gt}&keep_profiles=${keep_profiles}`;

    const base_url = storage.getItem("base_url");
    const endpoint_url = base_url + endpoint;
    const { json } = await jsonClient(endpoint_url, { method: "POST" });
    return json as DeleteMediaResult;
  },
};

export default dataProvider;

```

# src/synapse/dataProvider.test.ts

```ts
import fetchMock from "jest-fetch-mock";

import dataProvider from "./dataProvider";
import storage from "../storage";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("dataProvider", () => {
  storage.setItem("base_url", "http://localhost");
  storage.setItem("access_token", "access_token");

  it("fetches all users", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        users: [
          {
            name: "user_id1",
            password_hash: "password_hash1",
            is_guest: 0,
            admin: 0,
            user_type: null,
            deactivated: 0,
            displayname: "User One",
          },
          {
            name: "user_id2",
            password_hash: "password_hash2",
            is_guest: 0,
            admin: 1,
            user_type: null,
            deactivated: 0,
            displayname: "User Two",
          },
        ],
        next_token: "100",
        total: 200,
      })
    );

    const users = await dataProvider.getList("users", {
      pagination: { page: 1, perPage: 5 },
      sort: { field: "title", order: "ASC" },
      filter: { author_id: 12 },
    });

    expect(users.data[0].id).toEqual("user_id1");
    expect(users.total).toEqual(200);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("fetches one user", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: "user_id1",
        password: "user_password",
        displayname: "User",
        threepids: [
          {
            medium: "email",
            address: "user@mail_1.com",
          },
          {
            medium: "email",
            address: "user@mail_2.com",
          },
        ],
        avatar_url: "mxc://localhost/user1",
        admin: false,
        deactivated: false,
      })
    );

    const user = await dataProvider.getOne("users", { id: "user_id1" });

    expect(user.data.id).toEqual("user_id1");
    expect(user.data.displayname).toEqual("User");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

```

# src/synapse/authProvider.ts

```ts
import { AuthProvider, Options, fetchUtils } from "react-admin";

import storage from "../storage";

const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: async ({
    base_url,
    username,
    password,
    loginToken,
  }: {
    base_url: string;
    username: string;
    password: string;
    loginToken: string;
  }) => {
    console.log("login ");
    const options: Options = {
      method: "POST",
      body: JSON.stringify(
        Object.assign(
          {
            device_id: storage.getItem("device_id"),
            initial_device_display_name: "Synapse Admin",
          },
          loginToken
            ? {
                type: "m.login.token",
                token: loginToken,
              }
            : {
                type: "m.login.password",
                user: username,
                password: password,
              }
        )
      ),
    };

    // use the base_url from login instead of the well_known entry from the
    // server, since the admin might want to access the admin API via some
    // private address
    base_url = base_url.replace(/\/+$/g, "");
    storage.setItem("base_url", base_url);

    const decoded_base_url = window.decodeURIComponent(base_url);
    const login_api_url = decoded_base_url + "/_matrix/client/r0/login";

    const { json } = await fetchUtils.fetchJson(login_api_url, options);
    storage.setItem("home_server", json.home_server);
    storage.setItem("user_id", json.user_id);
    storage.setItem("access_token", json.access_token);
    storage.setItem("device_id", json.device_id);
  },
  // called when the user clicks on the logout button
  logout: async () => {
    console.log("logout");

    const logout_api_url = storage.getItem("base_url") + "/_matrix/client/r0/logout";
    const access_token = storage.getItem("access_token");

    const options: Options = {
      method: "POST",
      user: {
        authenticated: true,
        token: `Bearer ${access_token}`,
      },
    };

    if (typeof access_token === "string") {
      await fetchUtils.fetchJson(logout_api_url, options);
      storage.removeItem("access_token");
    }
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    console.log("checkError " + status);
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    const access_token = storage.getItem("access_token");
    console.log("checkAuth " + access_token);
    return typeof access_token === "string" ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;

```

# src/synapse/authProvider.test.ts

```ts
import fetchMock from "jest-fetch-mock";

import authProvider from "./authProvider";
import storage from "../storage";

fetchMock.enableMocks();

describe("authProvider", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    storage.clear();
  });

  describe("login", () => {
    it("should successfully login with username and password", async () => {
      fetchMock.once(
        JSON.stringify({
          home_server: "example.com",
          user_id: "@user:example.com",
          access_token: "foobar",
          device_id: "some_device",
        })
      );

      const ret: undefined = await authProvider.login({
        base_url: "http://example.com",
        username: "@user:example.com",
        password: "secret",
      });

      expect(ret).toBe(undefined);
      expect(fetch).toBeCalledWith("http://example.com/_matrix/client/r0/login", {
        body: '{"device_id":null,"initial_device_display_name":"Synapse Admin","type":"m.login.password","user":"@user:example.com","password":"secret"}',
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        method: "POST",
      });
      expect(storage.getItem("base_url")).toEqual("http://example.com");
      expect(storage.getItem("user_id")).toEqual("@user:example.com");
      expect(storage.getItem("access_token")).toEqual("foobar");
      expect(storage.getItem("device_id")).toEqual("some_device");
    });
  });

  it("should successfully login with token", async () => {
    fetchMock.once(
      JSON.stringify({
        home_server: "example.com",
        user_id: "@user:example.com",
        access_token: "foobar",
        device_id: "some_device",
      })
    );

    const ret: undefined = await authProvider.login({
      base_url: "https://example.com/",
      loginToken: "login_token",
    });

    expect(ret).toBe(undefined);
    expect(fetch).toHaveBeenCalledWith("https://example.com/_matrix/client/r0/login", {
      body: '{"device_id":null,"initial_device_display_name":"Synapse Admin","type":"m.login.token","token":"login_token"}',
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      method: "POST",
    });
    expect(storage.getItem("base_url")).toEqual("https://example.com");
    expect(storage.getItem("user_id")).toEqual("@user:example.com");
    expect(storage.getItem("access_token")).toEqual("foobar");
    expect(storage.getItem("device_id")).toEqual("some_device");
  });

  describe("logout", () => {
    it("should remove the access_token from storage", async () => {
      storage.setItem("base_url", "example.com");
      storage.setItem("access_token", "foo");
      fetchMock.mockResponse(JSON.stringify({}));

      await authProvider.logout(null);

      expect(fetch).toBeCalledWith("example.com/_matrix/client/r0/logout", {
        headers: new Headers({
          Accept: "application/json",
          Authorization: "Bearer foo",
        }),
        method: "POST",
        user: { authenticated: true, token: "Bearer foo" },
      });
      expect(storage.getItem("access_token")).toBeNull();
    });
  });

  describe("checkError", () => {
    it("should resolve if error.status is not 401 or 403", async () => {
      await expect(authProvider.checkError({ status: 200 })).resolves.toBeUndefined();
    });

    it("should reject if error.status is 401", async () => {
      await expect(authProvider.checkError({ status: 401 })).rejects.toBeUndefined();
    });

    it("should reject if error.status is 403", async () => {
      await expect(authProvider.checkError({ status: 403 })).rejects.toBeUndefined();
    });
  });

  describe("checkAuth", () => {
    it("should reject when not logged in", async () => {
      await expect(authProvider.checkAuth({})).rejects.toBeUndefined();
    });

    it("should resolve when logged in", async () => {
      storage.setItem("access_token", "foobar");

      await expect(authProvider.checkAuth({})).resolves.toBeUndefined();
    });
  });

  describe("getPermissions", () => {
    it("should do nothing", async () => {
      await expect(authProvider.getPermissions(null)).resolves.toBeUndefined();
    });
  });
});

```

# src/resources/users.tsx

```tsx
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DevicesIcon from "@mui/icons-material/Devices";
import GetAppIcon from "@mui/icons-material/GetApp";
import UserIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import ViewListIcon from "@mui/icons-material/ViewList";
import {
  ArrayInput,
  ArrayField,
  Button,
  Datagrid,
  DateField,
  Create,
  CreateProps,
  Edit,
  EditProps,
  List,
  ListProps,
  SimpleForm,
  SimpleFormIterator,
  TabbedForm,
  FormTab,
  BooleanField,
  BooleanInput,
  PasswordInput,
  TextField,
  TextInput,
  ReferenceField,
  ReferenceManyField,
  ResourceProps,
  SearchInput,
  SelectInput,
  BulkDeleteButton,
  DeleteButton,
  maxLength,
  regex,
  required,
  useRecordContext,
  useTranslate,
  Pagination,
  CreateButton,
  ExportButton,
  TopToolbar,
  NumberField,
  useListContext,
  Identifier,
} from "react-admin";
import { Link } from "react-router-dom";

import AvatarField from "../components/AvatarField";
import { ServerNoticeButton, ServerNoticeBulkButton } from "../components/ServerNotices";
import { DATE_FORMAT } from "../components/date";
import { DeviceRemoveButton } from "../components/devices";
import { MediaIDField, ProtectMediaButton, QuarantineMediaButton } from "../components/media";

const choices_medium = [
  { id: "email", name: "resources.users.email" },
  { id: "msisdn", name: "resources.users.msisdn" },
];

const choices_type = [
  { id: "bot", name: "bot" },
  { id: "support", name: "support" },
];

const UserListActions = () => {
  const { isLoading, total } = useListContext();
  return (
    <TopToolbar>
      <CreateButton />
      <ExportButton disabled={isLoading || total === 0} maxResults={10000} />
      <Button component={Link} to="/import_users" label="CSV Import">
        <GetAppIcon sx={{ transform: "rotate(180deg)", fontSize: "20px" }} />
      </Button>
    </TopToolbar>
  );
};

UserListActions.defaultProps = {
  selectedIds: [],
  onUnselectItems: () => null,
};

const UserPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100, 500, 1000]} />;

const userFilters = [
  <SearchInput source="name" alwaysOn />,
  <BooleanInput source="guests" alwaysOn />,
  <BooleanInput label="resources.users.fields.show_deactivated" source="deactivated" alwaysOn />,
];

const UserBulkActionButtons = () => (
  <>
    <ServerNoticeBulkButton />
    <BulkDeleteButton
      label="resources.users.action.erase"
      confirmTitle="resources.users.helper.erase"
      mutationMode="pessimistic"
    />
  </>
);

export const UserList = (props: ListProps) => (
  <List
    {...props}
    filters={userFilters}
    filterDefaultValues={{ guests: true, deactivated: false }}
    sort={{ field: "name", order: "ASC" }}
    actions={<UserListActions />}
    pagination={<UserPagination />}
  >
    <Datagrid
      rowClick={(id: Identifier, resource: string) => `/${resource}/${id}`}
      bulkActionButtons={<UserBulkActionButtons />}
    >
      <AvatarField source="avatar_src" sx={{ height: "40px", width: "40px" }} sortBy="avatar_url" />
      <TextField source="id" sortBy="name" />
      <TextField source="displayname" />
      <BooleanField source="is_guest" />
      <BooleanField source="admin" />
      <BooleanField source="deactivated" />
      <BooleanField source="locked" />
      <BooleanField source="erased" sortable={false} />
      <DateField source="creation_ts" label="resources.users.fields.creation_ts_ms" showTime options={DATE_FORMAT} />
    </Datagrid>
  </List>
);

// https://matrix.org/docs/spec/appendices#user-identifiers
// here only local part of user_id
// maxLength = 255 - "@" - ":" - storage.getItem("home_server").length
// storage.getItem("home_server").length is not valid here
const validateUser = [required(), maxLength(253), regex(/^[a-z0-9._=\-/]+$/, "synapseadmin.users.invalid_user_id")];

const validateAddress = [required(), maxLength(255)];

const UserEditActions = () => {
  const record = useRecordContext();
  const translate = useTranslate();

  return (
    <TopToolbar>
      {!record?.deactivated && <ServerNoticeButton />}
      <DeleteButton
        label="resources.users.action.erase"
        confirmTitle={translate("resources.users.helper.erase", {
          smart_count: 1,
        })}
        mutationMode="pessimistic"
      />
    </TopToolbar>
  );
};

export const UserCreate = (props: CreateProps) => (
  <Create
    {...props}
    redirect={(resource: string | undefined, id: Identifier | undefined) => {
      return `${resource}/${id}`;
    }}
  >
    <SimpleForm>
      <TextInput source="id" autoComplete="off" validate={validateUser} />
      <TextInput source="displayname" validate={maxLength(256)} />
      <PasswordInput source="password" autoComplete="new-password" validate={maxLength(512)} />
      <SelectInput source="user_type" choices={choices_type} translateChoice={false} resettable />
      <BooleanInput source="admin" />
      <ArrayInput source="threepids">
        <SimpleFormIterator disableReordering>
          <SelectInput source="medium" choices={choices_medium} validate={required()} />
          <TextInput source="address" validate={validateAddress} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="external_ids" label="synapseadmin.users.tabs.sso">
        <SimpleFormIterator disableReordering>
          <TextInput source="auth_provider" validate={required()} />
          <TextInput source="external_id" label="resources.users.fields.id" validate={required()} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

const UserTitle = () => {
  const record = useRecordContext();
  const translate = useTranslate();
  return (
    <span>
      {translate("resources.users.name", {
        smart_count: 1,
      })}{" "}
      {record ? `"${record.displayname}"` : ""}
    </span>
  );
};

export const UserEdit = (props: EditProps) => {
  const translate = useTranslate();
  return (
    <Edit {...props} title={<UserTitle />} actions={<UserEditActions />}>
      <TabbedForm>
        <FormTab label={translate("resources.users.name", { smart_count: 1 })} icon={<PersonPinIcon />}>
          <AvatarField source="avatar_src" sortable={false} sx={{ height: "120px", width: "120px", float: "right" }} />
          <TextInput source="id" disabled />
          <TextInput source="displayname" />
          <PasswordInput source="password" autoComplete="new-password" helperText="resources.users.helper.password" />
          <SelectInput source="user_type" choices={choices_type} translateChoice={false} resettable />
          <BooleanInput source="admin" />
          <BooleanInput source="locked" />
          <BooleanInput source="deactivated" helperText="resources.users.helper.deactivate" />
          <BooleanInput source="erased" disabled />
          <DateField source="creation_ts_ms" showTime options={DATE_FORMAT} />
          <TextField source="consent_version" />
        </FormTab>

        <FormTab label="resources.users.threepid" icon={<ContactMailIcon />} path="threepid">
          <ArrayInput source="threepids">
            <SimpleFormIterator disableReordering>
              <SelectInput source="medium" choices={choices_medium} />
              <TextInput source="address" />
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>

        <FormTab label="synapseadmin.users.tabs.sso" icon={<AssignmentIndIcon />} path="sso">
          <ArrayInput source="external_ids" label={false}>
            <SimpleFormIterator disableReordering>
              <TextInput source="auth_provider" validate={required()} />
              <TextInput source="external_id" label="resources.users.fields.id" validate={required()} />
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>

        <FormTab label={translate("resources.devices.name", { smart_count: 2 })} icon={<DevicesIcon />} path="devices">
          <ReferenceManyField reference="devices" target="user_id" label={false}>
            <Datagrid style={{ width: "100%" }}>
              <TextField source="device_id" sortable={false} />
              <TextField source="display_name" sortable={false} />
              <TextField source="last_seen_ip" sortable={false} />
              <DateField source="last_seen_ts" showTime options={DATE_FORMAT} sortable={false} />
              <DeviceRemoveButton />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>

        <FormTab label="resources.connections.name" icon={<SettingsInputComponentIcon />} path="connections">
          <ReferenceField reference="connections" source="id" label={false} link={false}>
            <ArrayField source="devices[].sessions[0].connections" label="resources.connections.name">
              <Datagrid style={{ width: "100%" }} bulkActionButtons={false}>
                <TextField source="ip" sortable={false} />
                <DateField source="last_seen" showTime options={DATE_FORMAT} sortable={false} />
                <TextField source="user_agent" sortable={false} style={{ width: "100%" }} />
              </Datagrid>
            </ArrayField>
          </ReferenceField>
        </FormTab>

        <FormTab
          label={translate("resources.users_media.name", { smart_count: 2 })}
          icon={<PermMediaIcon />}
          path="media"
        >
          <ReferenceManyField
            reference="users_media"
            target="user_id"
            label={false}
            pagination={<UserPagination />}
            perPage={50}
            sort={{ field: "created_ts", order: "DESC" }}
          >
            <Datagrid style={{ width: "100%" }}>
              <MediaIDField source="media_id" />
              <DateField source="created_ts" showTime options={DATE_FORMAT} />
              <DateField source="last_access_ts" showTime options={DATE_FORMAT} />
              <NumberField source="media_length" />
              <TextField source="media_type" />
              <TextField source="upload_name" />
              <TextField source="quarantined_by" />
              <QuarantineMediaButton label="resources.quarantine_media.action.name" />
              <ProtectMediaButton label="resources.users_media.fields.safe_from_quarantine" />
              <DeleteButton mutationMode="pessimistic" redirect={false} />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>

        <FormTab label={translate("resources.rooms.name", { smart_count: 2 })} icon={<ViewListIcon />} path="rooms">
          <ReferenceManyField reference="joined_rooms" target="user_id" label={false}>
            <Datagrid style={{ width: "100%" }} rowClick={id => "/rooms/" + id + "/show"} bulkActionButtons={false}>
              <TextField source="id" sortable={false} label="resources.rooms.fields.room_id" />
              <ReferenceField
                label="resources.rooms.fields.name"
                source="id"
                reference="rooms"
                sortable={false}
                link=""
              >
                <TextField source="name" sortable={false} />
              </ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        </FormTab>

        <FormTab
          label={translate("resources.pushers.name", { smart_count: 2 })}
          icon={<NotificationsIcon />}
          path="pushers"
        >
          <ReferenceManyField reference="pushers" target="user_id" label={false}>
            <Datagrid style={{ width: "100%" }} bulkActionButtons={false}>
              <TextField source="kind" sortable={false} />
              <TextField source="app_display_name" sortable={false} />
              <TextField source="app_id" sortable={false} />
              <TextField source="data.url" sortable={false} />
              <TextField source="device_display_name" sortable={false} />
              <TextField source="lang" sortable={false} />
              <TextField source="profile_tag" sortable={false} />
              <TextField source="pushkey" sortable={false} />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

const resource: ResourceProps = {
  name: "users",
  icon: UserIcon,
  list: UserList,
  edit: UserEdit,
  create: UserCreate,
};

export default resource;

```

# src/resources/user_media_statistics.tsx

```tsx
import EqualizerIcon from "@mui/icons-material/Equalizer";
import {
  Datagrid,
  ExportButton,
  List,
  ListProps,
  NumberField,
  Pagination,
  ResourceProps,
  SearchInput,
  TextField,
  TopToolbar,
  useListContext,
} from "react-admin";

import { DeleteMediaButton } from "../components/media";

const ListActions = () => {
  const { isLoading, total } = useListContext();
  return (
    <TopToolbar>
      <DeleteMediaButton />
      <ExportButton disabled={isLoading || total === 0} />
    </TopToolbar>
  );
};

const UserMediaStatsPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100, 500, 1000]} />;

const userMediaStatsFilters = [<SearchInput source="search_term" alwaysOn />];

export const UserMediaStatsList = (props: ListProps) => (
  <List
    {...props}
    actions={<ListActions />}
    filters={userMediaStatsFilters}
    pagination={<UserMediaStatsPagination />}
    sort={{ field: "media_length", order: "DESC" }}
  >
    <Datagrid rowClick={id => "/users/" + id + "/media"} bulkActionButtons={false}>
      <TextField source="user_id" label="resources.users.fields.id" />
      <TextField source="displayname" label="resources.users.fields.displayname" />
      <NumberField source="media_count" />
      <NumberField source="media_length" />
    </Datagrid>
  </List>
);

const resource: ResourceProps = {
  name: "user_media_statistics",
  icon: EqualizerIcon,
  list: UserMediaStatsList,
};

export default resource;

```

# src/resources/rooms.tsx

```tsx
import EventIcon from "@mui/icons-material/Event";
import FastForwardIcon from "@mui/icons-material/FastForward";
import UserIcon from "@mui/icons-material/Group";
import HttpsIcon from "@mui/icons-material/Https";
import NoEncryptionIcon from "@mui/icons-material/NoEncryption";
import PageviewIcon from "@mui/icons-material/Pageview";
import ViewListIcon from "@mui/icons-material/ViewList";
import RoomIcon from "@mui/icons-material/ViewList";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import {
  BooleanField,
  BulkDeleteButton,
  DateField,
  Datagrid,
  DatagridConfigurable,
  DeleteButton,
  ExportButton,
  FunctionField,
  List,
  ListProps,
  NumberField,
  Pagination,
  ReferenceField,
  ReferenceManyField,
  ResourceProps,
  SearchInput,
  SelectColumnsButton,
  SelectField,
  Show,
  ShowProps,
  Tab,
  TabbedShowLayout,
  TextField,
  TopToolbar,
  useRecordContext,
  useTranslate,
} from "react-admin";

import {
  RoomDirectoryBulkUnpublishButton,
  RoomDirectoryBulkPublishButton,
  RoomDirectoryUnpublishButton,
  RoomDirectoryPublishButton,
} from "./room_directory";
import { DATE_FORMAT } from "../components/date";

const RoomPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100, 500, 1000]} />;

const RoomTitle = () => {
  const record = useRecordContext();
  const translate = useTranslate();
  let name = "";
  if (record) {
    name = record.name !== "" ? record.name : record.id;
  }

  return (
    <span>
      {translate("resources.rooms.name", 1)} {name}
    </span>
  );
};

const RoomShowActions = () => {
  const record = useRecordContext();
  const publishButton = record?.public ? <RoomDirectoryUnpublishButton /> : <RoomDirectoryPublishButton />;
  // FIXME: refresh after (un)publish
  return (
    <TopToolbar>
      {publishButton}
      <DeleteButton
        mutationMode="pessimistic"
        confirmTitle="resources.rooms.action.erase.title"
        confirmContent="resources.rooms.action.erase.content"
      />
    </TopToolbar>
  );
};

export const RoomShow = (props: ShowProps) => {
  const translate = useTranslate();
  return (
    <Show {...props} actions={<RoomShowActions />} title={<RoomTitle />}>
      <TabbedShowLayout>
        <Tab label="synapseadmin.rooms.tabs.basic" icon={<ViewListIcon />}>
          <TextField source="room_id" />
          <TextField source="name" />
          <TextField source="topic" />
          <TextField source="canonical_alias" />
          <ReferenceField source="creator" reference="users">
            <TextField source="id" />
          </ReferenceField>
        </Tab>

        <Tab label="synapseadmin.rooms.tabs.detail" icon={<PageviewIcon />} path="detail">
          <TextField source="joined_members" />
          <TextField source="joined_local_members" />
          <TextField source="joined_local_devices" />
          <TextField source="state_events" />
          <TextField source="version" />
          <TextField source="encryption" emptyText={translate("resources.rooms.enums.unencrypted")} />
        </Tab>

        <Tab label="synapseadmin.rooms.tabs.members" icon={<UserIcon />} path="members">
          <ReferenceManyField reference="room_members" target="room_id" label={false}>
            <Datagrid style={{ width: "100%" }} rowClick={id => "/users/" + id} bulkActionButtons={false}>
              <TextField source="id" sortable={false} label="resources.users.fields.id" />
              <ReferenceField
                label="resources.users.fields.displayname"
                source="id"
                reference="users"
                sortable={false}
                link=""
              >
                <TextField source="displayname" sortable={false} />
              </ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        </Tab>

        <Tab label="synapseadmin.rooms.tabs.permission" icon={<VisibilityIcon />} path="permission">
          <BooleanField source="federatable" />
          <BooleanField source="public" />
          <SelectField
            source="join_rules"
            choices={[
              { id: "public", name: "resources.rooms.enums.join_rules.public" },
              { id: "knock", name: "resources.rooms.enums.join_rules.knock" },
              { id: "invite", name: "resources.rooms.enums.join_rules.invite" },
              {
                id: "private",
                name: "resources.rooms.enums.join_rules.private",
              },
            ]}
          />
          <SelectField
            source="guest_access"
            choices={[
              {
                id: "can_join",
                name: "resources.rooms.enums.guest_access.can_join",
              },
              {
                id: "forbidden",
                name: "resources.rooms.enums.guest_access.forbidden",
              },
            ]}
          />
          <SelectField
            source="history_visibility"
            choices={[
              {
                id: "invited",
                name: "resources.rooms.enums.history_visibility.invited",
              },
              {
                id: "joined",
                name: "resources.rooms.enums.history_visibility.joined",
              },
              {
                id: "shared",
                name: "resources.rooms.enums.history_visibility.shared",
              },
              {
                id: "world_readable",
                name: "resources.rooms.enums.history_visibility.world_readable",
              },
            ]}
          />
        </Tab>

        <Tab label={translate("resources.room_state.name", { smart_count: 2 })} icon={<EventIcon />} path="state">
          <ReferenceManyField reference="room_state" target="room_id" label={false}>
            <Datagrid style={{ width: "100%" }} bulkActionButtons={false}>
              <TextField source="type" sortable={false} />
              <DateField source="origin_server_ts" showTime options={DATE_FORMAT} sortable={false} />
              <TextField source="content" sortable={false} />
              <ReferenceField source="sender" reference="users" sortable={false}>
                <TextField source="id" />
              </ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        </Tab>

        <Tab label="resources.forward_extremities.name" icon={<FastForwardIcon />} path="forward_extremities">
          <Box
            sx={{
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              margin: "0.5em",
            }}
          >
            {translate("resources.rooms.helper.forward_extremities")}
          </Box>
          <ReferenceManyField reference="forward_extremities" target="room_id" label={false}>
            <Datagrid style={{ width: "100%" }} bulkActionButtons={false}>
              <TextField source="id" sortable={false} />
              <DateField source="received_ts" showTime options={DATE_FORMAT} sortable={false} />
              <NumberField source="depth" sortable={false} />
              <TextField source="state_group" sortable={false} />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

const RoomBulkActionButtons = () => (
  <>
    <RoomDirectoryBulkPublishButton />
    <RoomDirectoryBulkUnpublishButton />
    <BulkDeleteButton
      confirmTitle="resources.rooms.action.erase.title"
      confirmContent="resources.rooms.action.erase.content"
      mutationMode="pessimistic"
    />
  </>
);

const roomFilters = [<SearchInput source="search_term" alwaysOn />];

const RoomListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <ExportButton />
  </TopToolbar>
);

export const RoomList = (props: ListProps) => {
  const theme = useTheme();

  return (
    <List
      {...props}
      pagination={<RoomPagination />}
      sort={{ field: "name", order: "ASC" }}
      filters={roomFilters}
      actions={<RoomListActions />}
    >
      <DatagridConfigurable
        rowClick="show"
        bulkActionButtons={<RoomBulkActionButtons />}
        omit={["joined_local_members", "state_events", "version", "federatable"]}
      >
        <BooleanField
          source="is_encrypted"
          sortBy="encryption"
          TrueIcon={HttpsIcon}
          FalseIcon={NoEncryptionIcon}
          label={<HttpsIcon />}
          sx={{
            [`& [data-testid="true"]`]: { color: theme.palette.success.main },
            [`& [data-testid="false"]`]: { color: theme.palette.error.main },
          }}
        />
        <FunctionField source="name" render={record => record["name"] || record["canonical_alias"] || record["id"]} />
        <TextField source="joined_members" />
        <TextField source="joined_local_members" />
        <TextField source="state_events" />
        <TextField source="version" />
        <BooleanField source="federatable" />
        <BooleanField source="public" />
      </DatagridConfigurable>
    </List>
  );
};

const resource: ResourceProps = {
  name: "rooms",
  icon: RoomIcon,
  list: RoomList,
  show: RoomShow,
};

export default resource;

```

# src/resources/room_directory.tsx

```tsx
import RoomDirectoryIcon from "@mui/icons-material/FolderShared";
import {
  BooleanField,
  BulkDeleteButton,
  BulkDeleteButtonProps,
  Button,
  ButtonProps,
  DatagridConfigurable,
  DeleteButtonProps,
  ExportButton,
  DeleteButton,
  List,
  NumberField,
  Pagination,
  ResourceProps,
  SelectColumnsButton,
  TextField,
  TopToolbar,
  useCreate,
  useDataProvider,
  useListContext,
  useNotify,
  useTranslate,
  useRecordContext,
  useRefresh,
  useUnselectAll,
} from "react-admin";
import { useMutation } from "react-query";

import AvatarField from "../components/AvatarField";

const RoomDirectoryPagination = () => <Pagination rowsPerPageOptions={[100, 500, 1000, 2000]} />;

export const RoomDirectoryUnpublishButton = (props: DeleteButtonProps) => {
  const translate = useTranslate();

  return (
    <DeleteButton
      {...props}
      label="resources.room_directory.action.erase"
      redirect={false}
      mutationMode="pessimistic"
      confirmTitle={translate("resources.room_directory.action.title", {
        smart_count: 1,
      })}
      confirmContent={translate("resources.room_directory.action.content", {
        smart_count: 1,
      })}
      resource="room_directory"
      icon={<RoomDirectoryIcon />}
    />
  );
};

export const RoomDirectoryBulkUnpublishButton = (props: BulkDeleteButtonProps) => (
  <BulkDeleteButton
    {...props}
    label="resources.room_directory.action.erase"
    mutationMode="pessimistic"
    confirmTitle="resources.room_directory.action.title"
    confirmContent="resources.room_directory.action.content"
    resource="room_directory"
    icon={<RoomDirectoryIcon />}
  />
);

export const RoomDirectoryBulkPublishButton = (props: ButtonProps) => {
  const { selectedIds } = useListContext();
  const notify = useNotify();
  const refresh = useRefresh();
  const unselectAllRooms = useUnselectAll("rooms");
  const dataProvider = useDataProvider();
  const { mutate, isLoading } = useMutation(
    () =>
      dataProvider.createMany("room_directory", {
        ids: selectedIds,
        data: {},
      }),
    {
      onSuccess: () => {
        notify("resources.room_directory.action.send_success");
        unselectAllRooms();
        refresh();
      },
      onError: () =>
        notify("resources.room_directory.action.send_failure", {
          type: "error",
        }),
    }
  );

  return (
    <Button {...props} label="resources.room_directory.action.create" onClick={mutate} disabled={isLoading}>
      <RoomDirectoryIcon />
    </Button>
  );
};

export const RoomDirectoryPublishButton = (props: ButtonProps) => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();
  const [create, { isLoading }] = useCreate();

  const handleSend = () => {
    create(
      "room_directory",
      { data: { id: record.id } },
      {
        onSuccess: () => {
          notify("resources.room_directory.action.send_success");
          refresh();
        },
        onError: () =>
          notify("resources.room_directory.action.send_failure", {
            type: "error",
          }),
      }
    );
  };

  return (
    <Button {...props} label="resources.room_directory.action.create" onClick={handleSend} disabled={isLoading}>
      <RoomDirectoryIcon />
    </Button>
  );
};

const RoomDirectoryListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <ExportButton />
  </TopToolbar>
);

export const RoomDirectoryList = () => (
  <List pagination={<RoomDirectoryPagination />} perPage={100} actions={<RoomDirectoryListActions />}>
    <DatagridConfigurable
      rowClick={id => "/rooms/" + id + "/show"}
      bulkActionButtons={<RoomDirectoryBulkUnpublishButton />}
      omit={["room_id", "canonical_alias", "topic"]}
    >
      <AvatarField
        source="avatar_src"
        sortable={false}
        sx={{ height: "40px", width: "40px" }}
        label="resources.rooms.fields.avatar"
      />
      <TextField source="name" sortable={false} label="resources.rooms.fields.name" />
      <TextField source="room_id" sortable={false} label="resources.rooms.fields.room_id" />
      <TextField source="canonical_alias" sortable={false} label="resources.rooms.fields.canonical_alias" />
      <TextField source="topic" sortable={false} label="resources.rooms.fields.topic" />
      <NumberField source="num_joined_members" sortable={false} label="resources.rooms.fields.joined_members" />
      <BooleanField source="world_readable" sortable={false} label="resources.room_directory.fields.world_readable" />
      <BooleanField source="guest_can_join" sortable={false} label="resources.room_directory.fields.guest_can_join" />
    </DatagridConfigurable>
  </List>
);

const resource: ResourceProps = {
  name: "room_directory",
  icon: RoomDirectoryIcon,
  list: RoomDirectoryList,
};

export default resource;

```

# src/resources/reports.tsx

```tsx
import PageviewIcon from "@mui/icons-material/Pageview";
import ViewListIcon from "@mui/icons-material/ViewList";
import ReportIcon from "@mui/icons-material/Warning";
import {
  Datagrid,
  DateField,
  DeleteButton,
  List,
  ListProps,
  NumberField,
  Pagination,
  ReferenceField,
  ResourceProps,
  Show,
  ShowProps,
  Tab,
  TabbedShowLayout,
  TextField,
  TopToolbar,
  useRecordContext,
  useTranslate,
} from "react-admin";

import { DATE_FORMAT } from "../components/date";
import { MXCField } from "../components/media";

const ReportPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100, 500, 1000]} />;

export const ReportShow = (props: ShowProps) => {
  const translate = useTranslate();
  return (
    <Show {...props} actions={<ReportShowActions />}>
      <TabbedShowLayout>
        <Tab
          label={translate("synapseadmin.reports.tabs.basic", {
            smart_count: 1,
          })}
          icon={<ViewListIcon />}
        >
          <DateField source="received_ts" showTime options={DATE_FORMAT} sortable={true} />
          <ReferenceField source="user_id" reference="users">
            <TextField source="id" />
          </ReferenceField>
          <NumberField source="score" />
          <TextField source="reason" />
          <TextField source="name" />
          <TextField source="canonical_alias" label="resources.rooms.fields.canonical_alias" />
          <ReferenceField source="room_id" reference="rooms" link="show" label="resources.rooms.fields.room_id">
            <TextField source="id" />
          </ReferenceField>
        </Tab>

        <Tab label="synapseadmin.reports.tabs.detail" icon={<PageviewIcon />} path="detail">
          <DateField source="event_json.origin_server_ts" showTime options={DATE_FORMAT} sortable={true} />
          <ReferenceField source="sender" reference="users">
            <TextField source="id" />
          </ReferenceField>
          <TextField source="sender" label="Sender (raw user ID)" />
          <TextField source="event_id" />
          <TextField source="event_json.origin" />
          <TextField source="event_json.type" />
          <TextField source="event_json.content.msgtype" />
          <TextField source="event_json.content.body" />
          <TextField source="event_json.content.info.mimetype" />
          <MXCField source="event_json.content.url" />
          <TextField source="event_json.content.format" />
          <TextField source="event_json.content.formatted_body" />
          <TextField source="event_json.content.algorithm" />
          <TextField source="event_json.content.device_id" label="resources.devices.fields.device_id" />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

const ReportShowActions = () => {
  const record = useRecordContext();

  return (
    <TopToolbar>
      <DeleteButton
        record={record}
        mutationMode="pessimistic"
        confirmTitle="resources.reports.action.erase.title"
        confirmContent="resources.reports.action.erase.content"
      />
    </TopToolbar>
  );
};

export const ReportList = (props: ListProps) => (
  <List {...props} pagination={<ReportPagination />} sort={{ field: "received_ts", order: "DESC" }}>
    <Datagrid rowClick="show" bulkActionButtons={false}>
      <TextField source="id" sortable={false} />
      <DateField source="received_ts" showTime options={DATE_FORMAT} sortable={true} />
      <TextField sortable={false} source="user_id" />
      <TextField sortable={false} source="name" />
      <TextField sortable={false} source="score" />
    </Datagrid>
  </List>
);

const resource: ResourceProps = {
  name: "reports",
  icon: ReportIcon,
  list: ReportList,
  show: ReportShow,
};

export default resource;

```

# src/resources/registration_tokens.tsx

```tsx
import RegistrationTokenIcon from "@mui/icons-material/ConfirmationNumber";
import {
  BooleanInput,
  Create,
  CreateProps,
  Datagrid,
  DateField,
  DateTimeInput,
  Edit,
  EditProps,
  List,
  ListProps,
  maxValue,
  number,
  NumberField,
  NumberInput,
  regex,
  ResourceProps,
  SaveButton,
  SimpleForm,
  TextInput,
  TextField,
  Toolbar,
} from "react-admin";

import { DATE_FORMAT, dateFormatter, dateParser } from "../components/date";

const validateToken = [regex(/^[A-Za-z0-9._~-]{0,64}$/)];
const validateUsesAllowed = [number()];
const validateLength = [number(), maxValue(64)];

const registrationTokenFilters = [<BooleanInput source="valid" alwaysOn />];

export const RegistrationTokenList = (props: ListProps) => (
  <List
    {...props}
    filters={registrationTokenFilters}
    filterDefaultValues={{ valid: true }}
    pagination={false}
    perPage={500}
  >
    <Datagrid rowClick="edit">
      <TextField source="token" sortable={false} />
      <NumberField source="uses_allowed" sortable={false} />
      <NumberField source="pending" sortable={false} />
      <NumberField source="completed" sortable={false} />
      <DateField source="expiry_time" showTime options={DATE_FORMAT} sortable={false} />
    </Datagrid>
  </List>
);

export const RegistrationTokenCreate = (props: CreateProps) => (
  <Create {...props} redirect="list">
    <SimpleForm
      toolbar={
        <Toolbar>
          {/* It is possible to create tokens per default without input. */}
          <SaveButton alwaysEnable />
        </Toolbar>
      }
    >
      <TextInput source="token" autoComplete="off" validate={validateToken} resettable />
      <NumberInput
        source="length"
        validate={validateLength}
        helperText="resources.registration_tokens.helper.length"
        step={1}
      />
      <NumberInput source="uses_allowed" validate={validateUsesAllowed} step={1} />
      <DateTimeInput source="expiry_time" parse={dateParser} />
    </SimpleForm>
  </Create>
);

export const RegistrationTokenEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="token" disabled />
      <NumberInput source="pending" disabled />
      <NumberInput source="completed" disabled />
      <NumberInput source="uses_allowed" validate={validateUsesAllowed} step={1} />
      <DateTimeInput source="expiry_time" parse={dateParser} format={dateFormatter} />
    </SimpleForm>
  </Edit>
);

const resource: ResourceProps = {
  name: "registration_tokens",
  icon: RegistrationTokenIcon,
  list: RegistrationTokenList,
  edit: RegistrationTokenEdit,
  create: RegistrationTokenCreate,
};

export default resource;

```

# src/resources/destinations.tsx

```tsx
import { MouseEvent } from "react";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import DestinationsIcon from "@mui/icons-material/CloudQueue";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ViewListIcon from "@mui/icons-material/ViewList";
import {
  Button,
  Datagrid,
  DateField,
  List,
  ListProps,
  Pagination,
  RaRecord,
  ReferenceField,
  ReferenceManyField,
  ResourceProps,
  SearchInput,
  Show,
  ShowProps,
  Tab,
  TabbedShowLayout,
  TextField,
  TopToolbar,
  useRecordContext,
  useDelete,
  useNotify,
  useRefresh,
  useTranslate,
} from "react-admin";

import { DATE_FORMAT } from "../components/date";

const DestinationPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100, 500, 1000]} />;

const destinationRowSx = (record: RaRecord) => ({
  backgroundColor: record.retry_last_ts > 0 ? "#ffcccc" : "white",
});

const destinationFilters = [<SearchInput source="destination" alwaysOn />];

export const DestinationReconnectButton = () => {
  const record = useRecordContext();
  const refresh = useRefresh();
  const notify = useNotify();
  const [handleReconnect, { isLoading }] = useDelete();

  // Reconnect is not required if no error has occurred. (`failure_ts`)
  if (!record || !record.failure_ts) return null;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // Prevents redirection to the detail page when clicking in the list
    e.stopPropagation();

    handleReconnect(
      "destinations",
      { id: record.id },
      {
        onSuccess: () => {
          notify("ra.notification.updated", {
            messageArgs: { smart_count: 1 },
          });
          refresh();
        },
        onError: () => {
          notify("ra.message.error", { type: "error" });
        },
      }
    );
  };

  return (
    <Button label="resources.destinations.action.reconnect" onClick={handleClick} disabled={isLoading}>
      <AutorenewIcon />
    </Button>
  );
};

const DestinationShowActions = () => (
  <TopToolbar>
    <DestinationReconnectButton />
  </TopToolbar>
);

const DestinationTitle = () => {
  const record = useRecordContext();
  const translate = useTranslate();
  return (
    <span>
      {translate("resources.destinations.name", 1)} {record?.destination}
    </span>
  );
};

export const DestinationList = (props: ListProps) => {
  return (
    <List
      {...props}
      filters={destinationFilters}
      pagination={<DestinationPagination />}
      sort={{ field: "destination", order: "ASC" }}
    >
      <Datagrid rowSx={destinationRowSx} rowClick={id => `${id}/show/rooms`} bulkActionButtons={false}>
        <TextField source="destination" />
        <DateField source="failure_ts" showTime options={DATE_FORMAT} />
        <DateField source="retry_last_ts" showTime options={DATE_FORMAT} />
        <TextField source="retry_interval" />
        <TextField source="last_successful_stream_ordering" />
        <DestinationReconnectButton />
      </Datagrid>
    </List>
  );
};

export const DestinationShow = (props: ShowProps) => {
  const translate = useTranslate();
  return (
    <Show actions={<DestinationShowActions />} title={<DestinationTitle />} {...props}>
      <TabbedShowLayout>
        <Tab label="status" icon={<ViewListIcon />}>
          <TextField source="destination" />
          <DateField source="failure_ts" showTime options={DATE_FORMAT} />
          <DateField source="retry_last_ts" showTime options={DATE_FORMAT} />
          <TextField source="retry_interval" />
          <TextField source="last_successful_stream_ordering" />
        </Tab>

        <Tab label={translate("resources.rooms.name", { smart_count: 2 })} icon={<FolderSharedIcon />} path="rooms">
          <ReferenceManyField
            reference="destination_rooms"
            target="destination"
            label={false}
            pagination={<DestinationPagination />}
            perPage={50}
          >
            <Datagrid style={{ width: "100%" }} rowClick={id => `/rooms/${id}/show`}>
              <TextField source="room_id" label="resources.rooms.fields.room_id" />
              <TextField source="stream_ordering" sortable={false} />
              <ReferenceField
                label="resources.rooms.fields.name"
                source="id"
                reference="rooms"
                sortable={false}
                link=""
              >
                <TextField source="name" sortable={false} />
              </ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

const resource: ResourceProps = {
  name: "destinations",
  icon: DestinationsIcon,
  list: DestinationList,
  show: DestinationShow,
};

export default resource;

```

# src/pages/LoginPage.tsx

```tsx
import { useState, useEffect } from "react";

import LockIcon from "@mui/icons-material/Lock";
import { Avatar, Box, Button, Card, CardActions, CircularProgress, MenuItem, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Form,
  FormDataConsumer,
  Notification,
  required,
  useLogin,
  useNotify,
  useLocaleState,
  useTranslate,
  PasswordInput,
  TextInput,
  useLocales,
} from "react-admin";
import { useFormContext } from "react-hook-form";

import { useAppContext } from "../AppContext";
import {
  getServerVersion,
  getSupportedFeatures,
  getSupportedLoginFlows,
  getWellKnownUrl,
  isValidBaseUrl,
  splitMxid,
} from "../synapse/synapse";
import storage from "../storage";

const FormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 1rem)",
  alignItems: "center",
  justifyContent: "flex-start",
  background: "url(./images/floating-cogs.svg)",
  backgroundColor: "#f9f9f9",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  [`& .card`]: {
    width: "30rem",
    marginTop: "6rem",
    marginBottom: "6rem",
  },
  [`& .avatar`]: {
    margin: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  [`& .icon`]: {
    backgroundColor: theme.palette.grey[500],
  },
  [`& .hint`]: {
    marginTop: "1em",
    marginBottom: "1em",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.grey[600],
  },
  [`& .form`]: {
    padding: "0 1rem 1rem 1rem",
  },
  [`& .select`]: {
    marginBottom: "2rem",
  },
  [`& .actions`]: {
    padding: "0 1rem 1rem 1rem",
  },
  [`& .serverVersion`]: {
    color: theme.palette.grey[500],
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    marginLeft: "0.5rem",
  },
  [`& .matrixVersions`]: {
    color: theme.palette.grey[500],
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "0.8rem",
    marginBottom: "1rem",
    marginLeft: "0.5rem",
  },
}));

const LoginPage = () => {
  const login = useLogin();
  const notify = useNotify();
  const { restrictBaseUrl } = useAppContext();
  const allowSingleBaseUrl = typeof restrictBaseUrl === "string";
  const allowMultipleBaseUrls = Array.isArray(restrictBaseUrl);
  const allowAnyBaseUrl = !(allowSingleBaseUrl || allowMultipleBaseUrls);
  const [loading, setLoading] = useState(false);
  const [supportPassAuth, setSupportPassAuth] = useState(true);
  const [locale, setLocale] = useLocaleState();
  const locales = useLocales();
  const translate = useTranslate();
  const base_url = allowSingleBaseUrl ? restrictBaseUrl : storage.getItem("base_url");
  const [ssoBaseUrl, setSSOBaseUrl] = useState("");
  const loginToken = /\?loginToken=([a-zA-Z0-9_-]+)/.exec(window.location.href);

  if (loginToken) {
    const ssoToken = loginToken[1];
    console.log("SSO token is", ssoToken);
    // Prevent further requests
    window.history.replaceState({}, "", window.location.href.replace(loginToken[0], "#").split("#")[0]);
    const baseUrl = storage.getItem("sso_base_url");
    storage.removeItem("sso_base_url");
    if (baseUrl) {
      const auth = {
        base_url: baseUrl,
        username: null,
        password: null,
        loginToken: ssoToken,
      };
      console.log("Base URL is:", baseUrl);
      console.log("SSO Token is:", ssoToken);
      console.log("Let's try token login...");
      login(auth).catch(error => {
        alert(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
              ? "ra.auth.sign_in_error"
              : error.message
        );
        console.error(error);
      });
    }
  }

  const validateBaseUrl = value => {
    if (!value.match(/^(http|https):\/\//)) {
      return translate("synapseadmin.auth.protocol_error");
    } else if (!value.match(/^(http|https):\/\/[a-zA-Z0-9\-.]+(:\d{1,5})?[^?&\s]*$/)) {
      return translate("synapseadmin.auth.url_error");
    } else {
      return undefined;
    }
  };

  const handleSubmit = auth => {
    setLoading(true);
    login(auth).catch(error => {
      setLoading(false);
      notify(
        typeof error === "string"
          ? error
          : typeof error === "undefined" || !error.message
            ? "ra.auth.sign_in_error"
            : error.message,
        { type: "warning" }
      );
    });
  };

  const handleSSO = () => {
    storage.setItem("sso_base_url", ssoBaseUrl);
    const ssoFullUrl = `${ssoBaseUrl}/_matrix/client/r0/login/sso/redirect?redirectUrl=${encodeURIComponent(
      window.location.href
    )}`;
    window.location.href = ssoFullUrl;
  };

  const UserData = ({ formData }) => {
    const form = useFormContext();
    const [serverVersion, setServerVersion] = useState("");
    const [matrixVersions, setMatrixVersions] = useState("");

    const handleUsernameChange = () => {
      if (formData.base_url || allowSingleBaseUrl) return;
      // check if username is a full qualified userId then set base_url accordingly
      const domain = splitMxid(formData.username)?.domain;
      if (domain) {
        getWellKnownUrl(domain).then(url => {
          if (allowAnyBaseUrl || (allowMultipleBaseUrls && restrictBaseUrl.includes(url)))
            form.setValue("base_url", url);
        });
      }
    };

    useEffect(() => {
      if (formData.base_url === "" && allowMultipleBaseUrls) {
        form.setValue("base_url", restrictBaseUrl[0]);
      }
      if (!isValidBaseUrl(formData.base_url)) return;

      getServerVersion(formData.base_url)
        .then(serverVersion => setServerVersion(`${translate("synapseadmin.auth.server_version")} ${serverVersion}`))
        .catch(() => setServerVersion(""));

      getSupportedFeatures(formData.base_url)
        .then(features =>
          setMatrixVersions(`${translate("synapseadmin.auth.supports_specs")} ${features.versions.join(", ")}`)
        )
        .catch(() => setMatrixVersions(""));

      // Set SSO Url
      getSupportedLoginFlows(formData.base_url)
        .then(loginFlows => {
          const supportPass = loginFlows.find(f => f.type === "m.login.password") !== undefined;
          const supportSSO = loginFlows.find(f => f.type === "m.login.sso") !== undefined;
          setSupportPassAuth(supportPass);
          setSSOBaseUrl(supportSSO ? formData.base_url : "");
        })
        .catch(() => setSSOBaseUrl(""));
    }, [formData.base_url, form]);

    return (
      <>
        <Box>
          <TextInput
            autoFocus
            source="username"
            label="ra.auth.username"
            autoComplete="username"
            disabled={loading || !supportPassAuth}
            onBlur={handleUsernameChange}
            resettable
            fullWidth
            validate={required()}
          />
        </Box>
        <Box>
          <PasswordInput
            source="password"
            label="ra.auth.password"
            type="password"
            autoComplete="current-password"
            disabled={loading || !supportPassAuth}
            resettable
            fullWidth
            validate={required()}
          />
        </Box>
        <Box>
          <TextInput
            source="base_url"
            label="synapseadmin.auth.base_url"
            select={allowMultipleBaseUrls}
            autoComplete="url"
            disabled={loading}
            readOnly={allowSingleBaseUrl}
            resettable={allowAnyBaseUrl}
            fullWidth
            validate={[required(), validateBaseUrl]}
          >
            {allowMultipleBaseUrls &&
              restrictBaseUrl.map(url => (
                <MenuItem key={url} value={url}>
                  {url}
                </MenuItem>
              ))}
          </TextInput>
        </Box>
        <Typography className="serverVersion">{serverVersion}</Typography>
        <Typography className="matrixVersions">{matrixVersions}</Typography>
      </>
    );
  };

  return (
    <Form defaultValues={{ base_url: base_url }} onSubmit={handleSubmit} mode="onTouched">
      <FormBox>
        <Card className="card">
          <Box className="avatar">
            {loading ? (
              <CircularProgress size={25} thickness={2} />
            ) : (
              <Avatar className="icon">
                <LockIcon />
              </Avatar>
            )}
          </Box>
          <Box className="hint">{translate("synapseadmin.auth.welcome")}</Box>
          <Box className="form">
            <Select
              value={locale}
              onChange={e => setLocale(e.target.value)}
              fullWidth
              disabled={loading}
              className="select"
            >
              {locales.map(l => (
                <MenuItem key={l.locale} value={l.locale}>
                  {l.name}
                </MenuItem>
              ))}
            </Select>
            <FormDataConsumer>{formDataProps => <UserData {...formDataProps} />}</FormDataConsumer>
            <CardActions className="actions">
              <Button
                variant="contained"
                type="submit"
                color="primary"
                disabled={loading || !supportPassAuth}
                fullWidth
              >
                {translate("ra.auth.sign_in")}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSSO}
                disabled={loading || ssoBaseUrl === ""}
                fullWidth
              >
                {translate("synapseadmin.auth.sso_sign_in")}
              </Button>
            </CardActions>
          </Box>
        </Card>
      </FormBox>
      <Notification />
    </Form>
  );
};

export default LoginPage;

```

# src/pages/LoginPage.test.tsx

```tsx
import polyglotI18nProvider from "ra-i18n-polyglot";

import { render, screen } from "@testing-library/react";
import { AdminContext } from "react-admin";

import LoginPage from "./LoginPage";
import { AppContext } from "../AppContext";
import englishMessages from "../i18n/en";

const i18nProvider = polyglotI18nProvider(() => englishMessages, "en", [{ locale: "en", name: "English" }]);

describe("LoginForm", () => {
  it("renders with no restriction to homeserver", () => {
    render(
      <AdminContext i18nProvider={i18nProvider}>
        <LoginPage />
      </AdminContext>
    );

    screen.getByText(englishMessages.synapseadmin.auth.welcome);
    screen.getByRole("combobox", { name: "" });
    screen.getByRole("textbox", { name: englishMessages.ra.auth.username });
    screen.getByText(englishMessages.ra.auth.password);
    const baseUrlInput = screen.getByRole("textbox", {
      name: englishMessages.synapseadmin.auth.base_url,
    });
    expect(baseUrlInput.className.split(" ")).not.toContain("Mui-readOnly");
    screen.getByRole("button", { name: englishMessages.ra.auth.sign_in });
  });

  it("renders with single restricted homeserver", () => {
    render(
      <AppContext.Provider value={{ restrictBaseUrl: "https://matrix.example.com" }}>
        <AdminContext i18nProvider={i18nProvider}>
          <LoginPage />
        </AdminContext>
      </AppContext.Provider>
    );

    screen.getByText(englishMessages.synapseadmin.auth.welcome);
    screen.getByRole("combobox", { name: "" });
    screen.getByRole("textbox", { name: englishMessages.ra.auth.username });
    screen.getByText(englishMessages.ra.auth.password);
    const baseUrlInput = screen.getByRole("textbox", {
      name: englishMessages.synapseadmin.auth.base_url,
    });
    expect(baseUrlInput.className.split(" ")).toContain("Mui-readOnly");
    screen.getByRole("button", { name: englishMessages.ra.auth.sign_in });
  });

  it("renders with multiple restricted homeservers", async () => {
    render(
      <AppContext.Provider
        value={{
          restrictBaseUrl: ["https://matrix.example.com", "https://matrix.example.org"],
        }}
      >
        <AdminContext i18nProvider={i18nProvider}>
          <LoginPage />
        </AdminContext>
      </AppContext.Provider>
    );

    screen.getByText(englishMessages.synapseadmin.auth.welcome);
    screen.getByRole("combobox", { name: "" });
    screen.getByRole("textbox", { name: englishMessages.ra.auth.username });
    screen.getByText(englishMessages.ra.auth.password);
    screen.getByRole("combobox", {
      name: englishMessages.synapseadmin.auth.base_url,
    });
    screen.getByRole("button", { name: englishMessages.ra.auth.sign_in });
  });
});

```

# src/components/media.tsx

```tsx
import { get } from "lodash";
import { useState } from "react";

import BlockIcon from "@mui/icons-material/Block";
import IconCancel from "@mui/icons-material/Cancel";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, Tooltip } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import {
  BooleanInput,
  Button,
  ButtonProps,
  DateTimeInput,
  NumberInput,
  SaveButton,
  SimpleForm,
  Toolbar,
  ToolbarProps,
  useCreate,
  useDataProvider,
  useDelete,
  useNotify,
  useRecordContext,
  useRefresh,
  useTranslate,
} from "react-admin";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

import { dateParser } from "./date";
import { DeleteMediaParams, SynapseDataProvider } from "../synapse/dataProvider";
import { getMediaUrl } from "../synapse/synapse";
import storage from "../storage";

const DeleteMediaDialog = ({ open, onClose, onSubmit }) => {
  const translate = useTranslate();

  const DeleteMediaToolbar = (props: ToolbarProps) => (
    <Toolbar {...props}>
      <SaveButton label="delete_media.action.send" icon={<DeleteSweepIcon />} />
      <Button label="ra.action.cancel" onClick={onClose}>
        <IconCancel />
      </Button>
    </Toolbar>
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{translate("delete_media.action.send")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{translate("delete_media.helper.send")}</DialogContentText>
        <SimpleForm toolbar={<DeleteMediaToolbar />} onSubmit={onSubmit}>
          <DateTimeInput
            fullWidth
            source="before_ts"
            label="delete_media.fields.before_ts"
            defaultValue={0}
            parse={dateParser}
          />
          <NumberInput
            fullWidth
            source="size_gt"
            label="delete_media.fields.size_gt"
            defaultValue={0}
            min={0}
            step={1024}
          />
          <BooleanInput
            fullWidth
            source="keep_profiles"
            label="delete_media.fields.keep_profiles"
            defaultValue={true}
          />
        </SimpleForm>
      </DialogContent>
    </Dialog>
  );
};

export const DeleteMediaButton = (props: ButtonProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const notify = useNotify();
  const dataProvider = useDataProvider<SynapseDataProvider>();
  const { mutate: deleteMedia, isLoading } = useMutation(
    (values: DeleteMediaParams) => dataProvider.deleteMedia(values),
    {
      onSuccess: () => {
        notify("delete_media.action.send_success");
        closeDialog();
      },
      onError: () => {
        notify("delete_media.action.send_failure", {
          type: "error",
        });
      },
    }
  );

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <Button
        {...props}
        label="delete_media.action.send"
        onClick={openDialog}
        disabled={isLoading}
        sx={{
          color: theme.palette.error.main,
          "&:hover": {
            backgroundColor: alpha(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            "@media (hover: none)": {
              backgroundColor: "transparent",
            },
          },
        }}
      >
        <DeleteSweepIcon />
      </Button>
      <DeleteMediaDialog open={open} onClose={closeDialog} onSubmit={deleteMedia} />
    </>
  );
};

export const ProtectMediaButton = (props: ButtonProps) => {
  const record = useRecordContext();
  const translate = useTranslate();
  const refresh = useRefresh();
  const notify = useNotify();
  const [create, { isLoading }] = useCreate();
  const [deleteOne] = useDelete();

  if (!record) return null;

  const handleProtect = () => {
    create(
      "protect_media",
      { data: record },
      {
        onSuccess: () => {
          notify("resources.protect_media.action.send_success");
          refresh();
        },
        onError: () =>
          notify("resources.protect_media.action.send_failure", {
            type: "error",
          }),
      }
    );
  };

  const handleUnprotect = () => {
    deleteOne(
      "protect_media",
      { id: record.id },
      {
        onSuccess: () => {
          notify("resources.protect_media.action.send_success");
          refresh();
        },
        onError: () =>
          notify("resources.protect_media.action.send_failure", {
            type: "error",
          }),
      }
    );
  };

  return (
    /*
    Wrapping Tooltip with <div>
    https://github.com/marmelab/react-admin/issues/4349#issuecomment-578594735
    */
    <>
      {record.quarantined_by && (
        <Tooltip
          title={translate("resources.protect_media.action.none", {
            _: "resources.protect_media.action.none",
          })}
        >
          <div>
            {/*
            Button instead BooleanField for
            consistent appearance and position in the column
            */}
            <Button {...props} disabled={true}>
              <ClearIcon />
            </Button>
          </div>
        </Tooltip>
      )}
      {record.safe_from_quarantine && (
        <Tooltip
          title={translate("resources.protect_media.action.delete", {
            _: "resources.protect_media.action.delete",
          })}
          arrow
        >
          <div>
            <Button {...props} onClick={handleUnprotect} disabled={isLoading}>
              <LockIcon />
            </Button>
          </div>
        </Tooltip>
      )}
      {!record.safe_from_quarantine && !record.quarantined_by && (
        <Tooltip
          title={translate("resources.protect_media.action.create", {
            _: "resources.protect_media.action.create",
          })}
        >
          <div>
            <Button {...props} onClick={handleProtect} disabled={isLoading}>
              <LockOpenIcon />
            </Button>
          </div>
        </Tooltip>
      )}
    </>
  );
};

export const QuarantineMediaButton = (props: ButtonProps) => {
  const record = useRecordContext();
  const translate = useTranslate();
  const refresh = useRefresh();
  const notify = useNotify();
  const [create, { isLoading }] = useCreate();
  const [deleteOne] = useDelete();

  if (!record) return null;

  const handleQuarantaine = () => {
    create(
      "quarantine_media",
      { data: record },
      {
        onSuccess: () => {
          notify("resources.quarantine_media.action.send_success");
          refresh();
        },
        onError: () =>
          notify("resources.quarantine_media.action.send_failure", {
            type: "error",
          }),
      }
    );
  };

  const handleRemoveQuarantaine = () => {
    deleteOne(
      "quarantine_media",
      { id: record.id, previousData: record },
      {
        onSuccess: () => {
          notify("resources.quarantine_media.action.send_success");
          refresh();
        },
        onError: () =>
          notify("resources.quarantine_media.action.send_failure", {
            type: "error",
          }),
      }
    );
  };

  return (
    <>
      {record.safe_from_quarantine && (
        <Tooltip
          title={translate("resources.quarantine_media.action.none", {
            _: "resources.quarantine_media.action.none",
          })}
        >
          <div>
            <Button {...props} disabled={true}>
              <ClearIcon />
            </Button>
          </div>
        </Tooltip>
      )}
      {record.quarantined_by && (
        <Tooltip
          title={translate("resources.quarantine_media.action.delete", {
            _: "resources.quarantine_media.action.delete",
          })}
        >
          <div>
            <Button {...props} onClick={handleRemoveQuarantaine} disabled={isLoading}>
              <BlockIcon color="error" />
            </Button>
          </div>
        </Tooltip>
      )}
      {!record.safe_from_quarantine && !record.quarantined_by && (
        <Tooltip
          title={translate("resources.quarantine_media.action.create", {
            _: "resources.quarantine_media.action.create",
          })}
        >
          <div>
            <Button {...props} onClick={handleQuarantaine} disabled={isLoading}>
              <BlockIcon />
            </Button>
          </div>
        </Tooltip>
      )}
    </>
  );
};

export const ViewMediaButton = ({ media_id, label }) => {
  const translate = useTranslate();
  const url = getMediaUrl(media_id);
  return (
    <Box style={{ whiteSpace: "pre" }}>
      <Tooltip title={translate("resources.users_media.action.open")}>
        <span>
          <Button
            component={Link}
            to={url}
            target="_blank"
            rel="noopener"
            style={{ minWidth: 0, paddingLeft: 0, paddingRight: 0 }}
          >
            <FileOpenIcon />
          </Button>
        </span>
      </Tooltip>
      {label}
    </Box>
  );
};

export const MediaIDField = ({ source }) => {
  const homeserver = storage.getItem("home_server");
  const record = useRecordContext();
  if (!record) return null;

  const src = get(record, source)?.toString();
  if (!src) return null;

  return <ViewMediaButton media_id={`${homeserver}/${src}`} label={src} />;
};

export const MXCField = ({ source }) => {
  const record = useRecordContext();
  if (!record) return null;

  const src = get(record, source)?.toString();
  if (!src) return null;

  const media_id = src.replace("mxc://", "");

  return <ViewMediaButton media_id={media_id} label={src} />;
};

```

# src/components/devices.tsx

```tsx
import { DeleteWithConfirmButton, DeleteWithConfirmButtonProps, useRecordContext } from "react-admin";

export const DeviceRemoveButton = (props: DeleteWithConfirmButtonProps) => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <DeleteWithConfirmButton
      {...props}
      label="ra.action.remove"
      confirmTitle="resources.devices.action.erase.title"
      confirmContent="resources.devices.action.erase.content"
      mutationMode="pessimistic"
      redirect={false}
      translateOptions={{
        id: record.id,
        name: record.display_name ? record.display_name : record.id,
      }}
    />
  );
};

```

# src/components/date.ts

```ts
export const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

export const dateParser = (v: string | number | Date): number => {
  const d = new Date(v);
  return d.getTime();
};

export const dateFormatter = (v: string | number | Date | undefined | null): string => {
  if (v === undefined || v === null) return "";
  const d = new Date(v);

  const pad = "00";
  const year = d.getFullYear().toString();
  const month = (pad + (d.getMonth() + 1).toString()).slice(-2);
  const day = (pad + d.getDate().toString()).slice(-2);
  const hour = (pad + d.getHours().toString()).slice(-2);
  const minute = (pad + d.getMinutes().toString()).slice(-2);

  // target format yyyy-MM-ddThh:mm
  return `${year}-${month}-${day}T${hour}:${minute}`;
};

```

# src/components/ServerNotices.tsx

```tsx
import { useState } from "react";

import IconCancel from "@mui/icons-material/Cancel";
import MessageIcon from "@mui/icons-material/Message";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import {
  Button,
  RaRecord,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  ToolbarProps,
  required,
  useCreate,
  useDataProvider,
  useListContext,
  useNotify,
  useRecordContext,
  useTranslate,
  useUnselectAll,
} from "react-admin";
import { useMutation } from "react-query";

const ServerNoticeDialog = ({ open, onClose, onSubmit }) => {
  const translate = useTranslate();

  const ServerNoticeToolbar = (props: ToolbarProps & { pristine?: boolean }) => (
    <Toolbar {...props}>
      <SaveButton label="resources.servernotices.action.send" disabled={props.pristine} />
      <Button label="ra.action.cancel" onClick={onClose}>
        <IconCancel />
      </Button>
    </Toolbar>
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{translate("resources.servernotices.action.send")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{translate("resources.servernotices.helper.send")}</DialogContentText>
        <SimpleForm toolbar={<ServerNoticeToolbar />} onSubmit={onSubmit}>
          <TextInput
            source="body"
            label="resources.servernotices.fields.body"
            fullWidth
            multiline
            rows="4"
            resettable
            validate={required()}
          />
        </SimpleForm>
      </DialogContent>
    </Dialog>
  );
};

export const ServerNoticeButton = () => {
  const record = useRecordContext();
  const [open, setOpen] = useState(false);
  const notify = useNotify();
  const [create, { isLoading }] = useCreate();

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleSend = (values: Partial<RaRecord>) => {
    create(
      "servernotices",
      { data: { id: record.id, ...values } },
      {
        onSuccess: () => {
          notify("resources.servernotices.action.send_success");
          handleDialogClose();
        },
        onError: () =>
          notify("resources.servernotices.action.send_failure", {
            type: "error",
          }),
      }
    );
  };

  return (
    <>
      <Button label="resources.servernotices.send" onClick={handleDialogOpen} disabled={isLoading}>
        <MessageIcon />
      </Button>
      <ServerNoticeDialog open={open} onClose={handleDialogClose} onSubmit={handleSend} />
    </>
  );
};

export const ServerNoticeBulkButton = () => {
  const { selectedIds } = useListContext();
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const notify = useNotify();
  const unselectAllUsers = useUnselectAll("users");
  const dataProvider = useDataProvider();

  const { mutate: sendNotices, isLoading } = useMutation(
    data =>
      dataProvider.createMany("servernotices", {
        ids: selectedIds,
        data: data,
      }),
    {
      onSuccess: () => {
        notify("resources.servernotices.action.send_success");
        unselectAllUsers();
        closeDialog();
      },
      onError: () =>
        notify("resources.servernotices.action.send_failure", {
          type: "error",
        }),
    }
  );

  return (
    <>
      <Button label="resources.servernotices.send" onClick={openDialog} disabled={isLoading}>
        <MessageIcon />
      </Button>
      <ServerNoticeDialog open={open} onClose={closeDialog} onSubmit={sendNotices} />
    </>
  );
};

```

# src/components/ImportFeature.tsx

```tsx
import { parse as parseCsv, unparse as unparseCsv, ParseResult } from "papaparse";
import { ChangeEvent, useState } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  FormControlLabel,
  NativeSelect,
} from "@mui/material";
import { DataProvider, useTranslate } from "ra-core";
import { useDataProvider, useNotify, RaRecord, Title } from "react-admin";

import { generateRandomMxId, generateRandomPassword } from "../synapse/synapse";

const LOGGING = true;

const expectedFields = ["id", "displayname"].sort();

function TranslatableOption({ value, text }) {
  const translate = useTranslate();
  return <option value={value}>{translate(text)}</option>;
}

type Progress = {
  done: number;
  limit: number;
} | null;

interface ImportLine {
  id: string;
  displayname: string;
  user_type?: string;
  name?: string;
  deactivated?: boolean;
  guest?: boolean;
  admin?: boolean;
  is_admin?: boolean;
  password?: string;
  avatar_url?: string;
}

interface ChangeStats {
  total: number;
  id: number;
  is_guest: number;
  admin: number;
  password: number;
}

interface ImportResult {
  skippedRecords: RaRecord[];
  erroredRecords: RaRecord[];
  succeededRecords: RaRecord[];
  totalRecordCount: number;
  changeStats: ChangeStats;
  wasDryRun: boolean;
}

const FilePicker = () => {
  const [values, setValues] = useState<ImportLine[]>([]);
  const [error, setError] = useState<string | string[] | null>(null);
  const [stats, setStats] = useState<ChangeStats | null>(null);
  const [dryRun, setDryRun] = useState(true);

  const [progress, setProgress] = useState<Progress>(null);

  const [importResults, setImportResults] = useState<ImportResult | null>(null);
  const [skippedRecords, setSkippedRecords] = useState<string>("");

  const [conflictMode, setConflictMode] = useState("stop");
  const [passwordMode, setPasswordMode] = useState(true);
  const [useridMode, setUseridMode] = useState("ignore");

  const translate = useTranslate();
  const notify = useNotify();

  const dataProvider = useDataProvider();

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (progress !== null) return;

    setValues([]);
    setError(null);
    setStats(null);
    setImportResults(null);
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;
    /* Let's refuse some unreasonably big files instead of freezing
     * up the browser */
    if (file.size > 100000000) {
      const message = translate("import_users.errors.unreasonably_big", {
        size: (file.size / (1024 * 1024)).toFixed(2),
      });
      notify(message);
      setError(message);
      return;
    }
    try {
      parseCsv<ImportLine>(file, {
        header: true,
        skipEmptyLines: true /* especially for a final EOL in the csv file */,
        complete: result => {
          if (result.errors) {
            setError(result.errors.map(e => e.toString()));
          }
          /* Papaparse is very lenient, we may be able to salvage
           * the data in the file. */
          verifyCsv(result, { setValues, setStats, setError });
        },
      });
    } catch {
      setError("Unknown error");
      return null;
    }
  };

  const verifyCsv = ({ data, meta, errors }: ParseResult<ImportLine>, { setValues, setStats, setError }) => {
    /* First, verify the presence of required fields */
    const missingFields = expectedFields.filter(eF => meta.fields?.find(mF => eF === mF));

    if (missingFields.length > 0) {
      setError(translate("import_users.error.required_field", { field: missingFields[0] }));
      return false;
    }

    // XXX after deciding on how "name" and friends should be handled below,
    //     this place will want changes, too.

    /* Collect some stats to prevent sneaky csv files from adding admin
       users or something.
     */
    const stats = {
      user_types: { default: 0 },
      is_guest: 0,
      admin: 0,
      deactivated: 0,
      password: 0,
      avatar_url: 0,
      id: 0,

      total: data.length,
    };

    const errorMessages = errors.map(e => e.message);
    data.forEach((line, idx) => {
      if (line.user_type === undefined || line.user_type === "") {
        stats.user_types.default++;
      } else {
        stats.user_types[line.user_type] += 1;
      }
      /* XXX correct the csv export that react-admin offers for the users
       * resource so it gives sensible field names and doesn't duplicate
       * id as "name"?
       */
      if (meta.fields?.includes("name")) {
        delete line.name;
      }
      if (meta.fields?.includes("user_type")) {
        delete line.user_type;
      }
      if (meta.fields?.includes("is_admin")) {
        delete line.is_admin;
      }

      ["is_guest", "admin", "deactivated"].forEach(f => {
        if (line[f] === "true") {
          stats[f]++;
          line[f] = true; // we need true booleans instead of strings
        } else {
          if (line[f] !== "false" && line[f] !== "") {
            errorMessages.push(
              translate("import_users.error.invalid_value", {
                field: f,
                row: idx,
              })
            );
          }
          line[f] = false; // default values to false
        }
      });

      if (line.password !== undefined && line.password !== "") {
        stats.password++;
      }

      if (line.avatar_url !== undefined && line.avatar_url !== "") {
        stats.avatar_url++;
      }

      if (line.id !== undefined && line.id !== "") {
        stats.id++;
      }
    });

    if (errorMessages.length > 0) {
      setError(errorMessages);
    }
    setStats(stats);
    setValues(data);

    return true;
  };

  const runImport = async () => {
    if (progress !== null) {
      notify("import_users.errors.already_in_progress");
      return;
    }

    const results = await doImport(
      dataProvider,
      values,
      conflictMode,
      passwordMode,
      useridMode,
      dryRun,
      setProgress,
      setError
    );
    setImportResults(results);
    // offer CSV download of skipped or errored records
    // (so that the user doesn't have to filter out successful
    // records manually when fixing stuff in the CSV)
    setSkippedRecords(unparseCsv(results.skippedRecords));
    if (LOGGING) console.log("Skipped records:");
    if (LOGGING) console.log(skippedRecords);
  };

  // XXX every single one of the requests will restart the activity indicator
  //     which doesn't look very good.

  const doImport = async (
    dataProvider: DataProvider,
    data: ImportLine[],
    conflictMode: string,
    passwordMode: boolean,
    useridMode: string,
    dryRun: boolean,
    setProgress: (progress: Progress) => void,
    setError: (message: string) => void
  ): Promise<ImportResult> => {
    const skippedRecords: ImportLine[] = [];
    const erroredRecords: ImportLine[] = [];
    const succeededRecords: ImportLine[] = [];
    const changeStats: ChangeStats = {
      total: 0,
      id: 0,
      is_guest: 0,
      admin: 0,
      password: 0,
    };
    let entriesDone = 0;
    const entriesCount = data.length;
    try {
      setProgress({ done: entriesDone, limit: entriesCount });
      for (const entry of data) {
        const userRecord = { ...entry };
        // No need to do a bunch of cryptographic random number getting if
        // we are using neither a generated password nor a generated user id.
        if (useridMode === "ignore" || userRecord.id === undefined) {
          userRecord.id = generateRandomMxId();
        }
        if (passwordMode === false || entry.password === undefined) {
          userRecord.password = generateRandomPassword();
        }
        /* TODO record update stats (especially admin no -> yes, deactivated x -> !x, ... */

        /* For these modes we will consider the ID that's in the record.
         * If the mode is "stop", we will not continue adding more records, and
         * we will offer information on what was already added and what was
         * skipped.
         *
         * If the mode is "skip", we record the record for later, but don't
         * send it to the server.
         *
         * If the mode is "update", we change fields that are reasonable to
         * update.
         *  - If the "password mode" is "true" (i.e. "use passwords from csv"):
         *    - if the record has a password
         *      - send the password along with the record
         *    - if the record has no password
         *      - generate a new password
         *  - If the "password mode" is "false"
         *    - never generate a new password to update existing users with
         */

        /* We just act as if there are no IDs in the CSV, so every user will be
         * created anew.
         * We do a simple retry loop so that an accidental hit on an existing ID
         * doesn't trip us up.
         */
        if (LOGGING) console.log("will check for existence of record " + JSON.stringify(userRecord));
        let retries = 0;
        const submitRecord = (recordData: ImportLine) => {
          return dataProvider.getOne("users", { id: recordData.id }).then(
            async () => {
              if (LOGGING) console.log("already existed");

              if (useridMode === "update" || conflictMode === "skip") {
                skippedRecords.push(recordData);
              } else if (conflictMode === "stop") {
                throw new Error(
                  translate("import_users.error.id_exits", {
                    id: recordData.id,
                  })
                );
              } else {
                const newRecordData = Object.assign({}, recordData, {
                  id: generateRandomMxId(),
                });
                retries++;
                if (retries > 512) {
                  console.warn("retry loop got stuck? pathological situation?");
                  skippedRecords.push(recordData);
                } else {
                  await submitRecord(newRecordData);
                }
              }
            },
            async () => {
              if (LOGGING) console.log("OK to create record " + recordData.id + " (" + recordData.displayname + ").");

              if (!dryRun) {
                await dataProvider.create("users", { data: recordData });
              }
              succeededRecords.push(recordData);
            }
          );
        };

        await submitRecord(userRecord);
        entriesDone++;
        setProgress({ done: entriesDone, limit: data.length });
      }

      setProgress(null);
    } catch (e) {
      setError(
        translate("import_users.error.at_entry", {
          entry: entriesDone + 1,
          message: e instanceof Error ? e.message : String(e),
        })
      );
      setProgress(null);
    }
    return {
      skippedRecords,
      erroredRecords,
      succeededRecords,
      totalRecordCount: entriesCount,
      changeStats,
      wasDryRun: dryRun,
    };
  };

  const downloadSkippedRecords = () => {
    const element = document.createElement("a");
    console.log(skippedRecords);
    const file = new Blob([skippedRecords], {
      type: "text/comma-separated-values",
    });
    element.href = URL.createObjectURL(file);
    element.download = "skippedRecords.csv";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const onConflictModeChanged = async (e: ChangeEvent<HTMLSelectElement>) => {
    if (progress !== null) {
      return;
    }

    const value = e.target.value;
    setConflictMode(value);
  };

  const onPasswordModeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (progress !== null) {
      return;
    }

    setPasswordMode(e.target.checked);
  };

  const onUseridModeChanged = async (e: ChangeEvent<HTMLSelectElement>) => {
    if (progress !== null) {
      return;
    }

    const value = e.target.value;
    setUseridMode(value);
  };

  const onDryRunModeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (progress !== null) {
      return;
    }
    setDryRun(e.target.checked);
  };

  // render individual small components

  const statsCards = stats &&
    !importResults && [
      <Container>
        <CardHeader title={translate("import_users.cards.importstats.header")} />
        <CardContent>
          <div>{translate("import_users.cards.importstats.users_total", stats.total)}</div>
          <div>{translate("import_users.cards.importstats.guest_count", stats.is_guest)}</div>
          <div>{translate("import_users.cards.importstats.admin_count", stats.admin)}</div>
        </CardContent>
      </Container>,
      <Container>
        <CardHeader title={translate("import_users.cards.ids.header")} />
        <CardContent>
          <div>
            {stats.id === stats.total
              ? translate("import_users.cards.ids.all_ids_present")
              : translate("import_users.cards.ids.count_ids_present", stats.id)}
          </div>
          {stats.id > 0 ? (
            <div>
              <NativeSelect onChange={onUseridModeChanged} value={useridMode} disabled={progress !== null}>
                <TranslatableOption value="ignore" text="import_users.cards.ids.mode.ignore" />
                <TranslatableOption value="update" text="import_users.cards.ids.mode.update" />
              </NativeSelect>
            </div>
          ) : (
            ""
          )}
        </CardContent>
      </Container>,
      <Container>
        <CardHeader title={translate("import_users.cards.passwords.header")} />
        <CardContent>
          <div>
            {stats.password === stats.total
              ? translate("import_users.cards.passwords.all_passwords_present")
              : translate("import_users.cards.passwords.count_passwords_present", stats.password)}
          </div>
          {stats.password > 0 ? (
            <div>
              <FormControlLabel
                control={
                  <Checkbox checked={passwordMode} disabled={progress !== null} onChange={onPasswordModeChange} />
                }
                label={translate("import_users.cards.passwords.use_passwords")}
              />
            </div>
          ) : (
            ""
          )}
        </CardContent>
      </Container>,
    ];

  const conflictCards = stats && !importResults && (
    <Container>
      <CardHeader title={translate("import_users.cards.conflicts.header")} />
      <CardContent>
        <div>
          <NativeSelect onChange={onConflictModeChanged} value={conflictMode} disabled={progress !== null}>
            <TranslatableOption value="stop" text="import_users.cards.conflicts.mode.stop" />
            <TranslatableOption value="skip" text="import_users.cards.conflicts.mode.skip" />
          </NativeSelect>
        </div>
      </CardContent>
    </Container>
  );

  const errorCards = error && (
    <Container>
      <CardHeader title={translate("import_users.error.error")} />
      <CardContent>
        {(Array.isArray(error) ? error : [error]).map(e => (
          <div>{e}</div>
        ))}
      </CardContent>
    </Container>
  );

  const uploadCard = !importResults && (
    <Container>
      <CardHeader title={translate("import_users.cards.upload.header")} />
      <CardContent>
        {translate("import_users.cards.upload.explanation")}
        <a href="./data/example.csv">example.csv</a>
        <br />
        <br />
        <input type="file" onChange={onFileChange} disabled={progress !== null} />
      </CardContent>
    </Container>
  );

  const resultsCard = importResults && (
    <CardContent>
      <CardHeader title={translate("import_users.cards.results.header")} />
      <div>
        {translate("import_users.cards.results.total", importResults.totalRecordCount)}
        <br />
        {translate("import_users.cards.results.successful", importResults.succeededRecords.length)}
        <br />
        {importResults.skippedRecords.length
          ? [
              translate("import_users.cards.results.skipped", importResults.skippedRecords.length),
              <div>
                <button onClick={downloadSkippedRecords}>
                  {translate("import_users.cards.results.download_skipped")}
                </button>
              </div>,
              <br />,
            ]
          : ""}
        {importResults.erroredRecords.length
          ? [translate("import_users.cards.results.skipped", importResults.erroredRecords.length), <br />]
          : ""}
        <br />
        {importResults.wasDryRun && [translate("import_users.cards.results.simulated_only"), <br />]}
      </div>
    </CardContent>
  );

  const startImportCard =
    !values || values.length === 0 || importResults ? undefined : (
      <CardActions>
        <FormControlLabel
          control={<Checkbox checked={dryRun} onChange={onDryRunModeChanged} disabled={progress !== null} />}
          label={translate("import_users.cards.startImport.simulate_only")}
        />
        <Button size="large" onClick={runImport} disabled={progress !== null}>
          {translate("import_users.cards.startImport.run_import")}
        </Button>
        {progress !== null ? (
          <div>
            {progress.done} of {progress.limit} done
          </div>
        ) : null}
      </CardActions>
    );

  const allCards: JSX.Element[] = [];
  if (uploadCard) allCards.push(uploadCard);
  if (errorCards) allCards.push(errorCards);
  if (conflictCards) allCards.push(conflictCards);
  if (statsCards) allCards.push(...statsCards);
  if (startImportCard) allCards.push(startImportCard);
  if (resultsCard) allCards.push(resultsCard);

  const cardContainer = <Card>{allCards}</Card>;

  return [<Title defaultTitle={translate("import_users.title")} />, cardContainer];
};

export const ImportFeature = FilePicker;

```

# src/components/AvatarField.tsx

```tsx
import { get } from "lodash";

import { Avatar } from "@mui/material";
import { useRecordContext } from "react-admin";

const AvatarField = ({ source, ...rest }) => {
  const record = useRecordContext(rest);
  const src = get(record, source)?.toString();
  const { alt, classes, sizes, sx, variant } = rest;
  return <Avatar alt={alt} classes={classes} sizes={sizes} src={src} sx={sx} variant={variant} />;
};

export default AvatarField;

```

# src/components/AvatarField.test.tsx

```tsx
import { render, screen } from "@testing-library/react";
import { RecordContextProvider } from "react-admin";

import AvatarField from "./AvatarField";

describe("AvatarField", () => {
  it("shows image", () => {
    const value = {
      avatar: "foo",
    };
    render(
      <RecordContextProvider value={value}>
        <AvatarField source="avatar" />
      </RecordContextProvider>
    );
    expect(screen.getByRole("img").getAttribute("src")).toBe("foo");
  });
});

```

# public/images/floating-cogs.svg

This is a file of the type: SVG Image

# src/i18n/zh.ts

```ts
import chineseMessages from "@haxqer/ra-language-chinese";

import { SynapseTranslationMessages } from ".";

const zh: SynapseTranslationMessages = {
  ...chineseMessages,
  synapseadmin: {
    auth: {
      base_url: "服务器 URL",
      welcome: "欢迎来到 Synapse-admin",
      server_version: "Synapse 版本",
      username_error: "请输入完整有效的用户 ID: '@user:domain'",
      protocol_error: "URL 需要以'http://'或'https://'作为起始",
      url_error: "不是一个有效的 Matrix 服务器地址",
      sso_sign_in: "使用 SSO 登录",
    },
    users: {
      invalid_user_id: "必须要是一个有效的 Matrix 用户 ID ，例如 @user_id:homeserver",
      tabs: { sso: "SSO" },
    },
    rooms: {
      tabs: {
        basic: "基本",
        members: "成员",
        detail: "细节",
        permission: "权限",
      },
    },
    reports: { tabs: { basic: "基本", detail: "细节" } },
  },
  import_users: {
    error: {
      at_entry: "在条目 %{entry}: %{message}",
      error: "错误",
      required_field: "需要的值 '%{field}' 未被设置。",
      invalid_value: "第 %{row} 行出现无效值。 '%{field}' 只可以是 'true' 或 'false'。",
      unreasonably_big: "拒绝加载过大的文件： %{size} MB",
      already_in_progress: "一个导入进程已经在运行中",
      id_exits: "ID %{id} 已经存在",
    },
    title: "通过 CSV 导入用户",
    goToPdf: "转到 PDF",
    cards: {
      importstats: {
        header: "导入用户",
        users_total: "%{smart_count} 用户在 CSV 文件中 |||| %{smart_count} 用户在 CSV 文件中",
        guest_count: "%{smart_count} 访客 |||| %{smart_count} 访客",
        admin_count: "%{smart_count} 管理员 |||| %{smart_count} 管理员",
      },
      conflicts: {
        header: "冲突处理策略",
        mode: {
          stop: "在冲突处停止",
          skip: "显示错误并跳过冲突",
        },
      },
      ids: {
        header: "IDs",
        all_ids_present: "每条记录的 ID",
        count_ids_present: "%{smart_count} 个含 ID 的记录 |||| %{smart_count} 个含 ID 的记录",
        mode: {
          ignore: "忽略 CSV 中的 ID 并创建新的",
          update: "更新已经存在的记录",
        },
      },
      passwords: {
        header: "密码",
        all_passwords_present: "每条记录的密码",
        count_passwords_present: "%{smart_count} 个含密码的记录 |||| %{smart_count} 个含密码的记录",
        use_passwords: "使用 CSV 中标记的密码",
      },
      upload: {
        header: "导入 CSV 文件",
        explanation:
          "在这里，你可以上传一个用逗号分隔的文件，用于创建或更新用户。该文件必须包括 'id' 和 'displayname' 字段。你可以在这里下载并修改一个示例文件：",
      },
      startImport: {
        simulate_only: "模拟模式",
        run_import: "导入",
      },
      results: {
        header: "导入结果",
        total: "共计 %{smart_count} 条记录 |||| 共计 %{smart_count} 条记录",
        successful: "%{smart_count} 条记录导入成功",
        skipped: "跳过 %{smart_count} 条记录",
        download_skipped: "下载跳过的记录",
        with_error: "%{smart_count} 条记录出现错误 ||| %{smart_count} 条记录出现错误",
        simulated_only: "只是一次模拟运行",
      },
    },
  },
  delete_media: {
    name: "媒体文件",
    fields: {
      before_ts: "最后访问时间",
      size_gt: "大于 (字节)",
      keep_profiles: "保留头像",
    },
    action: {
      send: "删除媒体",
      send_success: "请求发送成功。",
      send_failure: "出现了一个错误。",
    },
    helper: {
      send: "这个API会删除您硬盘上的本地媒体。包含了任何的本地缓存和下载的媒体备份。这个API不会影响上传到外部媒体存储库上的媒体文件。",
    },
  },
  resources: {
    users: {
      name: "用户",
      email: "邮箱",
      msisdn: "电话",
      threepid: "邮箱 / 电话",
      fields: {
        avatar: "邮箱",
        id: "用户 ID",
        name: "用户名",
        is_guest: "访客",
        admin: "服务器管理员",
        deactivated: "被禁用",
        guests: "显示访客",
        show_deactivated: "显示被禁用的账户",
        user_id: "搜索用户",
        displayname: "显示名字",
        password: "密码",
        avatar_url: "头像 URL",
        avatar_src: "头像",
        medium: "Medium",
        threepids: "3PIDs",
        address: "地址",
        creation_ts_ms: "创建时间戳",
        consent_version: "协议版本",
      },
      helper: {
        deactivate: "您必须提供一串密码来激活账户。",
        erase: "将用户标记为根据 GDPR 的要求抹除了",
      },
      action: {
        erase: "抹除用户信息",
      },
    },
    rooms: {
      name: "房间",
      fields: {
        room_id: "房间 ID",
        name: "房间名",
        canonical_alias: "别名",
        joined_members: "成员",
        joined_local_members: "本地成员",
        state_events: "状态事件",
        version: "版本",
        is_encrypted: "已经加密",
        encryption: "加密",
        federatable: "可联合的",
        public: "公开",
        creator: "创建者",
        join_rules: "加入规则",
        guest_access: "访客访问",
        history_visibility: "历史可见性",
      },
      enums: {
        join_rules: {
          public: "公开",
          knock: "申请",
          invite: "邀请",
          private: "私有",
        },
        guest_access: {
          can_join: "访客可以加入",
          forbidden: "访客不可加入",
        },
        history_visibility: {
          invited: "自从被邀请",
          joined: "自从加入",
          shared: "自从分享",
          world_readable: "任何人",
        },
        unencrypted: "未加密",
      },
    },
    reports: {
      name: "报告事件",
      fields: {
        id: "ID",
        received_ts: "报告时间",
        user_id: "报告者",
        name: "房间名",
        score: "分数",
        reason: "原因",
        event_id: "事件 ID",
        event_json: {
          origin: "原始服务器",
          origin_server_ts: "发送时间",
          type: "事件类型",
          content: {
            msgtype: "内容类型",
            body: "内容",
            format: "格式",
            formatted_body: "格式化的数据",
            algorithm: "算法",
          },
        },
      },
    },
    connections: {
      name: "连接",
      fields: {
        last_seen: "日期",
        ip: "IP 地址",
        user_agent: "用户代理 (UA)",
      },
    },
    devices: {
      name: "设备",
      fields: {
        device_id: "设备 ID",
        display_name: "设备名",
        last_seen_ts: "时间戳",
        last_seen_ip: "IP 地址",
      },
      action: {
        erase: {
          title: "移除 %{id}",
          content: '您确定要移除设备 "%{name}"?',
          success: "设备移除成功。",
          failure: "出现了一个错误。",
        },
      },
    },
    users_media: {
      name: "媒体文件",
      fields: {
        media_id: "媒体文件 ID",
        media_length: "长度",
        media_type: "类型",
        upload_name: "文件名",
        quarantined_by: "被隔离",
        safe_from_quarantine: "取消隔离",
        created_ts: "创建",
        last_access_ts: "上一次访问",
      },
    },
    pushers: {
      name: "发布者",
      fields: {
        app: "App",
        app_display_name: "App 名称",
        app_id: "App ID",
        device_display_name: "设备显示名",
        kind: "类型",
        lang: "语言",
        profile_tag: "数据标签",
        pushkey: "Pushkey",
        data: { url: "URL" },
      },
    },
    servernotices: {
      name: "服务器提示",
      send: "发送服务器提示",
      fields: {
        body: "信息",
      },
      action: {
        send: "发送提示",
        send_success: "服务器提示发送成功。",
        send_failure: "出现了一个错误。",
      },
      helper: {
        send: '向选中的用户发送服务器提示。服务器配置中的 "服务器提示(Server Notices)" 选项需要被设置为启用。',
      },
    },
    user_media_statistics: {
      name: "用户的媒体文件",
      fields: {
        media_count: "媒体文件统计",
        media_length: "媒体文件长度",
      },
    },
  },
};
export default zh;

```

# src/i18n/ru.ts

```ts
import russianMessages from "ra-language-russian";

import { SynapseTranslationMessages } from ".";

const ru: SynapseTranslationMessages = {
  ...russianMessages,
  synapseadmin: {
    auth: {
      base_url: "Адрес домашнего сервера",
      welcome: "Добро пожаловать в Synapse-admin",
      server_version: "Версия Synapse",
      supports_specs: "поддерживает спецификации Matrix",
      username_error: "Пожалуйста, укажите полный ID пользователя: '@user:domain'",
      protocol_error: "Адрес должен начинаться с 'http://' или 'https://'",
      url_error: "Неверный адрес сервера Matrix",
      sso_sign_in: "Вход через SSO",
    },
    users: {
      invalid_user_id: "Локальная часть ID пользователя Matrix без адреса домашнего сервера.",
      tabs: { sso: "SSO" },
    },
    rooms: {
      details: "Данные комнаты",
      tabs: {
        basic: "Основные",
        members: "Участники",
        detail: "Подробности",
        permission: "Права доступа",
      },
    },
    reports: { tabs: { basic: "Основные", detail: "Подробности" } },
  },
  import_users: {
    error: {
      at_entry: "В записи %{entry}: %{message}",
      error: "Ошибка",
      required_field: "Отсутствует обязательное поле '%{field}'",
      invalid_value: "Неверное значение в строке %{row}. Поле '%{field}' может быть либо 'true', либо 'false'",
      unreasonably_big: "Отказано в загрузке слишком большого файла размером %{size} мегабайт",
      already_in_progress: "Импорт уже в процессе",
      id_exits: "ID %{id} уже существует",
    },
    title: "Импорт пользователей из CSV",
    goToPdf: "Перейти к PDF",
    cards: {
      importstats: {
        header: "Импорт пользователей",
        users_total:
          "%{smart_count} пользователь в CSV файле |||| %{smart_count} пользователя в CSV файле |||| %{smart_count} пользователей в CSV файле",
        guest_count: "%{smart_count} гость |||| %{smart_count} гостя |||| %{smart_count} гостей",
        admin_count:
          "%{smart_count} администратор |||| %{smart_count} администратора |||| %{smart_count} администраторов",
      },
      conflicts: {
        header: "Стратегия разрешения конфликтов",
        mode: {
          stop: "Остановка при конфликте",
          skip: "Показать ошибку и пропустить при конфликте",
        },
      },
      ids: {
        header: "Идентификаторы",
        all_ids_present: "Идентификаторы присутствуют в каждой записи",
        count_ids_present:
          "%{smart_count} запись с ID |||| %{smart_count} записи с ID |||| %{smart_count} записей с ID",
        mode: {
          ignore: "Игнорировать идентификаторы в CSV и создать новые",
          update: "Обновить существующие записи",
        },
      },
      passwords: {
        header: "Пароли",
        all_passwords_present: "Пароли присутствуют в каждой записи",
        count_passwords_present:
          "%{smart_count} запись с паролем |||| %{smart_count} записи с паролями |||| %{smart_count} записей с паролями",
        use_passwords: "Использовать пароли из CSV",
      },
      upload: {
        header: "Загрузить CSV файл",
        explanation:
          "Здесь вы можете загрузить файл со значениями, разделёнными запятыми, которые будут использованы для создания или обновления данных пользователей. \
          В файле должны быть поля 'id' и 'displayname'. Вы можете скачать и изменить файл-образец отсюда: ",
      },
      startImport: {
        simulate_only: "Только симулировать",
        run_import: "Импорт",
      },
      results: {
        header: "Результаты импорта",
        total: "%{smart_count} запись всего |||| %{smart_count} записи всего |||| %{smart_count} записей всего",
        successful:
          "%{smart_count} запись успешно импортирована |||| %{smart_count} записи успешно импортированы |||| %{smart_count} записей успешно импортированы",
        skipped:
          "%{smart_count} запись пропущена |||| %{smart_count} записи пропущены |||| %{smart_count} записей пропущено",
        download_skipped: "Скачать пропущенные записи",
        with_error:
          "%{smart_count} запись с ошибкой |||| %{smart_count} записи с ошибками |||| %{smart_count} записей с ошибками",
        simulated_only: "Импорт был симулирован",
      },
    },
  },
  delete_media: {
    name: "Файлы",
    fields: {
      before_ts: "Последнее обращение до",
      size_gt: "Более чем (в байтах)",
      keep_profiles: "Сохранить аватары",
    },
    action: {
      send: "Удалить файлы",
      send_success: "Запрос успешно отправлен.",
      send_failure: "Произошла ошибка.",
    },
    helper: {
      send: "Это API удаляет локальные файлы с вашего собственного сервера, включая локальные миниатюры и копии скачанных файлов. \
      Данный API не затрагивает файлы, загруженные во внешние хранилища.",
    },
  },
  resources: {
    users: {
      name: "Пользователь |||| Пользователи",
      email: "Почта",
      msisdn: "Телефон",
      threepid: "Почта / Телефон",
      fields: {
        avatar: "Аватар",
        id: "ID пользователя",
        name: "Имя",
        is_guest: "Гость",
        admin: "Администратор сервера",
        locked: "Заблокирован",
        deactivated: "Деактивирован",
        erased: "Удалён",
        guests: "Показывать гостей",
        show_deactivated: "Показывать деактивированных",
        user_id: "Поиск пользователя",
        displayname: "Отображаемое имя",
        password: "Пароль",
        avatar_url: "Адрес аватары",
        avatar_src: "Аватар",
        medium: "Тип",
        threepids: "3PID'ы",
        address: "Адрес",
        creation_ts_ms: "Дата создания",
        consent_version: "Версия соглашения",
        auth_provider: "Провайдер",
        user_type: "Тип пользователя",
      },
      helper: {
        password: "Смена пароля завершит все сессии пользователя.",
        deactivate: "Вы должны предоставить пароль для реактивации учётной записи.",
        erase: "Пометить пользователя как удалённого в соответствии с GDPR",
      },
      action: {
        erase: "Удалить данные пользователя",
      },
    },
    rooms: {
      name: "Комната |||| Комнаты",
      fields: {
        room_id: "ID комнаты",
        name: "Название",
        canonical_alias: "Псевдоним",
        joined_members: "Участники",
        joined_local_members: "Локальные участники",
        joined_local_devices: "Локальные устройства",
        state_events: "События состояния / Сложность",
        version: "Версия",
        is_encrypted: "Зашифровано",
        encryption: "Шифрование",
        federatable: "Федерация",
        public: "Отображается в каталоге комнат",
        creator: "Создатель",
        join_rules: "Правила входа",
        guest_access: "Гостевой доступ",
        history_visibility: "Видимость истории",
        topic: "Тема",
        avatar: "Аватар",
      },
      helper: {
        forward_extremities:
          "Оконечности — это события-листья в конце ориентированного ациклического графа (DAG) в комнате, т.е. события без дочерних элементов. \
          Чем больше их в комнате, тем больше Synapse работает над разрешением состояния (это дорогостоящая операция). \
          Хотя Synapse старается не допускать существования слишком большого числа таких событий в комнате, из-за ошибок они иногда снова появляются. \
          Если в комнате >10 оконечностей, стоит найти комнату-виновника и попробовать удалить их с помощью SQL-запросов из #1760.",
      },
      enums: {
        join_rules: {
          public: "Для всех",
          knock: "Надо постучать",
          invite: "По приглашению",
          private: "Приватная",
        },
        guest_access: {
          can_join: "Гости могут войти",
          forbidden: "Гости не могут войти",
        },
        history_visibility: {
          invited: "С момента приглашения",
          joined: "С момента входа",
          shared: "С момента открытия доступа",
          world_readable: "Для всех",
        },
        unencrypted: "Без шифрования",
      },
      action: {
        erase: {
          title: "Удалить комнату",
          content:
            "Действительно удалить эту комнату? Это действие будет невозможно отменить. Все сообщения и файлы в комнате будут удалены с сервера!",
        },
      },
    },
    reports: {
      name: "Жалоба |||| Жалобы",
      fields: {
        id: "ID",
        received_ts: "Дата и время жалобы",
        user_id: "Автор жалобы",
        name: "Название комнаты",
        score: "Баллы",
        reason: "Причина",
        event_id: "ID события",
        event_json: {
          origin: "Исходнный сервер",
          origin_server_ts: "Дата и время отправки",
          type: "Тип события",
          content: {
            msgtype: "Тип содержимого",
            body: "Содержимое",
            format: "Формат",
            formatted_body: "Форматированное содержимое",
            algorithm: "Алгоритм",
            url: "Ссылка",
            info: {
              mimetype: "Тип",
            },
          },
        },
      },
      action: {
        erase: {
          title: "Удалить жалобу",
          content: "Действительно удалить жалобу? Это действие будет невозможно отменить.",
        },
      },
    },
    connections: {
      name: "Подключения",
      fields: {
        last_seen: "Дата",
        ip: "IP адрес",
        user_agent: "Юзер-агент",
      },
    },
    devices: {
      name: "Устройство |||| Устройства",
      fields: {
        device_id: "ID устройства",
        display_name: "Название",
        last_seen_ts: "Дата и время",
        last_seen_ip: "IP адрес",
      },
      action: {
        erase: {
          title: "Удаление %{id}",
          content: 'Действительно удалить устройство "%{name}"?',
          success: "Устройство успешно удалено.",
          failure: "Произошла ошибка.",
        },
      },
    },
    users_media: {
      name: "Файлы",
      fields: {
        media_id: "ID файла",
        media_length: "Размер файла (в байтах)",
        media_type: "Тип",
        upload_name: "Имя файла",
        quarantined_by: "На карантине",
        safe_from_quarantine: "Защитить от карантина",
        created_ts: "Создано",
        last_access_ts: "Последний доступ",
      },
      action: {
        open: "Открыть файл в новом окне",
      },
    },
    protect_media: {
      action: {
        create: "Не защищён, установить защиту",
        delete: "Защищён, снять защиту",
        none: "На карантине",
        send_success: "Статус защиты успешно изменён.",
        send_failure: "Произошла ошибка.",
      },
    },
    quarantine_media: {
      action: {
        name: "Карантин",
        create: "Поместить на карантин",
        delete: "На карантине, снять карантин",
        none: "Защищено от карантина",
        send_success: "Статус карантина успешно изменён.",
        send_failure: "Произошла ошибка.",
      },
    },
    pushers: {
      name: "Пушер |||| Пушеры",
      fields: {
        app: "Приложение",
        app_display_name: "Название приложения",
        app_id: "ID приложения",
        device_display_name: "Название устройства",
        kind: "Вид",
        lang: "Язык",
        profile_tag: "Тег профиля",
        pushkey: "Ключ",
        data: { url: "URL" },
      },
    },
    servernotices: {
      name: "Серверные уведомления",
      send: "Отправить серверные уведомления",
      fields: {
        body: "Сообщение",
      },
      action: {
        send: "Отправить",
        send_success: "Серверное уведомление успешно отправлено.",
        send_failure: "Произошла ошибка.",
      },
      helper: {
        send: 'Отправить серверное уведомление выбранным пользователям. На сервере должна быть активна функция "Server Notices".',
      },
    },
    user_media_statistics: {
      name: "Файлы пользователей",
      fields: {
        media_count: "Количество файлов",
        media_length: "Размер файлов",
      },
    },
    forward_extremities: {
      name: "Оконечности",
      fields: {
        id: "ID события",
        received_ts: "Дата и время",
        depth: "Глубина",
        state_group: "Группа состояния",
      },
    },
    room_state: {
      name: "События состояния",
      fields: {
        type: "Тип",
        content: "Содержимое",
        origin_server_ts: "Дата отправки",
        sender: "Отправитель",
      },
    },
    room_directory: {
      name: "Каталог комнат",
      fields: {
        world_readable: "Гости могут просматривать без входа",
        guest_can_join: "Гости могут войти",
      },
      action: {
        title:
          "Удалить комнату из каталога |||| Удалить %{smart_count} комнаты из каталога |||| Удалить %{smart_count} комнат из каталога",
        content:
          "Действительно удалить комнату из каталога? |||| Действительно удалить %{smart_count} комнаты из каталога? |||| Действительно удалить %{smart_count} комнат из каталога?",
        erase: "Удалить из каталога комнат",
        create: "Опубликовать в каталоге комнат",
        send_success: "Комната успешно опубликована.",
        send_failure: "Произошла ошибка.",
      },
    },
    destinations: {
      name: "Федерация",
      fields: {
        destination: "Назначение",
        failure_ts: "Дата и время ошибки",
        retry_last_ts: "Дата и время последней попытки",
        retry_interval: "Интервал между попытками",
        last_successful_stream_ordering: "Последний успешный поток",
        stream_ordering: "Поток",
      },
      action: { reconnect: "Переподключиться" },
    },
    registration_tokens: {
      name: "Токены регистрации",
      fields: {
        token: "Токен",
        valid: "Рабочий токен",
        uses_allowed: "Количество использований",
        pending: "Ожидает",
        completed: "Завершено",
        expiry_time: "Дата окончания",
        length: "Длина",
      },
      helper: { length: "Длина токена, если токен не задан." },
    },
  },
};
export default ru;

```

# src/i18n/it.ts

```ts
import italianMessages from "ra-language-italian";

import { SynapseTranslationMessages } from ".";

const it: SynapseTranslationMessages = {
  ...italianMessages,
  synapseadmin: {
    auth: {
      base_url: "URL dell'homeserver",
      welcome: "Benvenuto in Synapse-admin",
      server_version: "Versione di Synapse",
      username_error: "Per favore inserisci un ID utente completo: '@utente:dominio'",
      protocol_error: "L'URL deve iniziare per 'http://' o 'https://'",
      url_error: "URL del server Matrix non valido",
      sso_sign_in: "Accedi con SSO",
    },
    users: {
      invalid_user_id: "ID utente non valido su questo homeserver.",
      tabs: { sso: "SSO" },
    },
    rooms: {
      tabs: {
        basic: "Semplice",
        members: "Membro",
        detail: "Dettagli",
        permission: "Permessi",
      },
    },
    reports: { tabs: { basic: "Semplice", detail: "Dettagli" } },
  },
  import_users: {
    error: {
      at_entry: "Alla voce %{entry}: %{message}",
      error: "Errore",
      required_field: "Il campo '%{field}' non è presente",
      invalid_value: "Valore non valido alla riga %{row}. '%{field}' Il campo può essere solo 'true' o 'false'",
      unreasonably_big: "Impossibile caricare un file così grosso (%{size} megabyte)",
      already_in_progress: "Un import è attualmente già in caricamento",
      id_exits: "L'ID %{id} è già presente",
    },
    title: "Importa utenti tramite file CSV",
    goToPdf: "Vai al PDF",
    cards: {
      importstats: {
        header: "Importa utenti",
        users_total: "%{smart_count} utente nel file CSV |||| %{smart_count} utenti nel file CSV",
        guest_count: "%{smart_count} ospite |||| %{smart_count} ospiti",
        admin_count: "%{smart_count} amministratore |||| %{smart_count} amministratori",
      },
      conflicts: {
        header: "Strategia di conflitto",
        mode: {
          stop: "Stoppa al conflitto",
          skip: "Mostra l'errore e ignora il conflitto",
        },
      },
      ids: {
        header: "ID",
        all_ids_present: "ID presenti in ogni voce",
        count_ids_present: "%{smart_count} voce con ID |||| %{smart_count} voci con ID",
        mode: {
          ignore: "Ignora gli ID nel file CSV e creane di nuovi",
          update: "Aggiorna le voci esistenti",
        },
      },
      passwords: {
        header: "Passwords",
        all_passwords_present: "Password presenti in ogni voce",
        count_passwords_present: "%{smart_count} voce con password |||| %{smart_count} voci con password",
        use_passwords: "Usa le password dal file CSV",
      },
      upload: {
        header: "Input file CSV",
        explanation:
          "Qui puoi caricare un file con valori separati da virgole che verrà poi utilizzato per creare o aggiornare gli utenti. Il file deve includere i campi 'id' and 'displayname'. Puoi scaricare un file di esempio per adattarlo: ",
      },
      startImport: {
        simulate_only: "Solo simulazione",
        run_import: "Importa",
      },
      results: {
        header: "Importa i risultati",
        total: "%{smart_count} voce in totale |||| %{smart_count} voci in totale",
        successful: "%{smart_count} voci importate con successo",
        skipped: "%{smart_count} voci ignorate",
        download_skipped: "Scarica le voci ignorate",
        with_error: "%{smart_count} voce con errori ||| %{smart_count} voci con errori",
        simulated_only: "Il processo era stato solamente simulato",
      },
    },
  },
  delete_media: {
    name: "Media",
    fields: {
      before_ts: "ultimo accesso effettuato prima",
      size_gt: "Più grande di (in byte)",
      keep_profiles: "Mantieni le immagini del profilo",
    },
    action: {
      send: "Cancella media",
      send_success: "Richiesta inviata con successo.",
      send_failure: "C'è stato un errore.",
    },
    helper: {
      send: "Questa API cancella i media locali dal disco del tuo server. Questo include anche ogni miniatura e copia del media scaricato. Questa API non inciderà sui media che sono stati caricati nei repository esterni.",
    },
  },
  resources: {
    users: {
      name: "Utente |||| Utenti",
      email: "Email",
      msisdn: "Telefono",
      threepid: "Email / Telefono",
      fields: {
        avatar: "Avatar",
        id: "ID utente",
        name: "Nome",
        is_guest: "Ospite",
        admin: "Amministratore",
        locked: "Bloccato",
        deactivated: "Disattivato",
        guests: "Mostra gli ospiti",
        show_deactivated: "Mostra gli utenti disattivati",
        user_id: "Cerca utente",
        displayname: "Nickname",
        password: "Password",
        avatar_url: "URL dell'avatar",
        avatar_src: "Avatar",
        medium: "Medium",
        threepids: "3PID",
        address: "Indirizzo",
        creation_ts_ms: "Creazione del timestamp",
        consent_version: "Versione minima richiesta",
        auth_provider: "Provider",
        user_type: "Tipo d'utente",
      },
      helper: {
        password: "Cambiando la password l'utente verrà disconnesso da tutte le sessioni attive.",
        deactivate: "Devi fornire una password per riattivare l'account.",
        erase: "Constrassegna l'utente come cancellato dal GDPR",
      },
      action: {
        erase: "Cancella i dati dell'utente",
      },
    },
    rooms: {
      name: "Stanza |||| Stanze",
      fields: {
        room_id: "ID della stanza",
        name: "Nome",
        canonical_alias: "Alias",
        joined_members: "Membri",
        joined_local_members: "Membri locali",
        joined_local_devices: "Dispositivi locali",
        state_events: "Eventi di stato / Complessità",
        version: "Versione",
        is_encrypted: "Criptato",
        encryption: "Crittografia",
        federatable: "Federabile",
        public: "Visibile nella cartella della stanza",
        creator: "Creatore",
        join_rules: "Regole per entrare",
        guest_access: "Entra come ospite",
        history_visibility: "Visibilità temporale",
        topic: "Topic",
        avatar: "Avatar",
      },
      helper: {
        /*        forward_extremities:
          "Forward extremities are the leaf events at the end of a Directed acyclic graph (DAG) in a room, aka events that have no children. The more exist in a room, the more state resolution that Synapse needs to perform (hint: it's an expensive operation). While Synapse has code to prevent too many of these existing at one time in a room, bugs can sometimes make them crop up again. If a room has >10 forward extremities, it's worth checking which room is the culprit and potentially removing them using the SQL queries mentioned in #1760.", */
      },
      enums: {
        join_rules: {
          public: "Pubblica",
          knock: "Bussa",
          invite: "Invita",
          private: "Privata",
        },
        guest_access: {
          can_join: "Gli utenti ospiti possono entrare",
          forbidden: "Gli utenti ospiti non possono entrare",
        },
        history_visibility: {
          invited: "Dall'invito",
          joined: "Dall'entrata",
          shared: "Dalla condivisione",
          world_readable: "Chiunque",
        },
        unencrypted: "Non criptata",
      },
      action: {
        erase: {
          title: "Cancella stanza",
          content:
            "Sei sicuro di voler eliminare questa stanza? Questa azione è definitiva. Tutti i messaggi e i media condivisi in questa stanza verranno eliminati dal server!",
        },
      },
    },
    reports: {
      name: "Evento segnalato |||| Eventi segnalati",
      fields: {
        id: "ID",
        received_ts: "Orario del report",
        user_id: "richiedente",
        name: "nome della stanza",
        score: "punteggio",
        reason: "ragione",
        event_id: "ID dell'evento",
        event_json: {
          origin: "server di origine",
          origin_server_ts: "ora dell'invio",
          type: "tipo di evento",
          content: {
            msgtype: "tipo di contenuto",
            body: "contenuto",
            format: "formato",
            formatted_body: "contenuto formattato",
            algorithm: "algoritmo",
          },
        },
      },
    },
    connections: {
      name: "Connessioni",
      fields: {
        last_seen: "Data",
        ip: "Indirizzo IP",
        user_agent: "agente utente",
      },
    },
    devices: {
      name: "Dispositivo |||| Dispositivi",
      fields: {
        device_id: "ID del dispositivo",
        display_name: "Nome del dispositivo",
        last_seen_ts: "Timestamp",
        last_seen_ip: "Indirizzo IP",
      },
      action: {
        erase: {
          title: "Rimozione del dispositivo %{id}",
          content: 'Sei sicuro di voler rimuovere il dispositivo "%{name}"?',
          success: "Dispositivo rimosso con successo.",
          failure: "C'è stato un errore.",
        },
      },
    },
    users_media: {
      name: "Media",
      fields: {
        media_id: "ID del media",
        media_length: "Peso del file (in Byte)",
        media_type: "Tipo",
        upload_name: "Nome del file",
        quarantined_by: "In quarantena da",
        safe_from_quarantine: "Protetto dalla quarantena",
        created_ts: "Creato",
        last_access_ts: "Ultimo accesso",
      },
    },
    protect_media: {
      action: {
        create: "Non protetto, proteggi",
        delete: "Protetto, rimuovi protezione",
        none: "In quarantena",
        send_success: "Stato della protezione cambiato con successo.",
        send_failure: "C'è stato un errore.",
      },
    },
    quarantine_media: {
      action: {
        name: "Quarantina",
        create: "Aggiungi alla quarantena",
        delete: "In quarantena, rimuovi dalla quarantena",
        none: "Protetto dalla quarantena",
        send_success: "Stato della quarantena cambiato con successo.",
        send_failure: "C'è stato un errore.",
      },
    },
    pushers: {
      name: "Pusher |||| Pusher",
      fields: {
        app: "App",
        app_display_name: "Nome dell'app",
        app_id: "ID dell'app",
        device_display_name: "Nome del dispositivo",
        kind: "Tipo",
        lang: "Lingua",
        profile_tag: "Tag del profilo",
        pushkey: "Pushkey",
        data: { url: "URL" },
      },
    },
    servernotices: {
      name: "Avvisi del server",
      send: "Invia avvisi",
      fields: {
        body: "Messaggio",
      },
      action: {
        send: "Invia nota",
        send_success: "Avviso inviato con successo.",
        send_failure: "C'è stato un errore.",
      },
      helper: {
        send: 'Invia un avviso dal server agli utenti selezionati. La feature "Avvisi del server" è stata attivata sul server.',
      },
    },
    user_media_statistics: {
      name: "Media degli utenti",
      fields: {
        media_count: "Numero media",
        media_length: "Lunghezza media",
      },
    },
    forward_extremities: {
      name: "Invia estremità",
      fields: {
        id: "Event ID",
        received_ts: "Timestamp",
        depth: "Profondità",
        state_group: "State group",
      },
    },
    room_state: {
      name: "Eventi di stato",
      fields: {
        type: "Tipo",
        content: "Contenuto",
        origin_server_ts: "Ora dell'invio",
        sender: "Mittente",
      },
    },
    room_directory: {
      name: "Elenco delle stanze",
      fields: {
        world_readable: "gli utenti ospite possono vedere senza entrare",
        guest_can_join: "gli utenti ospite possono entrare",
      },
      action: {
        title: "Cancella stanza dall'elenco |||| Cancella %{smart_count} stanze dall'elenco",
        content:
          "Sei sicuro di voler rimuovere questa stanza dall'elenco? |||| Sei sicuro di voler rimuovere %{smart_count} stanze dall'elenco?",
        erase: "Rimuovi dall'elenco",
        create: "Crea",
        send_success: "Stanza creata con successo.",
        send_failure: "C'è stato un errore.",
      },
    },
    destinations: {
      name: "Federazione",
      fields: {
        destination: "Destinazione",
        failure_ts: "Timestamp dell'errore",
        retry_last_ts: "Tentativo ultimo timestamp",
        retry_interval: "Intervallo dei tentativi",
        last_successful_stream_ordering: "Ultimo flusso riuscito con successo",
        stream_ordering: "Flusso",
      },
      action: { reconnect: "Riconnetti" },
    },
    registration_tokens: {
      name: "Token di registrazione",
      fields: {
        token: "Token",
        valid: "Token valido",
        uses_allowed: "Usi permessi",
        pending: "In attesa",
        completed: "Completato",
        expiry_time: "Data della scadenza",
        length: "Lunghezza",
      },
      helper: { length: "Lunghezza del token se non viene dato alcun token." },
    },
  },
};
export default it;

```

# src/i18n/index.d.ts

```ts
import { TranslationMessages } from "ra-core";

interface SynapseTranslationMessages extends TranslationMessages {
  synapseadmin: {
    auth: {
      base_url: string;
      welcome: string;
      server_version: string;
      supports_specs?: string; // TODO: fa, fr, it, zh
      username_error: string;
      protocol_error: string;
      url_error: string;
      sso_sign_in: string;
    };
    users: {
      invalid_user_id: string;
      tabs: { sso: string };
    };
    rooms: {
      details?: string; // TODO: fa, fr, it, zh
      tabs: {
        basic: string;
        members: string;
        detail: string;
        permission: string;
      };
    };
    reports: { tabs: { basic: string; detail: string } };
  };
  import_users: {
    error: {
      at_entry: string;
      error: string;
      required_field: string;
      invalid_value: string;
      unreasonably_big: string;
      already_in_progress: string;
      id_exits: string;
    };
    title: string;
    goToPdf: string;
    cards: {
      importstats: {
        header: string;
        users_total: string;
        guest_count: string;
        admin_count: string;
      };
      conflicts: {
        header: string;
        mode: {
          stop: string;
          skip: string;
        };
      };
      ids: {
        header: string;
        all_ids_present: string;
        count_ids_present: string;
        mode: {
          ignore: string;
          update: string;
        };
      };
      passwords: {
        header: string;
        all_passwords_present: string;
        count_passwords_present: string;
        use_passwords: string;
      };
      upload: {
        header: string;
        explanation: string;
      };
      startImport: {
        simulate_only: string;
        run_import: string;
      };
      results: {
        header: string;
        total: string;
        successful: string;
        skipped: string;
        download_skipped: string;
        with_error: string;
        simulated_only: string;
      };
    };
  };
  delete_media: {
    name: string;
    fields: {
      before_ts: string;
      size_gt: string;
      keep_profiles: string;
    };
    action: {
      send: string;
      send_success: string;
      send_failure: string;
    };
    helper: {
      send: string;
    };
  };
  resources: {
    users: {
      name: string;
      email: string;
      msisdn: string;
      threepid: string;
      fields: {
        avatar: string;
        id: string;
        name: string;
        is_guest: string;
        admin: string;
        locked?: string; // TODO: fa, zh
        deactivated: string;
        erased?: string; // TODO: fa, fr, it, zh
        guests: string;
        show_deactivated: string;
        user_id: string;
        displayname: string;
        password: string;
        avatar_url: string;
        avatar_src: string;
        medium: string;
        threepids: string;
        address: string;
        creation_ts_ms: string;
        consent_version: string;
        auth_provider?: string;
        user_type?: string;
      };
      helper: {
        password?: string;
        deactivate: string;
        erase: string;
      };
      action: {
        erase: string;
      };
    };
    rooms: {
      name: string;
      fields: {
        room_id: string;
        name: string;
        canonical_alias: string;
        joined_members: string;
        joined_local_members: string;
        joined_local_devices?: string;
        state_events: string;
        version: string;
        is_encrypted: string;
        encryption: string;
        federatable: string;
        public: string;
        creator: string;
        join_rules: string;
        guest_access: string;
        history_visibility: string;
        topic?: string;
        avatar?: string;
      };
      helper?: {
        forward_extremities: string;
      };
      enums: {
        join_rules: {
          public: string;
          knock: string;
          invite: string;
          private: string;
        };
        guest_access: {
          can_join: string;
          forbidden: string;
        };
        history_visibility: {
          invited: string;
          joined: string;
          shared: string;
          world_readable: string;
        };
        unencrypted: string;
      };
      action?: {
        erase: {
          title: string;
          content: string;
        };
      };
    };
    reports: {
      name: string;
      fields: {
        id: string;
        received_ts: string;
        user_id: string;
        name: string;
        score: string;
        reason: string;
        event_id: string;
        event_json: {
          origin: string;
          origin_server_ts: string;
          type: string;
          content: {
            msgtype: string;
            body: string;
            format: string;
            formatted_body: string;
            algorithm: string;
            url?: string;
            info?: {
              mimetype: string;
            };
          };
        };
      };
      action?: {
        erase: {
          title: string;
          content: string;
        };
      };
    };
    connections: {
      name: string;
      fields: {
        last_seen: string;
        ip: string;
        user_agent: string;
      };
    };
    devices: {
      name: string;
      fields: {
        device_id: string;
        display_name: string;
        last_seen_ts: string;
        last_seen_ip: string;
      };
      action: {
        erase: {
          title: string;
          content: string;
          success: string;
          failure: string;
        };
      };
    };
    users_media: {
      name: string;
      fields: {
        media_id: string;
        media_length: string;
        media_type: string;
        upload_name: string;
        quarantined_by: string;
        safe_from_quarantine: string;
        created_ts: string;
        last_access_ts: string;
      };
      action?: {
        open: string;
      };
    };
    protect_media?: {
      action: {
        create: string;
        delete: string;
        none: string;
        send_success: string;
        send_failure: string;
      };
    };
    quarantine_media?: {
      action: {
        name: string;
        create: string;
        delete: string;
        none: string;
        send_success: string;
        send_failure: string;
      };
    };
    pushers: {
      name: string;
      fields: {
        app: string;
        app_display_name: string;
        app_id: string;
        device_display_name: string;
        kind: string;
        lang: string;
        profile_tag: string;
        pushkey: string;
        data: {
          url: string;
        };
      };
    };
    servernotices: {
      name: string;
      send: string;
      fields: {
        body: string;
      };
      action: {
        send: string;
        send_success: string;
        send_failure: string;
      };
      helper: {
        send: string;
      };
    };
    user_media_statistics: {
      name: string;
      fields: {
        media_count: string;
        media_length: string;
      };
    };
    forward_extremities?: {
      name: string;
      fields: {
        id: string;
        received_ts: string;
        depth: string;
        state_group: string;
      };
    };
    room_state?: {
      name: string;
      fields: {
        type: string;
        content: string;
        origin_server_ts: string;
        sender: string;
      };
    };
    room_directory?: {
      name: string;
      fields: {
        world_readable: string;
        guest_can_join: string;
      };
      action: {
        title: string;
        content: string;
        erase: string;
        create: string;
        send_success: string;
        send_failure: string;
      };
    };
    destinations?: {
      name: string;
      fields: {
        destination: string;
        failure_ts: string;
        retry_last_ts: string;
        retry_interval: string;
        last_successful_stream_ordering: string;
        stream_ordering: string;
      };
      action: {
        reconnect: string;
      };
    };
    registration_tokens?: {
      name: string;
      fields: {
        token: string;
        valid: string;
        uses_allowed: string;
        pending: string;
        completed: string;
        expiry_time: string;
        length: string;
      };
      helper: {
        length: string;
      };
    };
  };
}

```

# src/i18n/fr.ts

```ts
import frenchMessages from "ra-language-french";

import { SynapseTranslationMessages } from ".";

const fr: SynapseTranslationMessages = {
  ...frenchMessages,
  synapseadmin: {
    auth: {
      base_url: "URL du serveur d’accueil",
      welcome: "Bienvenue sur Synapse-admin",
      server_version: "Version du serveur Synapse",
      username_error: "Veuillez entrer un nom d'utilisateur complet : « @utilisateur:domaine »",
      protocol_error: "L'URL doit commencer par « http:// » ou « https:// »",
      url_error: "L'URL du serveur Matrix n'est pas valide",
      sso_sign_in: "Se connecter avec l’authentification unique",
    },
    users: {
      invalid_user_id: "Partie locale d'un identifiant utilisateur Matrix sans le nom du serveur d’accueil.",
      tabs: { sso: "Authentification unique" },
    },
    rooms: {
      tabs: {
        basic: "Informations de base",
        members: "Membres",
        detail: "Détails",
        permission: "Permissions",
      },
    },
    reports: { tabs: { basic: "Informations de base", detail: "Détails" } },
  },
  import_users: {
    error: {
      at_entry: "Pour l'entrée %{entry} : %{message}",
      error: "Erreur",
      required_field: "Le champ requis « %{field} » est manquant",
      invalid_value:
        "Valeur non valide à la ligne %{row}. Le champ « %{field} » ne peut être que « true » ou « false »",
      unreasonably_big: "Refus de charger un fichier trop volumineux de %{size} mégaoctets",
      already_in_progress: "Un import est déjà en cours",
      id_exits: "L'identifiant %{id} déjà présent",
    },
    title: "Importer des utilisateurs à partir d'un fichier CSV",
    goToPdf: "Voir le PDF",
    cards: {
      importstats: {
        header: "Importer des utilisateurs",
        users_total:
          "%{smart_count} utilisateur dans le fichier CSV |||| %{smart_count} utilisateurs dans le fichier CSV",
        guest_count: "%{smart_count} visiteur |||| %{smart_count} visiteurs",
        admin_count: "%{smart_count} administrateur |||| %{smart_count} administrateurs",
      },
      conflicts: {
        header: "Stratégie de résolution des conflits",
        mode: {
          stop: "S'arrêter en cas de conflit",
          skip: "Afficher l'erreur et ignorer le conflit",
        },
      },
      ids: {
        header: "Identifiants",
        all_ids_present: "Identifiants présents pour chaque entrée",
        count_ids_present: "%{smart_count} entrée avec identifiant |||| %{smart_count} entrées avec identifiant",
        mode: {
          ignore: "Ignorer les identifiants dans le ficher CSV et en créer de nouveaux",
          update: "Mettre à jour les enregistrements existants",
        },
      },
      passwords: {
        header: "Mots de passe",
        all_passwords_present: "Mots de passe présents pour chaque entrée",
        count_passwords_present:
          "%{smart_count} entrée avec mot de passe |||| %{smart_count} entrées avec mot de passe",
        use_passwords: "Utiliser les mots de passe provenant du fichier CSV",
      },
      upload: {
        header: "Fichier CSV en entrée",
        explanation:
          "Vous pouvez télécharger ici un fichier contenant des valeurs séparées par des virgules qui sera traité pour créer ou mettre à jour des utilisateurs. Le fichier doit inclure les champs « id » et « displayname ». Vous pouvez télécharger et adapter un fichier d'exemple ici : ",
      },
      startImport: {
        simulate_only: "Simuler",
        run_import: "Importer",
      },
      results: {
        header: "Résultats de l'import",
        total: "%{smart_count} entrée au total |||| %{smart_count} entrées au total",
        successful: "%{smart_count} entrées importées avec succès",
        skipped: "%{smart_count} entrées ignorées",
        download_skipped: "Télécharger les entrées ignorées",
        with_error: "%{smart_count} entrée avec des erreurs ||| %{smart_count} entrées avec des erreurs",
        simulated_only: "L'import était simulé",
      },
    },
  },
  delete_media: {
    name: "Media",
    fields: {
      before_ts: "Dernier accès avant",
      size_gt: "Plus grand que (en octets)",
      keep_profiles: "Conserver les images de profil",
    },
    action: {
      send: "Supprimer le média",
      send_success: "Requête envoyée avec succès",
      send_failure: "Une erreur s'est produite",
    },
    helper: {
      send: "Cette API supprime les médias locaux du disque de votre propre serveur. Cela inclut toutes les vignettes locales et les copies des médias téléchargés. Cette API n'affectera pas les médias qui ont été téléversés dans des dépôts de médias externes.",
    },
  },
  resources: {
    users: {
      name: "Utilisateur |||| Utilisateurs",
      email: "Adresse électronique",
      msisdn: "Numéro de téléphone",
      threepid: "Adresse électronique / Numéro de téléphone",
      fields: {
        avatar: "Avatar",
        id: "Identifiant",
        name: "Nom",
        is_guest: "Visiteur",
        admin: "Administrateur du serveur",
        locked: "Verrouillé",
        deactivated: "Désactivé",
        guests: "Afficher les visiteurs",
        show_deactivated: "Afficher les utilisateurs désactivés",
        user_id: "Rechercher un utilisateur",
        displayname: "Nom d'affichage",
        password: "Mot de passe",
        avatar_url: "URL de l'avatar",
        avatar_src: "Avatar",
        medium: "Type",
        threepids: "Identifiants tiers",
        address: "Adresse",
        creation_ts_ms: "Date de création",
        consent_version: "Version du consentement",
        auth_provider: "Fournisseur d'identité",
      },
      helper: {
        deactivate: "Vous devrez fournir un mot de passe pour réactiver le compte.",
        erase: "Marquer l'utilisateur comme effacé conformément au RGPD",
      },
      action: {
        erase: "Effacer les données de l'utilisateur",
      },
    },
    rooms: {
      name: "Salon |||| Salons",
      fields: {
        room_id: "Identifiant du salon",
        name: "Nom",
        canonical_alias: "Alias",
        joined_members: "Membres",
        joined_local_members: "Membres locaux",
        joined_local_devices: "Appareils locaux",
        state_events: "Événements d'État / Complexité",
        version: "Version",
        is_encrypted: "Chiffré",
        encryption: "Chiffrement",
        federatable: "Fédérable",
        public: "Visible dans le répertoire des salons",
        creator: "Créateur",
        join_rules: "Règles d'adhésion",
        guest_access: "Accès des visiteurs",
        history_visibility: "Visibilité de l'historique",
        topic: "Sujet",
        avatar: "Avatar",
      },
      helper: {
        forward_extremities:
          "Les extrémités avant sont les événements feuilles à la fin d'un graphe orienté acyclique (DAG) dans un salon, c'est-à-dire les événements qui n'ont pas de descendants. Plus il y en a dans un salon, plus la résolution d'état que Synapse doit effectuer est importante (indice : c'est une opération coûteuse). Bien que Synapse dispose d'un algorithme pour éviter qu'un trop grand nombre de ces événements n'existent en même temps dans un salon, des bogues peuvent parfois les faire réapparaître. Si un salon présente plus de 10 extrémités avant, cela vaut la peine d'y prêter attention et éventuellement de les supprimer en utilisant les requêtes SQL mentionnées dans la discussion traitant du problème https://github.com/matrix-org/synapse/issues/1760.",
      },
      enums: {
        join_rules: {
          public: "Public",
          knock: "Sur demande",
          invite: "Sur invitation",
          private: "Privé",
        },
        guest_access: {
          can_join: "Les visiteurs peuvent rejoindre le salon",
          forbidden: "Les visiteurs ne peuvent pas rejoindre le salon",
        },
        history_visibility: {
          invited: "Depuis l'invitation",
          joined: "Depuis l'adhésion",
          shared: "Depuis le partage",
          world_readable: "Tout le monde",
        },
        unencrypted: "Non chiffré",
      },
      action: {
        erase: {
          title: "Supprimer le salon",
          content:
            "Voulez-vous vraiment supprimer le salon ? Cette opération ne peut être annulée. Tous les messages et médias partagés du salon seront supprimés du serveur !",
        },
      },
    },
    reports: {
      name: "Événement signalé |||| Événements signalés",
      fields: {
        id: "Identifiant",
        received_ts: "Date du rapport",
        user_id: "Rapporteur",
        name: "Nom du salon",
        score: "Score",
        reason: "Motif",
        event_id: "Identifiant de l'événement",
        event_json: {
          origin: "Serveur d'origine",
          origin_server_ts: "Date d'envoi",
          type: "Type d'événement",
          content: {
            msgtype: "Type de contenu",
            body: "Contenu",
            format: "Format",
            formatted_body: "Contenu mis en forme",
            algorithm: "Algorithme",
          },
        },
      },
    },
    connections: {
      name: "Connexions",
      fields: {
        last_seen: "Date",
        ip: "Adresse IP",
        user_agent: "Agent utilisateur",
      },
    },
    devices: {
      name: "Appareil |||| Appareils",
      fields: {
        device_id: "Identifiant de l'appareil",
        display_name: "Nom de l'appareil",
        last_seen_ts: "Date",
        last_seen_ip: "Adresse IP",
      },
      action: {
        erase: {
          title: "Suppression de %{id}",
          content: "Voulez-vous vraiment supprimer l'appareil « %{name} » ?",
          success: "Appareil supprimé avec succès",
          failure: "Une erreur s'est produite",
        },
      },
    },
    users_media: {
      name: "Media",
      fields: {
        media_id: "Identifiant du média",
        media_length: "Taille du fichier (en octets)",
        media_type: "Type",
        upload_name: "Nom du fichier",
        quarantined_by: "Mis en quarantaine par",
        safe_from_quarantine: "Protection contre la mise en quarantaine",
        created_ts: "Date de création",
        last_access_ts: "Dernier accès",
      },
    },
    protect_media: {
      action: {
        create: "Protéger",
        delete: "Révoquer la protection",
        none: "En quarantaine",
        send_success: "Le statut de protection a été modifié avec succès",
        send_failure: "Une erreur s'est produite",
      },
    },
    quarantine_media: {
      action: {
        name: "Quarantaine",
        create: "Mettre en quarantaine",
        delete: "Révoquer la mise en quarantaine",
        none: "Protégé contre la mise en quarantaine",
        send_success: "Le statut de la quarantaine a été modifié avec succès",
        send_failure: "Une erreur s'est produite",
      },
    },
    pushers: {
      name: "Émetteur de notifications |||| Émetteurs de notifications",
      fields: {
        app: "Application",
        app_display_name: "Nom d'affichage de l'application",
        app_id: "Identifiant de l'application",
        device_display_name: "Nom d'affichage de l'appareil",
        kind: "Type",
        lang: "Langue",
        profile_tag: "Profil",
        pushkey: "Identifiant de l'émetteur",
        data: { url: "URL" },
      },
    },
    servernotices: {
      name: "Annonces du serveur",
      send: "Envoyer des « Annonces du serveur »",
      fields: {
        body: "Message",
      },
      action: {
        send: "Envoyer une annonce",
        send_success: "Annonce envoyée avec succès",
        send_failure: "Une erreur s'est produite",
      },
      helper: {
        send: "Envoie une annonce au nom du serveur aux utilisateurs sélectionnés. La fonction « Annonces du serveur » doit être activée sur le serveur.",
      },
    },
    user_media_statistics: {
      name: "Médias des utilisateurs",
      fields: {
        media_count: "Nombre de médias",
        media_length: "Taille des médias",
      },
    },
    forward_extremities: {
      name: "Extrémités avant",
      fields: {
        id: "Identifiant de l'événement",
        received_ts: "Date de réception",
        depth: "Profondeur",
        state_group: "Groupe d'état",
      },
    },
    room_state: {
      name: "Événements d'état",
      fields: {
        type: "Type",
        content: "Contenu",
        origin_server_ts: "Date d'envoi",
        sender: "Expéditeur",
      },
    },
    room_directory: {
      name: "Répertoire des salons",
      fields: {
        world_readable: "Tout utilisateur peut avoir un aperçu du salon, sans en devenir membre",
        guest_can_join: "Les visiteurs peuvent rejoindre le salon",
      },
      action: {
        title: "Supprimer un salon du répertoire |||| Supprimer %{smart_count} salons du répertoire",
        content:
          "Voulez-vous vraiment supprimer ce salon du répertoire ? |||| Voulez-vous vraiment supprimer ces %{smart_count} salons du répertoire ?",
        erase: "Supprimer du répertoire des salons",
        create: "Publier dans le répertoire des salons",
        send_success: "Salon publié avec succès",
        send_failure: "Une erreur s'est produite",
      },
    },
    registration_tokens: {
      name: "Jetons d'inscription",
      fields: {
        token: "Jeton",
        valid: "Jeton valide",
        uses_allowed: "Nombre d'inscription autorisées",
        pending: "Nombre d'inscription en cours",
        completed: "Nombre d'inscription accomplie",
        expiry_time: "Date d'expiration",
        length: "Longueur",
      },
      helper: {
        length: "Longueur du jeton généré aléatoirement si aucun jeton n'est pas spécifié",
      },
    },
  },
};
export default fr;

```

# src/i18n/fa.ts

```ts
import farsiMessages from "ra-language-farsi";

import { SynapseTranslationMessages } from ".";

const fa: SynapseTranslationMessages = {
  ...farsiMessages,
  synapseadmin: {
    auth: {
      base_url: "آدرس سرور",
      welcome: "به پنل مدیریت سیناپس خوش آمدید!",
      server_version: "نسخه",
      username_error: "لطفاً شناسه کاربر را وارد کنید: '@user:domain'",
      protocol_error: "URL باید با 'http://' یا 'https://' شروع شود",
      url_error: "آدرس وارد شده یک سرور معتبر نیست",
      sso_sign_in: "با SSO وارد شوید",
    },
    users: {
      invalid_user_id: "بخش محلی یک شناسه کاربری ماتریکس بدون سرور خانگی.",
      tabs: { sso: "SSO" },
    },
    rooms: {
      tabs: {
        basic: "اصلی",
        members: "اعضا",
        detail: "جزئیات",
        permission: "مجوزها",
      },
    },
    reports: { tabs: { basic: "اصلی", detail: "جزئیات" } },
  },
  import_users: {
    error: {
      at_entry: "در هنگام ورود %{entry}: %{message}",
      error: "Error",
      required_field: "فیلد الزامی '%{field}' وجود ندارد",
      invalid_value: "خطا در خط %{row}. '%{field}' فیلد ممکن است فقط 'درست' یا 'نادرست' باشد",
      unreasonably_big: "از بارگذاری فایل هایی با حجم غیر منطقی خودداری کنید %{size} مگابایت",
      already_in_progress: "یک بارگذاری از قبل در حال انجام است",
      id_exits: "شناسه %{id} موجود است",
    },
    title: "کاربران را از طریق فایل CSV وارد کنید",
    goToPdf: "رفتن به PDF",
    cards: {
      importstats: {
        header: "وارد کردن کاربران",
        users_total: "%{smart_count} user in CSV file |||| %{smart_count} users in CSV file",
        guest_count: "%{smart_count} guest |||| %{smart_count} guests",
        admin_count: "%{smart_count} admin |||| %{smart_count} admins",
      },
      conflicts: {
        header: "استراتژی متغارض",
        mode: {
          stop: "توقف",
          skip: "نمایش خطا و رد شدن",
        },
      },
      ids: {
        header: "شناسنامه ها",
        all_ids_present: "شناسه های موجود در هر ورودی",
        count_ids_present: "%{smart_count} ورود با شناسه |||| %{smart_count} ورودی با شناسه",
        mode: {
          ignore: "شناسه ها را در CSV نادیده بگیر و شناسه های جدید ایجاد کن",
          update: "سوابق موجود را به روز کنید",
        },
      },
      passwords: {
        header: "رمز عبور",
        all_passwords_present: "رمزهای عبور موجود در هر ورودی",
        count_passwords_present: "%{smart_count} ورود با رمز عبور |||| %{smart_count} ورودی با رمز عبور",
        use_passwords: "از پسوردهای CSV استفاده کنید",
      },
      upload: {
        header: "Input CSV file",
        explanation:
          "در اینجا می توانید فایلی را با مقادیر جدا شده با کاما بارگذاری کنید که برای ایجاد یا به روز رسانی کاربران پردازش می شود. فایل باید شامل فیلدهای 'id' و 'displayname' باشد. می توانید یک فایل نمونه را از اینجا دانلود و تطبیق دهید: ",
      },
      startImport: {
        simulate_only: "فقط شبیه سازی",
        run_import: "بارگذاری",
      },
      results: {
        header: "بارگذاری نتایج",
        total: "%{smart_count} ورودی در کل |||| %{smart_count} ورودی ها در کل",
        successful: "%{smart_count} ورودی ها با موفقیت وارد شدند",
        skipped: "%{smart_count} ورودی ها نادیده گرفته شدند",
        download_skipped: "دانلود رکوردهای نادیده گرفته شده",
        with_error: "%{smart_count} ورود با خطا ||| %{smart_count} ورودی های دارای خطا",
        simulated_only: "اجرا فقط شبیه سازی شد",
      },
    },
  },
  delete_media: {
    name: "رسانه ها",
    fields: {
      before_ts: "آخرین دسترسی قبل",
      size_gt: "بزرگتر از آن (به بایت)",
      keep_profiles: "تصاویر پروفایل را نگه دارید",
    },
    action: {
      send: "حذف رسانه ها",
      send_success: "درخواست با موفقیت ارسال شد.",
      send_failure: "خطایی رخ داده است.",
    },
    helper: {
      send: "این API رسانه های محلی را از دیسک سرور خود حذف می کند. این شامل هر تصویر کوچک محلی و کپی از رسانه دانلود شده است. این API بر رسانه‌هایی که در مخازن رسانه خارجی آپلود شده‌اند تأثیری نخواهد گذاشت.",
    },
  },
  resources: {
    users: {
      name: "کاربر |||| کاربران",
      email: "ایمیل",
      msisdn: "شماره تلفن",
      threepid: "ایمیل / شماره تلفن",
      fields: {
        avatar: "آواتار",
        id: "شناسه کاربر",
        name: "نام",
        is_guest: "مهمان",
        admin: "مدیر سرور",
        deactivated: "غیرفعال",
        guests: "نمایش مهمانان",
        show_deactivated: "نمایش کاربران غیرفعال شده",
        user_id: "جستجوی کاربر",
        displayname: "نام نمایشی",
        password: "رمز عبور",
        avatar_url: "آواتار سرور",
        avatar_src: "آواتار",
        medium: "متوسط",
        threepids: "سرویس احراز هویت",
        address: "آدرس",
        creation_ts_ms: "ساخته شده در",
        consent_version: "Consent نسخه",
        auth_provider: "ارائه دهنده",
        user_type: "نوع کاربر",
      },
      helper: {
        password: "با تغییر رمز عبور کاربر از تمام دستگاه ها خارج می شود.",
        deactivate: "برای فعالسازی مجدد حساب باید رمز عبور وارد کنید.",
        erase: "کاربر را به عنوان GDPR پاک شده علامت گذاری کنید",
      },
      action: {
        erase: "پاک کردن اطلاعات کاربر",
      },
    },
    rooms: {
      name: "اتاق |||| اتاق ها",
      fields: {
        room_id: "شناسه اتاق",
        name: "نام",
        canonical_alias: "نام مستعار",
        joined_members: "اعضا",
        joined_local_members: "اعضای محلی",
        joined_local_devices: "دستگاه های محلی",
        state_events: "رویدادهای حالت / پیچیدگی",
        version: "نسخه",
        is_encrypted: "رمزگذاری شده است",
        encryption: "رمزگذاری",
        federatable: "Federatable",
        public: "قابل مشاهده در فهرست اتاق",
        creator: "سازنده",
        join_rules: "به قوانین بپیوندید",
        guest_access: "دسترسی مهمان",
        history_visibility: "مشاهده تاریخچه",
        topic: "موضوع",
        avatar: "آواتار",
      },
      helper: {
        forward_extremities:
          "اندام های رو به جلو، رویدادهای برگ در انتهای نمودار غیر چرخه ای جهت دار (DAG) در یک اتاق هستند، رویدادهایی که فرزند ندارند. هر چه تعداد بیشتری در یک اتاق وجود داشته باشد، وضوح حالت بیشتری را که سیناپس باید انجام دهد (نکته: این یک عملیات گران است). در حالی که Synapse کدی برای جلوگیری از وجود تعداد زیادی از این موارد در یک زمان در اتاق دارد، گاهی اوقات باگ‌ها می‌توانند دوباره ظاهر شوند. اگر اتاقی بیش از 10 انتهای رو به جلو دارد، بهتر است بررسی کنید که کدام اتاق مقصر است و احتمالاً آنها را با استفاده از جستارهای SQL ذکر شده در آن حذف کنید. #1760.",
      },
      enums: {
        join_rules: {
          public: "عمومی",
          knock: "در زدن",
          invite: "دعوت کردن",
          private: "خصوصی",
        },
        guest_access: {
          can_join: "مهمانان می توانند ملحق شوند",
          forbidden: "مهمانان نمی توانند ملحق شوند",
        },
        history_visibility: {
          invited: "از آنجایی که دعوت شده است",
          joined: "از زمانی که پیوست",
          shared: "از آنجایی که به اشتراک گذاشته شده است",
          world_readable: "هر کسی",
        },
        unencrypted: "رمزگذاری نشده",
      },
      action: {
        erase: {
          title: "حذف اتاق",
          content:
            "آیا مطمئن هستید که می خواهید اتاق را حذف کنید؟ این قابل بازگشت نیست. همه پیام ها و رسانه های مشترک در اتاق از سرور حذف می شوند!",
        },
      },
    },
    reports: {
      name: "رویداد گزارش شده |||| رویدادهای گزارش شده",
      fields: {
        id: "شناسه",
        received_ts: "زمان گزارش",
        user_id: "گوینده",
        name: "نام اتاق",
        score: "نمره",
        reason: "دلیل",
        event_id: "شناسه رویداد",
        event_json: {
          origin: "سرور مبدا",
          origin_server_ts: "زمان ارسال",
          type: "نوع رویداد",
          content: {
            msgtype: "نوع محتوا",
            body: "محتوا",
            format: "قالب",
            formatted_body: "محتوای قالب بندی شده",
            algorithm: "الگوریتم",
          },
        },
      },
    },
    connections: {
      name: "اتصالات",
      fields: {
        last_seen: "تاریخ",
        ip: "آدرس آی پی",
        user_agent: "نماینده کاربر",
      },
    },
    devices: {
      name: "دستگاه |||| دستگاه ها",
      fields: {
        device_id: "شناسه دستگاه",
        display_name: "نام دستگاه",
        last_seen_ts: "مهر زمان",
        last_seen_ip: "آدرس آی پی",
      },
      action: {
        erase: {
          title: "حذف کردن %{id}",
          content: 'آیا مطمئن هستید که می خواهید دستگاه را حذف کنید؟ "%{name}"?',
          success: "دستگاه با موفقیت حذف شد.",
          failure: "خطایی رخ داده است.",
        },
      },
    },
    users_media: {
      name: "رسانه ها",
      fields: {
        media_id: "شناسه رسانه",
        media_length: "اندازه فایل (به بایت)",
        media_type: "نوع",
        upload_name: "نام فایل",
        quarantined_by: "قرنطینه شده توسط",
        safe_from_quarantine: "امان از قرنطینه",
        created_ts: "ایجاد شده",
        last_access_ts: "آخرین دسترسی",
      },
    },
    protect_media: {
      action: {
        create: "محافظت نشده، حفاظت ایجاد کنید",
        delete: "محافظت شده، حفاظت را بردارید",
        none: "در قرنطینه",
        send_success: "وضعیت حفاظت با موفقیت تغییر کرد.",
        send_failure: "خطایی رخ داده است.",
      },
    },
    quarantine_media: {
      action: {
        name: "قرنطینه",
        create: "به قرنطینه اضافه کنید",
        delete: "در قرنطینه، غیر قرنطینه",
        none: "از قرنطینه محافظت می شود",
        send_success: "وضعیت قرنطینه با موفقیت تغییر کرد.",
        send_failure: "خطایی رخ داده است.",
      },
    },
    pushers: {
      name: "هل دهنده |||| هل دهنده ها",
      fields: {
        app: "برنامه",
        app_display_name: "نام نمایش برنامه",
        app_id: "شناسه برنامه",
        device_display_name: "نام نمایشی برنامه",
        kind: "نوع",
        lang: "زبان",
        profile_tag: "برچسب پروفایل",
        pushkey: "کلید",
        data: { url: "URL" },
      },
    },
    servernotices: {
      name: "اطلاعیه های سرور",
      send: "ارسال اعلانات سرور",
      fields: {
        body: "پیام",
      },
      action: {
        send: "ارسال یادداشت",
        send_success: "اعلان سرور با موفقیت ارسال شد.",
        send_failure: "خطایی رخ داده است.",
      },
      helper: {
        send: "اعلان سرور را برای کاربران انتخاب شده ارسال می کند. ویژگی 'اعلامیه های سرور' باید در سرور فعال شود.",
      },
    },
    user_media_statistics: {
      name: "رسانه کاربران",
      fields: {
        media_count: "شمارش رسانه ها",
        media_length: "طول رسانه",
      },
    },
    forward_extremities: {
      name: "Forward Extremities",
      fields: {
        id: "شناسه رویداد",
        received_ts: "مهر زمان",
        depth: "عمق",
        state_group: "گروه دولتی",
      },
    },
    room_state: {
      name: "رویدادهای وضعیت",
      fields: {
        type: "نوع",
        content: "محتوا",
        origin_server_ts: "زمان ارسال",
        sender: "فرستنده",
      },
    },
    room_directory: {
      name: "راهنمای اتاق",
      fields: {
        world_readable: "کاربران مهمان می توانند بدون عضویت مشاهده کنند",
        guest_can_join: "کاربران مهمان ممکن است ملحق شوند",
      },
      action: {
        title: "اتاق را از فهرست حذف کنید |||| حذف کنید %{smart_count} اتاق ها از دایرکتوری",
        content:
          "آیا مطمئنید که می خواهید این اتاق را از فهرست راهنمای حذف کنید؟ |||| آیا مطمئن هستید که می خواهید این موارد را %{smart_count} از راهنمای اتاق ها حذف کنید؟",
        erase: "حذف از فهرست اتاق",
        create: "انتشار در راهنما اتاق",
        send_success: "اتاق با موفقیت منتشر شد.",
        send_failure: "خطایی رخ داده است.",
      },
    },
    destinations: {
      name: "سرور های مرتبط",
      fields: {
        destination: "آدرس",
        failure_ts: "زمان شکست",
        retry_last_ts: "آخرین زمان اتصال",
        retry_interval: "بازه امتحان مجدد",
        last_successful_stream_ordering: "آخرین جریان موفق",
        stream_ordering: "جریان",
      },
      action: { reconnect: "دوباره وصل شوید" },
    },
    registration_tokens: {
      name: "توکن های ثبت نام",
      fields: {
        token: "توکن",
        valid: "توکن معتبر",
        uses_allowed: "موارد استفاده مجاز",
        pending: "انتظار",
        completed: "تکمیل شد",
        expiry_time: "زمان انقضا",
        length: "طول",
      },
      helper: { length: "طول توکن در صورت عدم ارائه توکن." },
    },
  },
};
export default fa;

```

# src/i18n/en.ts

```ts
import englishMessages from "ra-language-english";

import { SynapseTranslationMessages } from ".";

const en: SynapseTranslationMessages = {
  ...englishMessages,
  synapseadmin: {
    auth: {
      base_url: "Homeserver URL",
      welcome: "Welcome to Synapse-admin",
      server_version: "Synapse version",
      supports_specs: "supports Matrix specs",
      username_error: "Please enter fully qualified user ID: '@user:domain'",
      protocol_error: "URL has to start with 'http://' or 'https://'",
      url_error: "Not a valid Matrix server URL",
      sso_sign_in: "Sign in with SSO",
    },
    users: {
      invalid_user_id: "Localpart of a Matrix user-id without homeserver.",
      tabs: { sso: "SSO" },
    },
    rooms: {
      details: "Room details",
      tabs: {
        basic: "Basic",
        members: "Members",
        detail: "Details",
        permission: "Permissions",
      },
    },
    reports: { tabs: { basic: "Basic", detail: "Details" } },
  },
  import_users: {
    error: {
      at_entry: "At entry %{entry}: %{message}",
      error: "Error",
      required_field: "Required field '%{field}' is not present",
      invalid_value: "Invalid value on line %{row}. '%{field}' field may only be 'true' or 'false'",
      unreasonably_big: "Refused to load unreasonably big file of %{size} megabytes",
      already_in_progress: "An import run is already in progress",
      id_exits: "ID %{id} already present",
    },
    title: "Import users via CSV",
    goToPdf: "Go to PDF",
    cards: {
      importstats: {
        header: "Import users",
        users_total: "%{smart_count} user in CSV file |||| %{smart_count} users in CSV file",
        guest_count: "%{smart_count} guest |||| %{smart_count} guests",
        admin_count: "%{smart_count} admin |||| %{smart_count} admins",
      },
      conflicts: {
        header: "Conflict strategy",
        mode: {
          stop: "Stop on conflict",
          skip: "Show error and skip on conflict",
        },
      },
      ids: {
        header: "IDs",
        all_ids_present: "IDs present on every entry",
        count_ids_present: "%{smart_count} entry with ID |||| %{smart_count} entries with IDs",
        mode: {
          ignore: "Ignore IDs in CSV and create new ones",
          update: "Update existing records",
        },
      },
      passwords: {
        header: "Passwords",
        all_passwords_present: "Passwords present on every entry",
        count_passwords_present: "%{smart_count} entry with password |||| %{smart_count} entries with passwords",
        use_passwords: "Use passwords from CSV",
      },
      upload: {
        header: "Input CSV file",
        explanation:
          "Here you can upload a file with comma separated values that is processed to create or update users. The file must include the fields 'id' and 'displayname'. You can download and adapt an example file here: ",
      },
      startImport: {
        simulate_only: "Simulate only",
        run_import: "Import",
      },
      results: {
        header: "Import results",
        total: "%{smart_count} entry in total |||| %{smart_count} entries in total",
        successful: "%{smart_count} entries successfully imported",
        skipped: "%{smart_count} entries skipped",
        download_skipped: "Download skipped records",
        with_error: "%{smart_count} entry with errors |||| %{smart_count} entries with errors",
        simulated_only: "Run was only simulated",
      },
    },
  },
  delete_media: {
    name: "Media",
    fields: {
      before_ts: "last access before",
      size_gt: "Larger then (in bytes)",
      keep_profiles: "Keep profile images",
    },
    action: {
      send: "Delete media",
      send_success: "Request successfully sent.",
      send_failure: "An error has occurred.",
    },
    helper: {
      send: "This API deletes the local media from the disk of your own server. This includes any local thumbnails and copies of media downloaded. This API will not affect media that has been uploaded to external media repositories.",
    },
  },
  resources: {
    users: {
      name: "User |||| Users",
      email: "Email",
      msisdn: "Phone",
      threepid: "Email / Phone",
      fields: {
        avatar: "Avatar",
        id: "User-ID",
        name: "Name",
        is_guest: "Guest",
        admin: "Server Administrator",
        locked: "Locked",
        deactivated: "Deactivated",
        erased: "Erased",
        guests: "Show guests",
        show_deactivated: "Show deactivated users",
        user_id: "Search user",
        displayname: "Displayname",
        password: "Password",
        avatar_url: "Avatar URL",
        avatar_src: "Avatar",
        medium: "Medium",
        threepids: "3PIDs",
        address: "Address",
        creation_ts_ms: "Creation timestamp",
        consent_version: "Consent version",
        auth_provider: "Provider",
        user_type: "User type",
      },
      helper: {
        password: "Changing password will log user out of all sessions.",
        deactivate: "You must provide a password to re-activate an account.",
        erase: "Mark the user as GDPR-erased",
      },
      action: {
        erase: "Erase user data",
      },
    },
    rooms: {
      name: "Room |||| Rooms",
      fields: {
        room_id: "Room-ID",
        name: "Name",
        canonical_alias: "Alias",
        joined_members: "Members",
        joined_local_members: "Local members",
        joined_local_devices: "Local devices",
        state_events: "State events / Complexity",
        version: "Version",
        is_encrypted: "Encrypted",
        encryption: "Encryption",
        federatable: "Federatable",
        public: "Visible in room directory",
        creator: "Creator",
        join_rules: "Join rules",
        guest_access: "Guest access",
        history_visibility: "History visibility",
        topic: "Topic",
        avatar: "Avatar",
      },
      helper: {
        forward_extremities:
          "Forward extremities are the leaf events at the end of a Directed acyclic graph (DAG) in a room, aka events that have no children. The more exist in a room, the more state resolution that Synapse needs to perform (hint: it's an expensive operation). While Synapse has code to prevent too many of these existing at one time in a room, bugs can sometimes make them crop up again. If a room has >10 forward extremities, it's worth checking which room is the culprit and potentially removing them using the SQL queries mentioned in #1760.",
      },
      enums: {
        join_rules: {
          public: "Public",
          knock: "Knock",
          invite: "Invite",
          private: "Private",
        },
        guest_access: {
          can_join: "Guests can join",
          forbidden: "Guests can not join",
        },
        history_visibility: {
          invited: "Since invited",
          joined: "Since joined",
          shared: "Since shared",
          world_readable: "Anyone",
        },
        unencrypted: "Unencrypted",
      },
      action: {
        erase: {
          title: "Delete room",
          content:
            "Are you sure you want to delete the room? This cannot be undone. All messages and shared media in the room will be deleted from the server!",
        },
      },
    },
    reports: {
      name: "Reported event |||| Reported events",
      fields: {
        id: "ID",
        received_ts: "report time",
        user_id: "announcer",
        name: "name of the room",
        score: "score",
        reason: "reason",
        event_id: "event ID",
        event_json: {
          origin: "origin server",
          origin_server_ts: "time of send",
          type: "event type",
          content: {
            msgtype: "content type",
            body: "content",
            format: "format",
            formatted_body: "formatted content",
            algorithm: "algorithm",
            url: "URL",
            info: {
              mimetype: "Type",
            },
          },
        },
      },
      action: {
        erase: {
          title: "Delete reported event",
          content: "Are you sure you want to delete the reported event? This cannot be undone.",
        },
      },
    },
    connections: {
      name: "Connections",
      fields: {
        last_seen: "Date",
        ip: "IP address",
        user_agent: "User agent",
      },
    },
    devices: {
      name: "Device |||| Devices",
      fields: {
        device_id: "Device-ID",
        display_name: "Device name",
        last_seen_ts: "Timestamp",
        last_seen_ip: "IP address",
      },
      action: {
        erase: {
          title: "Removing %{id}",
          content: 'Are you sure you want to remove the device "%{name}"?',
          success: "Device successfully removed.",
          failure: "An error has occurred.",
        },
      },
    },
    users_media: {
      name: "Media",
      fields: {
        media_id: "Media ID",
        media_length: "File Size (in Bytes)",
        media_type: "Type",
        upload_name: "File name",
        quarantined_by: "Quarantined by",
        safe_from_quarantine: "Safe from quarantine",
        created_ts: "Created",
        last_access_ts: "Last access",
      },
      action: {
        open: "Open media file in new window",
      },
    },
    protect_media: {
      action: {
        create: "Unprotected, create protection",
        delete: "Protected, remove protection",
        none: "In quarantine",
        send_success: "Successfully changed the protection status.",
        send_failure: "An error has occurred.",
      },
    },
    quarantine_media: {
      action: {
        name: "Quarantine",
        create: "Add to quarantine",
        delete: "In quarantine, unquarantine",
        none: "Protected from quarantine",
        send_success: "Successfully changed the quarantine status.",
        send_failure: "An error has occurred.",
      },
    },
    pushers: {
      name: "Pusher |||| Pushers",
      fields: {
        app: "App",
        app_display_name: "App display name",
        app_id: "App ID",
        device_display_name: "Device display name",
        kind: "Kind",
        lang: "Language",
        profile_tag: "Profile tag",
        pushkey: "Pushkey",
        data: { url: "URL" },
      },
    },
    servernotices: {
      name: "Server Notices",
      send: "Send server notices",
      fields: {
        body: "Message",
      },
      action: {
        send: "Send note",
        send_success: "Server notice successfully sent.",
        send_failure: "An error has occurred.",
      },
      helper: {
        send: 'Sends a server notice to the selected users. The feature "Server Notices" has to be activated at the server.',
      },
    },
    user_media_statistics: {
      name: "Users' media",
      fields: {
        media_count: "Media count",
        media_length: "Media length",
      },
    },
    forward_extremities: {
      name: "Forward Extremities",
      fields: {
        id: "Event ID",
        received_ts: "Timestamp",
        depth: "Depth",
        state_group: "State group",
      },
    },
    room_state: {
      name: "State events",
      fields: {
        type: "Type",
        content: "Content",
        origin_server_ts: "time of send",
        sender: "Sender",
      },
    },
    room_directory: {
      name: "Room directory",
      fields: {
        world_readable: "guest users may view without joining",
        guest_can_join: "guest users may join",
      },
      action: {
        title: "Delete room from directory |||| Delete %{smart_count} rooms from directory",
        content:
          "Are you sure you want to remove this room from directory? |||| Are you sure you want to remove these %{smart_count} rooms from directory?",
        erase: "Delete from room directory",
        create: "Publish in room directory",
        send_success: "Room successfully published.",
        send_failure: "An error has occurred.",
      },
    },
    destinations: {
      name: "Federation",
      fields: {
        destination: "Destination",
        failure_ts: "Failure timestamp",
        retry_last_ts: "Last retry timestamp",
        retry_interval: "Retry interval",
        last_successful_stream_ordering: "Last successful stream",
        stream_ordering: "Stream",
      },
      action: { reconnect: "Reconnect" },
    },
    registration_tokens: {
      name: "Registration tokens",
      fields: {
        token: "Token",
        valid: "Valid token",
        uses_allowed: "Uses allowed",
        pending: "Pending",
        completed: "Completed",
        expiry_time: "Expiry time",
        length: "Length",
      },
      helper: { length: "Length of the token if no token is given." },
    },
  },
};
export default en;

```

# src/i18n/de.ts

```ts
import { formalGermanMessages } from "@haleos/ra-language-german";

import { SynapseTranslationMessages } from ".";

const de: SynapseTranslationMessages = {
  ...formalGermanMessages,
  synapseadmin: {
    auth: {
      base_url: "Heimserver URL",
      welcome: "Willkommen bei Synapse-admin",
      server_version: "Synapse Version",
      supports_specs: "unterstützt Matrix-Specs",
      username_error: "Bitte vollständigen Nutzernamen angeben: '@user:domain'",
      protocol_error: "Die URL muss mit 'http://' oder 'https://' beginnen",
      url_error: "Keine gültige Matrix Server URL",
      sso_sign_in: "Anmeldung mit SSO",
    },
    users: {
      invalid_user_id: "Lokaler Anteil der Matrix Benutzer-ID ohne Homeserver.",
      tabs: { sso: "SSO" },
    },
    rooms: {
      details: "Raumdetails",
      tabs: {
        basic: "Allgemein",
        members: "Mitglieder",
        detail: "Details",
        permission: "Berechtigungen",
      },
    },
    reports: { tabs: { basic: "Allgemein", detail: "Details" } },
  },
  import_users: {
    error: {
      at_entry: "Bei Eintrag %{entry}: %{message}",
      error: "Fehler",
      required_field: "Pflichtfeld '%{field}' fehlt",
      invalid_value:
        "Ungültiger Wert in Zeile %{row}. Feld '%{field}' darf nur die Werte 'true' oder 'false' enthalten",
      unreasonably_big: "Datei ist zu groß für den Import (%{size} Megabytes)",
      already_in_progress: "Es läuft bereits ein Import",
      id_exits: "ID %{id} existiert bereits",
    },
    title: "Benutzer aus CSV importieren",
    goToPdf: "Gehe zum PDF",
    cards: {
      importstats: {
        header: "Benutzer importieren",
        users_total: "%{smart_count} Benutzer in der CSV Datei |||| %{smart_count} Benutzer in der CSV Datei",
        guest_count: "%{smart_count} Gast |||| %{smart_count} Gäste",
        admin_count: "%{smart_count} Server Administrator |||| %{smart_count} Server Administratoren",
      },
      conflicts: {
        header: "Konfliktstrategie",
        mode: {
          stop: "Stoppe bei Fehlern",
          skip: "Zeige Fehler und überspringe fehlerhafte Einträge",
        },
      },
      ids: {
        header: "IDs",
        all_ids_present: "IDs in jedem Eintrag vorhanden",
        count_ids_present: "%{smart_count} Eintrag mit ID |||| %{smart_count} Einträge mit IDs",
        mode: {
          ignore: "Ignoriere IDs der CSV-Datei und erstelle neue",
          update: "Aktualisiere existierende Benutzer",
        },
      },
      passwords: {
        header: "Passwörter",
        all_passwords_present: "Passwörter in jedem Eintrag vorhanden",
        count_passwords_present: "%{smart_count} Eintrag mit Passwort |||| %{smart_count} Einträge mit Passwörtern",
        use_passwords: "Verwende Passwörter aus der CSV Datei",
      },
      upload: {
        header: "CSV Datei importieren",
        explanation:
          "Hier können Sie eine Datei mit kommagetrennten Daten hochladen, die verwendet werden um Benutzer anzulegen oder zu ändern. Die Datei muss mindestens die Felder 'id' und 'displayname' enthalten. Hier können Sie eine Beispieldatei herunterladen und anpassen: ",
      },
      startImport: {
        simulate_only: "Nur simulieren",
        run_import: "Importieren",
      },
      results: {
        header: "Ergebnis",
        total: "%{smart_count} Eintrag insgesamt |||| %{smart_count} Einträge insgesamt",
        successful: "%{smart_count} Einträge erfolgreich importiert",
        skipped: "%{smart_count} Einträge übersprungen",
        download_skipped: "Übersprungene Einträge herunterladen",
        with_error: "%{smart_count} Eintrag mit Fehlern ||| %{smart_count} Einträge mit Fehlern",
        simulated_only: "Import-Vorgang war nur simuliert",
      },
    },
  },
  delete_media: {
    name: "Medien",
    fields: {
      before_ts: "Letzter Zugriff vor",
      size_gt: "Größer als (in Bytes)",
      keep_profiles: "Behalte Profilbilder",
    },
    action: {
      send: "Medien löschen",
      send_success: "Anfrage erfolgreich versendet.",
      send_failure: "Beim Versenden ist ein Fehler aufgetreten.",
    },
    helper: {
      send: "Diese API löscht die lokalen Medien von der Festplatte des eigenen Servers. Dies umfasst alle lokalen Miniaturbilder und Kopien von Medien. Diese API wirkt sich nicht auf Medien aus, die sich in externen Medien-Repositories befinden.",
    },
  },
  resources: {
    users: {
      name: "Benutzer",
      email: "E-Mail",
      msisdn: "Telefon",
      threepid: "E-Mail / Telefon",
      fields: {
        avatar: "Avatar",
        id: "Benutzer-ID",
        name: "Name",
        is_guest: "Gast",
        admin: "Server Administrator",
        locked: "Gesperrt",
        deactivated: "Deaktiviert",
        erased: "Gelöscht",
        guests: "Zeige Gäste",
        show_deactivated: "Zeige deaktivierte Benutzer",
        user_id: "Suche Benutzer",
        displayname: "Anzeigename",
        password: "Passwort",
        avatar_url: "Avatar URL",
        avatar_src: "Avatar",
        medium: "Medium",
        threepids: "3PIDs",
        address: "Adresse",
        creation_ts_ms: "Zeitpunkt der Erstellung",
        consent_version: "Zugestimmte Geschäftsbedingungen",
        auth_provider: "Provider",
        user_type: "Benutzertyp",
      },
      helper: {
        password: "Durch die Änderung des Passworts wird der Benutzer von allen Sitzungen abgemeldet.",
        deactivate: "Sie müssen ein Passwort angeben, um ein Konto wieder zu aktivieren.",
        erase: "DSGVO konformes Löschen der Benutzerdaten",
      },
      action: {
        erase: "Lösche Benutzerdaten",
      },
    },
    rooms: {
      name: "Raum |||| Räume",
      fields: {
        room_id: "Raum-ID",
        name: "Name",
        canonical_alias: "Alias",
        joined_members: "Mitglieder",
        joined_local_members: "Lokale Mitglieder",
        joined_local_devices: "Lokale Endgeräte",
        state_events: "Zustandsereignisse / Komplexität",
        version: "Version",
        is_encrypted: "Verschlüsselt",
        encryption: "Verschlüsselungs-Algorithmus",
        federatable: "Fö­de­rierbar",
        public: "Sichtbar im Raumverzeichnis",
        creator: "Ersteller",
        join_rules: "Beitrittsregeln",
        guest_access: "Gastzugriff",
        history_visibility: "Historie-Sichtbarkeit",
        topic: "Thema",
        avatar: "Avatar",
      },
      helper: {
        forward_extremities:
          "Forward extremities are the leaf events at the end of a Directed acyclic graph (DAG) in a room, aka events that have no children. The more exist in a room, the more state resolution that Synapse needs to perform (hint: it's an expensive operation). While Synapse has code to prevent too many of these existing at one time in a room, bugs can sometimes make them crop up again. If a room has >10 forward extremities, it's worth checking which room is the culprit and potentially removing them using the SQL queries mentioned in #1760.",
      },
      enums: {
        join_rules: {
          public: "Öffentlich",
          knock: "Auf Anfrage",
          invite: "Nur auf Einladung",
          private: "Privat",
        },
        guest_access: {
          can_join: "Gäste können beitreten",
          forbidden: "Gäste können nicht beitreten",
        },
        history_visibility: {
          invited: "Ab Einladung",
          joined: "Ab Beitritt",
          shared: "Ab Setzen der Einstellung",
          world_readable: "Jeder",
        },
        unencrypted: "Nicht verschlüsselt",
      },
      action: {
        erase: {
          title: "Raum löschen",
          content:
            "Sind Sie sicher dass Sie den Raum löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden. Alle Nachrichten und Medien, die der Raum beinhaltet werden vom Server gelöscht!",
        },
      },
    },
    reports: {
      name: "Gemeldetes Ereignis |||| Gemeldete Ereignisse",
      fields: {
        id: "ID",
        received_ts: "Meldezeit",
        user_id: "Meldender",
        name: "Raumname",
        score: "Wert",
        reason: "Grund",
        event_id: "Event-ID",
        event_json: {
          origin: "Ursprungsserver",
          origin_server_ts: "Sendezeit",
          type: "Eventtyp",
          content: {
            msgtype: "Inhaltstyp",
            body: "Nachrichteninhalt",
            format: "Nachrichtenformat",
            formatted_body: "Formatierter Nachrichteninhalt",
            algorithm: "Verschlüsselungsalgorithmus",
            info: {
              mimetype: "Typ",
            },
            url: "URL",
          },
        },
      },
      action: {
        erase: {
          title: "Gemeldetes Event löschen",
          content:
            "Sind Sie sicher dass Sie das gemeldete Event löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.",
        },
      },
    },
    connections: {
      name: "Verbindungen",
      fields: {
        last_seen: "Datum",
        ip: "IP-Adresse",
        user_agent: "User Agent",
      },
    },
    devices: {
      name: "Gerät |||| Geräte",
      fields: {
        device_id: "Geräte-ID",
        display_name: "Gerätename",
        last_seen_ts: "Zeitstempel",
        last_seen_ip: "IP-Adresse",
      },
      action: {
        erase: {
          title: "Entferne %{id}",
          content: 'Möchten Sie das Gerät "%{name}" wirklich entfernen?',
          success: "Gerät erfolgreich entfernt.",
          failure: "Beim Entfernen ist ein Fehler aufgetreten.",
        },
      },
    },
    users_media: {
      name: "Medien",
      fields: {
        media_id: "Medien ID",
        media_length: "Größe",
        media_type: "Typ",
        upload_name: "Dateiname",
        quarantined_by: "Zur Quarantäne hinzugefügt",
        safe_from_quarantine: "Schutz vor Quarantäne",
        created_ts: "Erstellt",
        last_access_ts: "Letzter Zugriff",
      },
      action: {
        open: "Mediendatei in neuem Fenster öffnen",
      },
    },
    protect_media: {
      action: {
        create: "Ungeschützt, Schutz erstellen",
        delete: "Geschützt, Schutz aufheben",
        none: "In Quarantäne",
        send_success: "Erfolgreich den Schutz-Status geändert.",
        send_failure: "Beim Versenden ist ein Fehler aufgetreten.",
      },
    },
    quarantine_media: {
      action: {
        name: "Quarantäne",
        create: "Zur Quarantäne hinzufügen",
        delete: "In Quarantäne, Quarantäne aufheben",
        none: "Geschützt vor Quarantäne",
        send_success: "Erfolgreich den Quarantäne-Status geändert.",
        send_failure: "Beim Versenden ist ein Fehler aufgetreten.",
      },
    },
    pushers: {
      name: "Pusher |||| Pushers",
      fields: {
        app: "App",
        app_display_name: "App-Anzeigename",
        app_id: "App ID",
        device_display_name: "Geräte-Anzeigename",
        kind: "Art",
        lang: "Sprache",
        profile_tag: "Profil-Tag",
        pushkey: "Pushkey",
        data: { url: "URL" },
      },
    },
    servernotices: {
      name: "Serverbenachrichtigungen",
      send: "Servernachricht versenden",
      fields: {
        body: "Nachricht",
      },
      action: {
        send: "Sende Nachricht",
        send_success: "Nachricht erfolgreich versendet.",
        send_failure: "Beim Versenden ist ein Fehler aufgetreten.",
      },
      helper: {
        send: 'Sendet eine Serverbenachrichtigung an die ausgewählten Nutzer. Hierfür muss das Feature "Server Notices" auf dem Server aktiviert sein.',
      },
    },
    user_media_statistics: {
      name: "Dateien je Benutzer",
      fields: {
        media_count: "Anzahl der Dateien",
        media_length: "Größe der Dateien",
      },
    },
    forward_extremities: {
      name: "Vorderextremitäten",
      fields: {
        id: "Event-ID",
        received_ts: "Zeitstempel",
        depth: "Tiefe",
        state_group: "Zustandsgruppe",
      },
    },
    room_state: {
      name: "Zustandsereignisse",
      fields: {
        type: "Typ",
        content: "Inhalt",
        origin_server_ts: "Sendezeit",
        sender: "Absender",
      },
    },
    room_directory: {
      name: "Raumverzeichnis",
      fields: {
        world_readable: "Gastbenutzer dürfen ohne Beitritt lesen",
        guest_can_join: "Gastbenutzer dürfen beitreten",
      },
      action: {
        title: "Raum aus Verzeichnis löschen |||| %{smart_count} Räume aus Verzeichnis löschen",
        content:
          "Möchten Sie den Raum wirklich aus dem Raumverzeichnis löschen? |||| Möchten Sie die %{smart_count} Räume wirklich aus dem Raumverzeichnis löschen?",
        erase: "Lösche aus Verzeichnis",
        create: "Eintragen ins Verzeichnis",
        send_success: "Raum erfolgreich eingetragen.",
        send_failure: "Beim Entfernen ist ein Fehler aufgetreten.",
      },
    },
    destinations: {
      name: "Föderation",
      fields: {
        destination: "Ziel",
        failure_ts: "Fehlerzeitpunkt",
        retry_last_ts: "Letzter Wiederholungsversuch",
        retry_interval: "Wiederholungsintervall",
        last_successful_stream_ordering: "letzte erfogreicher Stream",
        stream_ordering: "Stream",
      },
      action: { reconnect: "Neu verbinden" },
    },
    registration_tokens: {
      name: "Registrierungstoken",
      fields: {
        token: "Token",
        valid: "Gültige Token",
        uses_allowed: "Anzahl",
        pending: "Ausstehend",
        completed: "Abgeschlossen",
        expiry_time: "Ablaufzeit",
        length: "Länge",
      },
      helper: { length: "Länge des Tokens, wenn kein Token vorgegeben wird." },
    },
  },
};
export default de;

```

# public/data/example.csv

```csv
id,displayname,password,is_guest,admin,deactivated
testuser22,Jane Doe,secretpassword,false,true,false
,John Doe,,false,false,false

```

# .yarn/sdks/integrations.yml

```yml
# This file is automatically generated by @yarnpkg/sdks.
# Manual changes might be lost!

integrations:
  - vscode

```

# .yarn/releases/yarn-4.1.1.cjs

```cjs
#!/usr/bin/env node
/* eslint-disable */
//prettier-ignore
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * buildToken
 * Builds OAuth token prefix (helper function)
 *
 * @name buildToken
 * @function
 * @param {GitUrl} obj The parsed Git url object.
 * @return {String} token prefix
 */
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * is-windows <https://github.com/jonschlinkert/is-windows>
 *
 * Copyright © 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/**
  @license
  Copyright (c) 2015, Rebecca Turner

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted, provided that the above
  copyright notice and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
  FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
 */
/**
  @license
  Copyright Joyent, Inc. and other Node contributors.

  Permission is hereby granted, free of charge, to any person obtaining a
  copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to permit
  persons to whom the Software is furnished to do so, subject to the
  following conditions:

  The above copyright notice and this permission notice shall be included
  in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/**
  @license
  Copyright Node.js contributors. All rights reserved.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to
  deal in the Software without restriction, including without limitation the
  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
  sell copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
  IN THE SOFTWARE.
*/
/**
  @license
  The MIT License (MIT)

  Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com)

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
/** @license React v0.18.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v0.24.0
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

```

# .github/workflows/github-release.yml

```yml
name: Create release tarball and attach to tag

on:
  push:
    tags:
      - "*"

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      packages: write

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: yarn install --immutable
      - run: yarn build
      - run: |
          version=`git describe --dirty --tags || echo unknown`
          cp -r dist synapse-admin-$version
          tar chvzf dist/synapse-admin-$version.tar.gz synapse-admin-$version
      - uses: softprops/action-gh-release@c062e08bd532815e2082a85e87e3ef29c3e6d191
        with:
          files: dist/*.tar.gz
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```

# .github/workflows/edge_ghpage.yml

```yml
name: Build and Deploy Edge version to GH Pages
on:
  workflow_dispatch:
  push:
    branches:
      - main
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v4
        with:
          fetch-depth: 100
          fetch-tags: true
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install and Build 🔧
        run: |
          yarn install --immutable
          yarn build --base=/synapse-admin

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4.6.3
        with:
          branch: gh-pages
          folder: dist

```

# .github/workflows/docker-release.yml

```yml
name: Create docker image(s) and push to docker hub and ghcr.io
# see https://docs.github.com/en/actions/publishing-packages/publishing-docker-images#publishing-images-to-docker-hub-and-github-packages

on:
  push:
    # Sequence of patterns matched against refs/heads
    # prettier-ignore
    branches:
      # Push events on master branch
      - master
    # Sequence of patterns matched against refs/tags
    tags:
      - '[0-9]+\.[0-9]+\.[0-9]+'             # Push events to 0.X.X tag

jobs:
  docker:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Login to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.repository_owner }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: |
            awesometechnologies/synapse-admin
            ghcr.io/${{ github.repository }}

      - name: Build and Push Tag
        uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          platforms: linux/amd64,linux/arm64

```

# .github/workflows/build-test.yml

```yml
name: build-test

on:
  push:
    branches: ["master"]
  pull_request:

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup node
        uses: actions/setup-node@v4
        with:
          node-version: "18"
      - name: Install dependencies
        run: yarn --immutable
      - name: Run checks
        run: yarn lint
      - name: Run tests
        run: yarn test

```

# .yarn/sdks/typescript/package.json

```json
{
  "name": "typescript",
  "version": "5.4.5-sdk",
  "main": "./lib/typescript.js",
  "type": "commonjs",
  "bin": {
    "tsc": "./bin/tsc",
    "tsserver": "./bin/tsserver"
  }
}

```

# .yarn/sdks/prettier/package.json

```json
{
  "name": "prettier",
  "version": "3.2.5-sdk",
  "main": "./index.cjs",
  "type": "commonjs",
  "bin": "./bin/prettier.cjs"
}

```

# .yarn/sdks/prettier/index.cjs

```cjs
#!/usr/bin/env node

const {existsSync} = require(`fs`);
const {createRequire} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = createRequire(absPnpApiPath);

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require prettier
    require(absPnpApiPath).setup();
  }
}

// Defer to the real prettier your application uses
module.exports = absRequire(`prettier`);

```

# .yarn/sdks/eslint/package.json

```json
{
  "name": "eslint",
  "version": "8.57.0-sdk",
  "main": "./lib/api.js",
  "type": "commonjs",
  "bin": {
    "eslint": "./bin/eslint.js"
  },
  "exports": {
    "./package.json": "./package.json",
    ".": "./lib/api.js",
    "./use-at-your-own-risk": "./lib/unsupported-api.js"
  }
}

```

# .yarn/sdks/typescript/lib/typescript.js

```js
#!/usr/bin/env node

const {existsSync} = require(`fs`);
const {createRequire} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = createRequire(absPnpApiPath);

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require typescript
    require(absPnpApiPath).setup();
  }
}

// Defer to the real typescript your application uses
module.exports = absRequire(`typescript`);

```

# .yarn/sdks/typescript/lib/tsserverlibrary.js

```js
#!/usr/bin/env node

const {existsSync} = require(`fs`);
const {createRequire} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = createRequire(absPnpApiPath);

const moduleWrapper = tsserver => {
  if (!process.versions.pnp) {
    return tsserver;
  }

  const {isAbsolute} = require(`path`);
  const pnpApi = require(`pnpapi`);

  const isVirtual = str => str.match(/\/(\$\$virtual|__virtual__)\//);
  const isPortal = str => str.startsWith("portal:/");
  const normalize = str => str.replace(/\\/g, `/`).replace(/^\/?/, `/`);

  const dependencyTreeRoots = new Set(pnpApi.getDependencyTreeRoots().map(locator => {
    return `${locator.name}@${locator.reference}`;
  }));

  // VSCode sends the zip paths to TS using the "zip://" prefix, that TS
  // doesn't understand. This layer makes sure to remove the protocol
  // before forwarding it to TS, and to add it back on all returned paths.

  function toEditorPath(str) {
    // We add the `zip:` prefix to both `.zip/` paths and virtual paths
    if (isAbsolute(str) && !str.match(/^\^?(zip:|\/zip\/)/) && (str.match(/\.zip\//) || isVirtual(str))) {
      // We also take the opportunity to turn virtual paths into physical ones;
      // this makes it much easier to work with workspaces that list peer
      // dependencies, since otherwise Ctrl+Click would bring us to the virtual
      // file instances instead of the real ones.
      //
      // We only do this to modules owned by the the dependency tree roots.
      // This avoids breaking the resolution when jumping inside a vendor
      // with peer dep (otherwise jumping into react-dom would show resolution
      // errors on react).
      //
      const resolved = isVirtual(str) ? pnpApi.resolveVirtual(str) : str;
      if (resolved) {
        const locator = pnpApi.findPackageLocator(resolved);
        if (locator && (dependencyTreeRoots.has(`${locator.name}@${locator.reference}`) || isPortal(locator.reference))) {
          str = resolved;
        }
      }

      str = normalize(str);

      if (str.match(/\.zip\//)) {
        switch (hostInfo) {
          // Absolute VSCode `Uri.fsPath`s need to start with a slash.
          // VSCode only adds it automatically for supported schemes,
          // so we have to do it manually for the `zip` scheme.
          // The path needs to start with a caret otherwise VSCode doesn't handle the protocol
          //
          // Ref: https://github.com/microsoft/vscode/issues/105014#issuecomment-686760910
          //
          // 2021-10-08: VSCode changed the format in 1.61.
          // Before | ^zip:/c:/foo/bar.zip/package.json
          // After  | ^/zip//c:/foo/bar.zip/package.json
          //
          // 2022-04-06: VSCode changed the format in 1.66.
          // Before | ^/zip//c:/foo/bar.zip/package.json
          // After  | ^/zip/c:/foo/bar.zip/package.json
          //
          // 2022-05-06: VSCode changed the format in 1.68
          // Before | ^/zip/c:/foo/bar.zip/package.json
          // After  | ^/zip//c:/foo/bar.zip/package.json
          //
          case `vscode <1.61`: {
            str = `^zip:${str}`;
          } break;

          case `vscode <1.66`: {
            str = `^/zip/${str}`;
          } break;

          case `vscode <1.68`: {
            str = `^/zip${str}`;
          } break;

          case `vscode`: {
            str = `^/zip/${str}`;
          } break;

          // To make "go to definition" work,
          // We have to resolve the actual file system path from virtual path
          // and convert scheme to supported by [vim-rzip](https://github.com/lbrayner/vim-rzip)
          case `coc-nvim`: {
            str = normalize(resolved).replace(/\.zip\//, `.zip::`);
            str = resolve(`zipfile:${str}`);
          } break;

          // Support neovim native LSP and [typescript-language-server](https://github.com/theia-ide/typescript-language-server)
          // We have to resolve the actual file system path from virtual path,
          // everything else is up to neovim
          case `neovim`: {
            str = normalize(resolved).replace(/\.zip\//, `.zip::`);
            str = `zipfile://${str}`;
          } break;

          default: {
            str = `zip:${str}`;
          } break;
        }
      } else {
        str = str.replace(/^\/?/, process.platform === `win32` ? `` : `/`);
      }
    }

    return str;
  }

  function fromEditorPath(str) {
    switch (hostInfo) {
      case `coc-nvim`: {
        str = str.replace(/\.zip::/, `.zip/`);
        // The path for coc-nvim is in format of /<pwd>/zipfile:/<pwd>/.yarn/...
        // So in order to convert it back, we use .* to match all the thing
        // before `zipfile:`
        return process.platform === `win32`
          ? str.replace(/^.*zipfile:\//, ``)
          : str.replace(/^.*zipfile:/, ``);
      } break;

      case `neovim`: {
        str = str.replace(/\.zip::/, `.zip/`);
        // The path for neovim is in format of zipfile:///<pwd>/.yarn/...
        return str.replace(/^zipfile:\/\//, ``);
      } break;

      case `vscode`:
      default: {
        return str.replace(/^\^?(zip:|\/zip(\/ts-nul-authority)?)\/+/, process.platform === `win32` ? `` : `/`)
      } break;
    }
  }

  // Force enable 'allowLocalPluginLoads'
  // TypeScript tries to resolve plugins using a path relative to itself
  // which doesn't work when using the global cache
  // https://github.com/microsoft/TypeScript/blob/1b57a0395e0bff191581c9606aab92832001de62/src/server/project.ts#L2238
  // VSCode doesn't want to enable 'allowLocalPluginLoads' due to security concerns but
  // TypeScript already does local loads and if this code is running the user trusts the workspace
  // https://github.com/microsoft/vscode/issues/45856
  const ConfiguredProject = tsserver.server.ConfiguredProject;
  const {enablePluginsWithOptions: originalEnablePluginsWithOptions} = ConfiguredProject.prototype;
  ConfiguredProject.prototype.enablePluginsWithOptions = function() {
    this.projectService.allowLocalPluginLoads = true;
    return originalEnablePluginsWithOptions.apply(this, arguments);
  };

  // And here is the point where we hijack the VSCode <-> TS communications
  // by adding ourselves in the middle. We locate everything that looks
  // like an absolute path of ours and normalize it.

  const Session = tsserver.server.Session;
  const {onMessage: originalOnMessage, send: originalSend} = Session.prototype;
  let hostInfo = `unknown`;

  Object.assign(Session.prototype, {
    onMessage(/** @type {string | object} */ message) {
      const isStringMessage = typeof message === 'string';
      const parsedMessage = isStringMessage ? JSON.parse(message) : message;

      if (
        parsedMessage != null &&
        typeof parsedMessage === `object` &&
        parsedMessage.arguments &&
        typeof parsedMessage.arguments.hostInfo === `string`
      ) {
        hostInfo = parsedMessage.arguments.hostInfo;
        if (hostInfo === `vscode` && process.env.VSCODE_IPC_HOOK) {
          const [, major, minor] = (process.env.VSCODE_IPC_HOOK.match(
            // The RegExp from https://semver.org/ but without the caret at the start
            /(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
          ) ?? []).map(Number)

          if (major === 1) {
            if (minor < 61) {
              hostInfo += ` <1.61`;
            } else if (minor < 66) {
              hostInfo += ` <1.66`;
            } else if (minor < 68) {
              hostInfo += ` <1.68`;
            }
          }
        }
      }

      const processedMessageJSON = JSON.stringify(parsedMessage, (key, value) => {
        return typeof value === 'string' ? fromEditorPath(value) : value;
      });

      return originalOnMessage.call(
        this,
        isStringMessage ? processedMessageJSON : JSON.parse(processedMessageJSON)
      );
    },

    send(/** @type {any} */ msg) {
      return originalSend.call(this, JSON.parse(JSON.stringify(msg, (key, value) => {
        return typeof value === `string` ? toEditorPath(value) : value;
      })));
    }
  });

  return tsserver;
};

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require typescript/lib/tsserverlibrary.js
    require(absPnpApiPath).setup();
  }
}

// Defer to the real typescript/lib/tsserverlibrary.js your application uses
module.exports = moduleWrapper(absRequire(`typescript/lib/tsserverlibrary.js`));

```

# .yarn/sdks/typescript/lib/tsserver.js

```js
#!/usr/bin/env node

const {existsSync} = require(`fs`);
const {createRequire} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = createRequire(absPnpApiPath);

const moduleWrapper = tsserver => {
  if (!process.versions.pnp) {
    return tsserver;
  }

  const {isAbsolute} = require(`path`);
  const pnpApi = require(`pnpapi`);

  const isVirtual = str => str.match(/\/(\$\$virtual|__virtual__)\//);
  const isPortal = str => str.startsWith("portal:/");
  const normalize = str => str.replace(/\\/g, `/`).replace(/^\/?/, `/`);

  const dependencyTreeRoots = new Set(pnpApi.getDependencyTreeRoots().map(locator => {
    return `${locator.name}@${locator.reference}`;
  }));

  // VSCode sends the zip paths to TS using the "zip://" prefix, that TS
  // doesn't understand. This layer makes sure to remove the protocol
  // before forwarding it to TS, and to add it back on all returned paths.

  function toEditorPath(str) {
    // We add the `zip:` prefix to both `.zip/` paths and virtual paths
    if (isAbsolute(str) && !str.match(/^\^?(zip:|\/zip\/)/) && (str.match(/\.zip\//) || isVirtual(str))) {
      // We also take the opportunity to turn virtual paths into physical ones;
      // this makes it much easier to work with workspaces that list peer
      // dependencies, since otherwise Ctrl+Click would bring us to the virtual
      // file instances instead of the real ones.
      //
      // We only do this to modules owned by the the dependency tree roots.
      // This avoids breaking the resolution when jumping inside a vendor
      // with peer dep (otherwise jumping into react-dom would show resolution
      // errors on react).
      //
      const resolved = isVirtual(str) ? pnpApi.resolveVirtual(str) : str;
      if (resolved) {
        const locator = pnpApi.findPackageLocator(resolved);
        if (locator && (dependencyTreeRoots.has(`${locator.name}@${locator.reference}`) || isPortal(locator.reference))) {
          str = resolved;
        }
      }

      str = normalize(str);

      if (str.match(/\.zip\//)) {
        switch (hostInfo) {
          // Absolute VSCode `Uri.fsPath`s need to start with a slash.
          // VSCode only adds it automatically for supported schemes,
          // so we have to do it manually for the `zip` scheme.
          // The path needs to start with a caret otherwise VSCode doesn't handle the protocol
          //
          // Ref: https://github.com/microsoft/vscode/issues/105014#issuecomment-686760910
          //
          // 2021-10-08: VSCode changed the format in 1.61.
          // Before | ^zip:/c:/foo/bar.zip/package.json
          // After  | ^/zip//c:/foo/bar.zip/package.json
          //
          // 2022-04-06: VSCode changed the format in 1.66.
          // Before | ^/zip//c:/foo/bar.zip/package.json
          // After  | ^/zip/c:/foo/bar.zip/package.json
          //
          // 2022-05-06: VSCode changed the format in 1.68
          // Before | ^/zip/c:/foo/bar.zip/package.json
          // After  | ^/zip//c:/foo/bar.zip/package.json
          //
          case `vscode <1.61`: {
            str = `^zip:${str}`;
          } break;

          case `vscode <1.66`: {
            str = `^/zip/${str}`;
          } break;

          case `vscode <1.68`: {
            str = `^/zip${str}`;
          } break;

          case `vscode`: {
            str = `^/zip/${str}`;
          } break;

          // To make "go to definition" work,
          // We have to resolve the actual file system path from virtual path
          // and convert scheme to supported by [vim-rzip](https://github.com/lbrayner/vim-rzip)
          case `coc-nvim`: {
            str = normalize(resolved).replace(/\.zip\//, `.zip::`);
            str = resolve(`zipfile:${str}`);
          } break;

          // Support neovim native LSP and [typescript-language-server](https://github.com/theia-ide/typescript-language-server)
          // We have to resolve the actual file system path from virtual path,
          // everything else is up to neovim
          case `neovim`: {
            str = normalize(resolved).replace(/\.zip\//, `.zip::`);
            str = `zipfile://${str}`;
          } break;

          default: {
            str = `zip:${str}`;
          } break;
        }
      } else {
        str = str.replace(/^\/?/, process.platform === `win32` ? `` : `/`);
      }
    }

    return str;
  }

  function fromEditorPath(str) {
    switch (hostInfo) {
      case `coc-nvim`: {
        str = str.replace(/\.zip::/, `.zip/`);
        // The path for coc-nvim is in format of /<pwd>/zipfile:/<pwd>/.yarn/...
        // So in order to convert it back, we use .* to match all the thing
        // before `zipfile:`
        return process.platform === `win32`
          ? str.replace(/^.*zipfile:\//, ``)
          : str.replace(/^.*zipfile:/, ``);
      } break;

      case `neovim`: {
        str = str.replace(/\.zip::/, `.zip/`);
        // The path for neovim is in format of zipfile:///<pwd>/.yarn/...
        return str.replace(/^zipfile:\/\//, ``);
      } break;

      case `vscode`:
      default: {
        return str.replace(/^\^?(zip:|\/zip(\/ts-nul-authority)?)\/+/, process.platform === `win32` ? `` : `/`)
      } break;
    }
  }

  // Force enable 'allowLocalPluginLoads'
  // TypeScript tries to resolve plugins using a path relative to itself
  // which doesn't work when using the global cache
  // https://github.com/microsoft/TypeScript/blob/1b57a0395e0bff191581c9606aab92832001de62/src/server/project.ts#L2238
  // VSCode doesn't want to enable 'allowLocalPluginLoads' due to security concerns but
  // TypeScript already does local loads and if this code is running the user trusts the workspace
  // https://github.com/microsoft/vscode/issues/45856
  const ConfiguredProject = tsserver.server.ConfiguredProject;
  const {enablePluginsWithOptions: originalEnablePluginsWithOptions} = ConfiguredProject.prototype;
  ConfiguredProject.prototype.enablePluginsWithOptions = function() {
    this.projectService.allowLocalPluginLoads = true;
    return originalEnablePluginsWithOptions.apply(this, arguments);
  };

  // And here is the point where we hijack the VSCode <-> TS communications
  // by adding ourselves in the middle. We locate everything that looks
  // like an absolute path of ours and normalize it.

  const Session = tsserver.server.Session;
  const {onMessage: originalOnMessage, send: originalSend} = Session.prototype;
  let hostInfo = `unknown`;

  Object.assign(Session.prototype, {
    onMessage(/** @type {string | object} */ message) {
      const isStringMessage = typeof message === 'string';
      const parsedMessage = isStringMessage ? JSON.parse(message) : message;

      if (
        parsedMessage != null &&
        typeof parsedMessage === `object` &&
        parsedMessage.arguments &&
        typeof parsedMessage.arguments.hostInfo === `string`
      ) {
        hostInfo = parsedMessage.arguments.hostInfo;
        if (hostInfo === `vscode` && process.env.VSCODE_IPC_HOOK) {
          const [, major, minor] = (process.env.VSCODE_IPC_HOOK.match(
            // The RegExp from https://semver.org/ but without the caret at the start
            /(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
          ) ?? []).map(Number)

          if (major === 1) {
            if (minor < 61) {
              hostInfo += ` <1.61`;
            } else if (minor < 66) {
              hostInfo += ` <1.66`;
            } else if (minor < 68) {
              hostInfo += ` <1.68`;
            }
          }
        }
      }

      const processedMessageJSON = JSON.stringify(parsedMessage, (key, value) => {
        return typeof value === 'string' ? fromEditorPath(value) : value;
      });

      return originalOnMessage.call(
        this,
        isStringMessage ? processedMessageJSON : JSON.parse(processedMessageJSON)
      );
    },

    send(/** @type {any} */ msg) {
      return originalSend.call(this, JSON.parse(JSON.stringify(msg, (key, value) => {
        return typeof value === `string` ? toEditorPath(value) : value;
      })));
    }
  });

  return tsserver;
};

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require typescript/lib/tsserver.js
    require(absPnpApiPath).setup();
  }
}

// Defer to the real typescript/lib/tsserver.js your application uses
module.exports = moduleWrapper(absRequire(`typescript/lib/tsserver.js`));

```

# .yarn/sdks/typescript/lib/tsc.js

```js
#!/usr/bin/env node

const {existsSync} = require(`fs`);
const {createRequire} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = createRequire(absPnpApiPath);

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require typescript/lib/tsc.js
    require(absPnpApiPath).setup();
  }
}

// Defer to the real typescript/lib/tsc.js your application uses
module.exports = absRequire(`typescript/lib/tsc.js`);

```

# .yarn/sdks/eslint/lib/unsupported-api.js

```js
#!/usr/bin/env node

const {existsSync} = require(`fs`);
const {createRequire} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = createRequire(absPnpApiPath);

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require eslint/use-at-your-own-risk
    require(absPnpApiPath).setup();
  }
}

// Defer to the real eslint/use-at-your-own-risk your application uses
module.exports = absRequire(`eslint/use-at-your-own-risk`);

```

# .yarn/sdks/eslint/lib/api.js

```js
#!/usr/bin/env node

const {existsSync} = require(`fs`);
const {createRequire} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = createRequire(absPnpApiPath);

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require eslint
    require(absPnpApiPath).setup();
  }
}

// Defer to the real eslint your application uses
module.exports = absRequire(`eslint`);

```

