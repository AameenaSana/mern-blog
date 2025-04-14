const express= require('express');
const cors=require('cors');
const app=express();

app.use(cors({
    origin: 'http://localhost:3000', // Your React app's URL
    methods: ['POST', 'OPTIONS']
  }));
app.use(express.json()); 

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    console.log('New user:', username);
    res.json({ message: 'Registration successful!' });
  });
 
  app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
  });
