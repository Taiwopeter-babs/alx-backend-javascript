module.exports = function divideFunction(numerator, denominator) {

    try {
        if (!denominator) {
            throw new Error('cannot divide by 0');
        }
        return numerator / denominator;
    } catch (error) {
        console.log(error);
    }
}