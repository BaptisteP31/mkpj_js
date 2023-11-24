import * as fs from 'fs';

export class Config {
    path : string;
    configFile : any;
    constructor() {
        this.path = './config.json';

        // Check if config file exists
        if(!fs.existsSync(this.path)) {
            fs.writeFileSync(this.path, JSON.stringify({}));
        }

        // Read config file
        this.configFile = JSON.parse(fs.readFileSync(this.path, 'utf8'));

    }
}