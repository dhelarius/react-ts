import fs from "fs";
import { Express } from "express";

export function load(app: Express) {
    fs.readdir('./src/routes', function(err, files) {
        if (err) {
            console.error('Error read directory', err);
            return;
        }

        files.forEach(module => startModule(module, app));
    });
}

function startModule(module: string, app: Express) {
    const dir = `../routes/${module}/controller`;
    import(dir).then(result => {
        const module = result.default();
        const { root, router } = module;
        app.use(root, router);
    });
}