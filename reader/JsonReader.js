import path from 'path';
import fs from 'fs';

export class JsonReader
{

    static async readJsonValue(jsonFileName)
    {

        const filePath = path.join(__dirname, `../testdata/${jsonFileName}.json`);

        const rawTestData = fs.readFileSync(filePath);

        return JSON.parse(rawTestData);

    }

}