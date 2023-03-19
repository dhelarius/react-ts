import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import env from '../config/env';

import chalk from "chalk";
import init from '../tools/express/Express';
import { load } from './modules';

const PORT = env.api.port || 5000;
const app = init();

load(app);

const server = app.listen(PORT, () => {
  if(app.get('env') === 'test') return;

  console.log(`🚀 Server started on port ${PORT} in ${process.env.NODE_ENV} mode`);

  console.log(`\n${chalk.green('→')}  local:  ${chalk.hex('#4895ef').bold('http://localhost:')}${chalk.hex('#6fffe9').bold(PORT)}${chalk.hex('#4895ef').bold('/greeting/backend')}`);
});

server.on('close', () => {
  console.log('Closed express server');
});
