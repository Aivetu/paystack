const app = require('./app');
// const mongoose = require('mongoose');

const PORT = process.env.PORT || 8092;





app.listen(PORT, () => console.log(`Application is running on ${PORT}`));
 