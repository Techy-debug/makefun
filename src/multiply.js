function multiply(...args){
    return args.reduce((acc, cur) => acc * cur, 1)
}

module.exports = multiply;