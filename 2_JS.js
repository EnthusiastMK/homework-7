// Завдання 2:
// Відфільтруйте анаграми
// Анаграми – це слова, які мають ті ж літери в тій самій кількості, але вони розташовуються в іншому порядку.
// nap - pan
// gold - logd
// ali - ila - lialet arr = ["nap", "gold", "ali", "ldog", "ApN", "flaw", "lia"];
// alert( anagramFilter(arr) ); // "nap,ali,gold" або "ApN,lia,ldog"
// З кожної групи анаграм має залишитися тільки одне слово, не важливо яке.

let arr = ["nap", "gold", "ali", "ldog", "ApN", "flaw", "lia"];

const anagramFilter = (arr) => {
    let map = new Map();

    for (let word of arr) {
        let sortAnagram = word.toLowerCase().split('').sort().join('');
        map.set(sortAnagram, word);
    }

    return Array.from(map.values());
};

alert(anagramFilter(arr));