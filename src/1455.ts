// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence

function isPrefixOfWord(sentence: string, searchWord: string): number {
    const ss = sentence.split(/\s/);
    const n = ss.length;
    for (let i = 0; i < n; i++) {
        if (ss[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
}