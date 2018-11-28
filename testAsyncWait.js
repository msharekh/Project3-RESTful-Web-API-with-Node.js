function resolveAfter2Seconds() { //-------function getBlock(blockheight)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {//-------getBlock()
    console.log('calling');
    
    var result = await resolveAfter2Seconds();      //<--------calling promise //-------bc.getBlock(blockheight)
    console.log('show result');
    console.log(result);
    // expected output: 'resolved'

    
  }

  console.log('start');
  
  asyncCall();

  console.log('waiting');
