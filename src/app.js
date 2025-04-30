import express from 'express';
import cors from 'cors';

import 'dotenv/config';
import routes from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 2277;

app.use(cors());
app.use(express.json());

app.use('/api/v1', routes);

app.listen(PORT, () => {
    console.log(`🚀 Web server berjalan pada alamat: http://localhost:${PORT}`);
});

export default app;