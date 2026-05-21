import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from './config/passport.js';
import { checkUser } from './middlewares/auth.js';

import authRoutes from './routes/authRoutes.js';
import atsRoutes from './routes/atsRoutes.js';
import interviewRoutes from './routes/interviewRoutes.js';
import viewRoutes from './routes/viewRoutes.js';
import supportRoutes from './routes/supportRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const __dirname = path.resolve();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(checkUser);

app.use('/', viewRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/ats', atsRoutes);
app.use('/api/interview', interviewRoutes);
app.use('/api/support', supportRoutes);
app.use('/dashboard', dashboardRoutes);

app.use((req, res) => res.status(404).render('pages/404'));

export default app;
