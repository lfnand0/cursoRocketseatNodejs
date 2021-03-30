const getFlag = (flag) => {
    return (process.argv[process.argv.indexOf(flag) + 1]);
}
module.exports = getFlag;