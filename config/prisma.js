import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/index.js';

const connectionString = process.env.DATABASE_URL;

// Render PostgreSQL requires SSL - add sslmode if not present
const connectionStringWithSSL = connectionString && !connectionString.includes('sslmode')
    ? `${connectionString}?sslmode=require`
    : connectionString;

const adapter = new PrismaPg({ connectionString: connectionStringWithSSL });

const prisma = new PrismaClient({ adapter });

export default prisma;
