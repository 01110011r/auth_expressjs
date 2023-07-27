import fs from "fs";
import path from "path";
export const readFile=(x)=>{
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), '/db', x)));
};
export const writeFile=(x, data)=>{
    return fs.writeFileSync(path.join(process.cwd(), '/db', x), JSON.stringify(data, null, 5));
};