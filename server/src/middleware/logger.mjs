import express from "express";
const app = express();

// Custom middleware function
const myMiddleware = (req, res, next) => {
    // Perform any desired operations or verifications
    console.log('Executing myMiddleware');
    // Example: Logging the incoming request method and URL
    console.log(`Incoming Request: ${req.method} ${req.url}`);
  
    // Call the next middleware or route handler
    next();
  };
  
  // Apply the middleware to specific routes
  app.use('/dashboard', myMiddleware);
  app.use('/api/users', myMiddleware);
  
  // Route handlers
  app.get('/dashboard', (req, res) => {
    // Handle dashboard logic here
  });
  
  app.post('/api/users', (req, res) => {
    // Handle user creation logic here
  });
  
  // Start the server
  app.listen(3001, () => {
    console.log('Server listening on port 3001');
  });
  