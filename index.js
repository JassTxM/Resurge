import dns from 'dns';
import 'dotenv/config';
import connectDB from './config/db.js';
import app from './app.js';

dns.setServers(['8.8.8.8', '8.8.4.4']);
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));