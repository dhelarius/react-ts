import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import chalk from "chalk";
import express from 'express';
import configExpress from "./config/express";
import { loadModules } from './modules';

const PORT = process.env.API_PORT || 5000;
const app = express();

configExpress(app);

loadModules(app);

const server = app.listen(PORT, () => {
  if(app.get('env') === 'test') return;

  console.log(`🚀 Server started on port ${PORT} in ${process.env.NODE_ENV} mode`);

  console.log(`\n${chalk.green('→')}  local:  ${chalk.hex('#4895ef').bold('http://localhost:')}${chalk.hex('#6fffe9').bold(PORT)}${chalk.hex('#4895ef').bold('/greeting')}`);
});

server.on('close', () => {
  console.log('Closed express server');
});
