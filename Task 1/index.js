const axios = require('axios');
const xlsx = require('xlsx');

const url = 'https://go.microsoft.com/fwlink/?LinkID=521962';

const task1 = async () => {
    try {
        const response = await axios.get(url, {
            responseType: 'stream',
        });

        const chunks = [];
        response.data.on('data', (chunk) => chunks.push(chunk));
        response.data.on('end', () => {
            const buffer = Buffer.concat(chunks);

            const workbook = xlsx.read(buffer, { type: 'buffer' });
            const sheetName = workbook.SheetNames[0]; 
            const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]); 

            const cleanedData = sheetData.map(row => {
                const cleanedRow = {};
                Object.keys(row).forEach(key => {
                    const cleanedKey = key.trim(); 
                    cleanedRow[cleanedKey] = row[key]; 
                });

                return cleanedRow;
            });

            const filteredData = cleanedData.filter((row) => row.Sales > 50000);

            const newWorkbook = xlsx.utils.book_new();
            const newSheet = xlsx.utils.json_to_sheet(filteredData);
            xlsx.utils.book_append_sheet(newWorkbook, newSheet, 'Result');

            const outputFile = 'Result_Task1.xlsx';
            xlsx.writeFile(newWorkbook, outputFile);

            console.log(`The new file has been saved at: ${outputFile}`);
        });

        response.data.on('error', (err) => {
            console.error('Stream read error:', err);
        });
    } catch (e) {
        console.log(e.message);
    }
}

task1();