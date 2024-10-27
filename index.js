const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/total-value', (req, res) => {
  const products = req.body;

 
  if (!Array.isArray(products)) {
    return res.status(400).json({ error: 'Invalid input, expected an array of products.' });
  }


  let totalValue = 0;

  for (const product of products) {
    const { name, price, quantity } = product;

   
    if (typeof price !== 'number' || typeof quantity !== 'number') {
      return res.status(400).json({ error: 'Each product must have a numeric price and quantity.' });
    }

    
    totalValue += price * quantity;
  }

  
  res.json({ totalValue });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
