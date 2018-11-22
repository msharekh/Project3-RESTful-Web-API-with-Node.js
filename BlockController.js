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
            

            // this.initializeMockData();

            // this.blocks[blockheight];

            // console.log(`getBlockByBlockheight req blockheight= ${blockheight}`);
            

            let bc = new BlockChainClass.BlockChain();

            var obj =bc.getBlock(blockheight).then((b) => {
                        c(JSON.parse(b))
                        res.send(JSON.parse(b));
            })
 
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