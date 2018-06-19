/**
 * The function of checking expressions for the correct arrangement of characters, for example {}, [], ()
 * @param {string} expression - verified expression.
 */

function expressionCheck(expression) {
    const symbolsArray = expression.split('');
    const filteredSymbols = symbolsArray.filter(symbol => ['(', ')', '[', ']', '{', '}'].includes(symbol));
    const symbolsLength = filteredSymbols.length;

    if (!symbolsLength) return true;

    if (symbolsLength % 2 !== 0) return false;

    const couples = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);
    const arr1 = filteredSymbols.splice(0, symbolsLength / 2);
    const arr2 = filteredSymbols.reverse();

    return arr1.every(symbol => couples.get(symbol) === arr2[arr1.indexOf(symbol)]);
}
