import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

const app = express();

const PORT = 3000;

app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
