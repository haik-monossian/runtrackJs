function compterVoyelles(phrase) {
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    let count = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (voyelles.includes(phrase[i])) {
            count++;
        }
    }
    console.log(`la phrase contient ${count} voyelles`);
    return count;
}

compterVoyelles("Hello World");
