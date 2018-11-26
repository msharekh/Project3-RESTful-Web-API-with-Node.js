# Project3-RESTful-Web-API-with-Node.js

This project uses RESTful API and a Node.js framework that will interfaces with the private blockchain.


## (1) INSTALLING NPM AND REQUIRED LIBRARIES
- npm:            `npm install npm@latest -g`
- express:        `npm install express --save`
- body-parser:    `npm install body-parser --save`
- crypto-js:      `npm install crypto-js --save`
- level:          `npm install level --save`


to start application run this command:
```
node app.js
```

------------------------------------------------

## (2) ENDPOINTS
 
#### GET BLOCK:

To get block by height using POSTMAN

for example, when blockheight=0 to get block by height we use the following url:
(http://localhost:8000/api/block/0)
this will call this method     `getBlockByIndex()` 

if no block found it show this message:
     ```
     Block Height : 0 is Not found!
     ```
otherwise it will show the requested block as follows:
```
{
    "hash": "addea4c5f1d4ee880d5cc3fc0e36bede37655040b21d191e9ed13aa0c5f8d156",
    "height": 0,
    "body": "FIRST API Block - Genesis ***** GENESIS Block *****",
    "time": "1543252818",
    "previousBlockHash": ""
}
```
 
#### POST BLOCK:

Adding block using POSTMAN by calling url and posting JSON data
(http://localhost:8000/api/block)

for example, with following json data
```
{ 
  	"title": "FIRST API Block - Genesis"
}
```
this will call this method     `postNewBlock()` 

which will create the following block:
```
{
    "hash":"addea4c5f1d4ee880d5cc3fc0e36bede37655040b21d191e9ed13aa0c5f8d156",
    "height":0,
    "body":"FIRST API Block - Genesis ***** GENESIS Block *****",
    "time":"1543252818",
    "previousBlockHash":""
}
```
