const HASHER = (raw) => {
    let hash = [];
    const split = raw.split("");
    split.forEach(character => {
        hash.push(character.charCodeAt(0));
    })
    return btoa(hash.join(''));
}

module.exports = { HASHER };