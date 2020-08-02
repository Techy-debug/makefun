function removeDuplicate(arr){
    return arr.filter((v,i) => arr.indexOf(v) === i )
}

module.exports = removeDuplicate;