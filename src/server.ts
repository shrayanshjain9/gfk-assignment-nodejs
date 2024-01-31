import express from 'express'; 
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import postRoutes from './routes/postRoutes';

const app = express();
const HTTP_PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', postRoutes);

app.listen(HTTP_PORT, () => {
  console.log(`Server running on http://localhost:${HTTP_PORT}/`);
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

export default app;
