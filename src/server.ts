import listEndpoints from 'express-list-endpoints';
import app from './app';

const PORT = process.env.PORT ?? 3000;

console.table(listEndpoints(app).map(({ methods, path }) => {
  return { methods, path };
}));

app.listen(PORT, () => console.log(`App is running on http//localhost:${PORT}`));
