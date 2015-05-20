# nstatic
A node server serving static files from "public" directory.

# Steps
1. Clone the project
2. npm install
3. node index.js <path to directory which you want to serve over HTTP>

Default port is 8080, you can change port using config

# Change default port
$> npm config set PORT <port to use>

Example
```
npm config set PORT 9090
