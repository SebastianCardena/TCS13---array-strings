function countWords(phrase) {
    const words = phrase.split(' ');
    return words.length;
}

let phrase = 'La programación web es fundamental para el progreso';
alert(countWords(phrase)); // Output: 7
