// static const
const port = 5000;

const app = require('./app'); // express imported from app.js 



// open server
const server = app.listen(port, () => {
    const date = new Date().toISOString();
    console.log(`Started server at ${date} on port ${port}`);
  });