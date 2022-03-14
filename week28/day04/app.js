 //// csv to json file
const csvtojson = require('csvtojson')
const fs = require('fs')


const csvfilepath = "simple.csv"

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json)

    fs.writeFileSync("output.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})


/// json to csvfile
const { create } = require('domain');
const {promises: fs} = require('fs');
const createcsvwriter = require('csv-writer').createObjectCsvWriter;
const csvwriter = createcsvwriter({
    path: './simple.csv',
    headerIdDelimiter: '.',
    header: ['name','are','subject'].map((item) => ({ id: item, title: item}))
})

async function main() {
    const file_data = await fs.readFile('output.json');
    const parsed_data = JSON.parse(file_data);

    try{
        await csvwriter.writeRecords(parsed_data);
    
    }catch (error) {
        console.log(error);
    }
}
main();

   
