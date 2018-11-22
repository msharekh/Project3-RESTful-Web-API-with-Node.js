const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./Block.js');
const BlockChainClass = require('./BlockChain.js');

function c(txt){
    console.log(txt);
}

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} app 
     */
    constructor(app) {
        this.app = app;
        this.blocks = [];
        this.initializeMockData();
        this.getBlockByIndex();
        this.postNewBlock();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.app.get("/api/block/:blockheight", (req, res) => {
            // Add your code here
            var blockheight=req.params.blockheight;
            

            this.initializeMockData();

            this.blocks[blockheight];

            // console.log(`getBlockByBlockheight req blockheight= ${blockheight}`);
            //Mock Data
            // var blocks = [];
            // let block_1 = {"height":"0","body":"Udacity Blockchain Developer", "time": 1538509789};
            // let block_2 = {"height":"1","body":"Udacity Blockchain Developer Rock!", "time": 1538509789};
            // let block_3 = {"hash":"ffaffeb2330a12397acc069791323783ef1a1c8aab17ccf2d6788cdab0360b90","height":1,"body":"Testing block with test string data","time":"1531764891","previousBlockHash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3"}
            // let block_4 = {"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3","height":0,"body":"First block in the chain - Genesis block","time":"1530311457","previousBlockHash":""}

            // blocks.push(block_1);
            // blocks.push(block_2);
            // blocks.push(block_3);
            // blocks.push(block_4);



            // let bc = new BlockChainClass.BlockChain();

            // bc.getBlock(blockheight).then((b) => {
            //             c(JSON.parse(b))
            // })
 
            var block=JSON.stringify(this.blocks[blockheight]);
            console.log(`getBlockByBlockheight res block= ${block}`);
            console.log(`getBlockByBlockheight res block= ${JSON.parse(block).body}`);
            
            res.send(block);


        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/api/block", (req, res) => {
            //  console.log('visiting postNewBlock req= '+req.body);
            //  console.log('visiting postNewBlock res= '+res);
            // Add your code here
            console.log(req.body);
            // var blockbody=JSON.parse(req);
            
            var obj={
                type:"POST",
                title:req.body.title,
                height:req.body.height
            };
            res.send(obj);

        });
    }

    /**
     * Help method to inizialized Mock dataset, adds 10 test blocks to the blocks array
     */
    initializeMockData() {
        if(this.blocks.length === 0){
            for (let index = 0; index < 10; index++) {
                let blockAux = new BlockClass.Block(`Test Data #${index}`);
                blockAux.height = index;
                blockAux.hash = SHA256(JSON.stringify(blockAux)).toString();
                this.blocks.push(blockAux);
            }
        }
    }

}

/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { 
    return new BlockController(app);
}