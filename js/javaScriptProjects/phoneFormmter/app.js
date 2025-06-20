const input = document.querySelector('#phone')

function makestringInNumber(str) {
   return [...str].filter((l) => Number.isInteger(+l) && l !== ' ').join('');
}

function formatString(str) {
    const numStr = makestringInNumber(str)
    console.log(`+(${numStr.substring(0,3)})-${numStr.substring(3)}`);
    return numStr.length > 3 ? `+(${numStr.substring(0,3)})-${numStr.substring(3)}` : numStr
}
input.addEventListener('input', () => (input.value = formatString(input.value)))