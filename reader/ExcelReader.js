import XLSX from 'xlsx';
import path from 'path';

export class ExcelReader
{

    static readFile(fileName, sheetName)
    {
        const filePath = path.join(__dirname, `../testdata/${fileName}.xlsx`);

        const workbook = XLSX.readFile(filePath);

        const loadedSheet = workbook.Sheets[sheetName];

        const jsonTestData = XLSX.utils.sheet_to_json(loadedSheet);

        return jsonTestData;
    }

}