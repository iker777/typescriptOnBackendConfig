# Start a server with TypeScript
1. Install dependencies:
  * npm i --save-dev @types/express This package contains type definitions for [Express](http://expressjs.com).
  * npm i --save-dev @types/node -> node.js for typescript
  * npm i --save-dev tsc-watch -> tsc-watch starts a TypeScript compiler with --watch parameter, with the ability to react to compilation status. tsc-watch was created to allow an easy dev process with TypeScript. Commonly used to restart a node server, similar to nodemon but for TypeScript. We will use it for the script npm run dev
    * Be careful, in typescript you have to download typescript modules!
  * npm i express -> You also need NOT DEV DEPENDENCIES when it is compiled
2. Create typescript file: index.ts
3. Generate tsconfig.json: tsc --init
4. Create npm run build script in package.json -> "build": "tsc", 
  * Only once, you generate ./dist/index.js -> this file is gonna be read by node.js
  * Be careful, if you don't configurate tsconfig.json, file is gonna be generated in root. 
  * Change this line in tsconfig.json:
    * "outFile": "./", and change: "outFile": "./dist",
5. Create npm run dev script in package.json -> "dev": "tsc-watch --onSuccess 'node ./dist/index.js'"
  * This is the nodemon line but for typescript