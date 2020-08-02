function sumOf(...args){
    return args.reduce((acc, cur) => acc + cur, 0)
}


module.exports = sumOf;