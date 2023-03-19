import fs from "fs";
import { Express } from "express";

export function loadModules(app: Express) {
    fs.readdir('./src/app', function(err, files) {
        if (err) {
            console.error('Error read directory', err);
            return;
        }

        files.forEach(module => startModule(module, app));
    });
}

function startModule(module: string, app: Express) {
    const dir = `../app/${module}/router`;
    import(dir).then(result => {
        const module = result.default();
        const { root, router } = module;
        app.use(root, router);
    });
}