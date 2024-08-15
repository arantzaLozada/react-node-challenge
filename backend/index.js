import { app } from './app.js';
import { connectDB } from './db.js';
import { PORT } from './config.js';

connectDB();

import http from 'http';

const server = http.createServer(app);

server.listen(PORT, () => console.log('Server on port', PORT));
