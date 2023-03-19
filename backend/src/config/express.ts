import express, { Express } from "express";
import logger from "morgan";
import cors from "cors";

const env = process.env.NODE_ENV || 'development';

type Log = string | object;

export default function (app: Express) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    let log: Log = 'dev';
    if(env !== 'development') {
        log = {
            stream: {
                write: message => console.info(message)
            }
        }
    }

    if(env !== 'test') app.use(logger('combined', log));
}