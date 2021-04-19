const fs = require('fs');
const fetch = require('node-fetch');

// fetching the text data from an api
const fetchedData = fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.text())
   
    .then(fetchedData => {

        const folder = 'result';

        // creating a folder called "result" and to check if the folder exist. IF it does, this should throw up an error
        fs.mkdir(folder, (err) => {
            if (err) throw err;
            console.log('Folder created successfully');
        });

        // This is to write the new file as 'posts.txt' that was fetched to my local machine in the folder named 'result'
        fs.writeFile('./result/posts.txt', fetchedData, err => {
            if (err) throw err;
            console.log('file created successfully');
        })
    })
    

    
