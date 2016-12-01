# Entry points
Webpack configuration with multiple entry points.

## webpack configuration
### `context` | [doc](https://webpack.js.org/configuration/entry-context/#context)
The base directory, an absolute path, for resolving entry points and loaders from configuration.

### `entry` | [doc](https://webpack.js.org/configuration/entry-context/#entry)
The point or points to enter the application. 

A dynamically loaded module is not an entry point.
 
Simple rule: 
- one entry point per HTML page. 
- SPA: one entry point, 
- MPA: multiple entry points.
  
Examples:
```js    
entry: "./app/entry", // string | object | array
entry: ["./app/entry1", "./app/entry2"],
entry: {
    a: "./app/entry-a",
    b: ["./app/entry-b1", "./app/entry-b2"]
}
```

## Instalation
```
npm install
```
## Build
```
npm run build
```
## Run
```
npm run start
```
