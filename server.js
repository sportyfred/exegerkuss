const express = require('express');

const crawler = require('crawler-request');
const pdf = require('pdf-parse');

const app = express();
const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
app.get('/', (req, res) => {
 res.render('index')
});

app.set('view engine', 'pug');

 
crawler("http://share.paretosec.com/upload/files/OTC_prices_web.pdf").then(function(response){
    // handle response

    pdf(response).then(function(data) {
 
    // number of pages
   
  
    // PDF text
    console.log(data.text); 
    
        
});
    
});




 
