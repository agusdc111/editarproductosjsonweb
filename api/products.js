const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(process.cwd(), 'products.json');

  if (req.method === 'GET') {
    const data = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  } else if (req.method === 'POST') {
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
