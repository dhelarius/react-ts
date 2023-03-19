import path from "path";
import env from "./env";

const defaults = {
    root: path.join(__dirname, '..')
}

export default Object.assign({}, defaults, env);
