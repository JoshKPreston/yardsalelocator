{
  "name": "codeworks-auth-starter",
    "version": "1.0.0",
      "description": "",
        "main": "index.js",
          "scripts": {
    "debug": "node index.js",
      "start": "node index.js",
        "dev": "node index.js",
          "setup": "npm install",
            "sass": "sass --watch client/assets/scss/main.scss:client/assets/style/main.css"
  },
  "author": "Codeworks",
    "license": "ISC",
      "dependencies": {
    "@bcwdev/auth0provider": "^1.0.2",
      "cors": "^2.8.5",
        "dotenv": "^8.2.0",
          "esm": "^3.2.25",
            "express": "^4.17.1",
              "helmet": "^4.1.1",
                "lightpath": "0.0.5",
                  "mongoose": "^5.10.7",
                    "socket.io": "^2.3.0"
  },
  "engines": {
    "node": "^12.0.0",
      "npm": "^6.9.0"
  },
  "devDependencies": {
    "bootstrap": "^4.5.2",
      "babel-eslint": "^10.1.0",
        "eslint": "^7.12.1",
          "eslint-config-standard": "^16.0.1",
            "eslint-plugin-import": "^2.22.1",
              "eslint-plugin-node": "^11.1.0",
                "eslint-plugin-promise": "^4.2.1",
                  "eslint-plugin-standard": "^4.0.2",
                    "sass": "^1.26.10"
  }
}
