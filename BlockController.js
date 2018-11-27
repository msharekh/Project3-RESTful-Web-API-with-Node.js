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
        this.app.get("/block/:blockheight", (req, res) => {
            // Add your code here
            var blockheight=req.params.blockheight;
            

            // this.initializeMockData();

            // this.blocks[blockheight];

            console.log(`\n\n*** getBlockByBlockheight req blockheight= ${blockheight} ***`);
            
            // try {
                
            // } catch (error) {
                
            // }
            
 
 
            let bc = new BlockChainClass.BlockChain();

            var obj =bc.getBlock(blockheight).then((b) => {
                        c(JSON.parse(b))
                        res.send(JSON.parse(b));
            }).catch(err => {
                console.log('failed ', err); // { error: 'url missing in async task 2' }
                res.send(err);
            });
 
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/block", (req, res) => {
           
            // var blockbody=JSON.parse(req);
            
            // var obj={
                //     type:"POST",
                //     hash:req.body.hash,
                //     height:req.body.height,
                //     body:req.body.body,
                //     time:req.body.time,
                //     previousBlockHash:req.body.previousBlockHash
                // };
                
            console.log(`\n\n*** postNewBlock \t {BlockData} ***`);
            console.log(req.body);

            if (req.body.title!='') {
                let bc = new BlockChainClass.BlockChain();
            
                bc.addBlock(new BlockClass.Block(req.body.title)).then((result) => {
                    // console.log('The response after adding should contain that block.js ');
                     res.send(result);
                }).catch(e => console.error(`.addBlock catch(${e})`)) ;
            } else {
                res.send('Wrong entry, please enter again');
            }

           



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