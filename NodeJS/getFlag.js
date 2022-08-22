function getFlag(flag) {
    indexOfFlag = process.argv.indexOf(flag)
    return process.argv[indexOfFlag + 1]
}

module.exports = getFlag