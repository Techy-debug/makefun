function runloop() { 
  recursion()
  while(true){}
  
  return 1;
}

function recursion(){
  recursion() 
}

module.exports = runloop
