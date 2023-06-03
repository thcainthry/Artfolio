// Middleware function
const myMiddleware = (req, res, next) => {
    // Perform some operations before passing control to the next middleware
    console.log('Executing myMiddleware');
    
    // Modify the request object
    req.customProperty = 'Hello, middleware!';
    
    // Continue to the next middleware
    next();
  };
  
  // Example route handler
  const handleRequest = (req, res) => {
    // Access the custom property set by the middleware
    console.log(req.customProperty);
    
    // Send a response
    res.send('Hello, world!');
  };
  
  // Express.js example
  const express = require("express");
  const app = express();
  
  // Apply the middleware to all routes
  app.use(myMiddleware);
  
  // Route handling
  app.get('/', handleRequest);
  
  // Start the server
  app.listen(3001, () => {
    console.log('Server listening on port 3001');
  });
  