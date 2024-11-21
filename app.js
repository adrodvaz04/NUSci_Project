import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'
import router from './backend/routes/message.route.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bodyParser from 'body-parser';

const app = express();

// allow bridge between 3000 and 5000
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    allowedHeaders: ['Content-Type']
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use(cors())

app.use(helmet({
    crossOriginResourcePolicy: false,
}));

app.use(express.json())
app.use(bodyParser.urlEncoded({extended: false}));
app.use(bodyParser.json());
app.use("/", router);


// app.use('/styles', express.static(path.join(__dirname, 'styles')));

// // Serve static files from React
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// // Routes requests to React index.js
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirnmane, "../frontend/build", "index.js"))   
// });

const HOSTNAME = 'localhost'
const PORT = 5000

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
});