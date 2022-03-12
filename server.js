const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  return handler(request, response, {
   cleanUrls: true,
   public: "ttb",
   redirects: [
    { "source": "/home", "destination": "https://bakchod.net" },
    { "source": "/git", "destination": "https://github.com" }
  ],
  unlisted: [
    ".DS_Store",
    ".git"
  ],
});
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});