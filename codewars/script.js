function moveZeros(text) {
    var arr = text.split(' ');
    arr = arr.map(function (word) {
        if (word.length >= 5) {
            console.log(word);
            word = word.split('').reverse().join('');
            console.log(word);
            return word;
        }
        return word;
    });
    //console.log(arr.join(' '));
    return arr.join(' ');
}
moveZeros('This is another test');
