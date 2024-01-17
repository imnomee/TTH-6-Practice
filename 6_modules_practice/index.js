// Import Express and set up the app
const express = require('express');
const app = express();
const homeRoutes = require('./routes');
const errors = require('./errorHandlers');
app.use(homeRoutes);

//Error handlers
app.use(errors.handle404);
app.use(errors.handleGlobal);

// Turn on Express server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
