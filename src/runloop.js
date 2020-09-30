function runloop() { 
  
  something()
  
  return 1;
}

function something() {
  do{
    something()
  }while(true)

module.exports = runloop
