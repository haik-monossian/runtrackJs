document.getElementById('get-quote').addEventListener('click', () => {
    const textEl = document.getElementById('text');
    const authorEl = document.getElementById('author');
    const loader = document.getElementById('loader');

    textEl.style.display = 'none';
    authorEl.style.display = 'none';
    loader.style.display = 'block';

    fetch('https://dummyjson.com/quotes/random') // J'utilise une autre api car l'autre ne marchait pas
        .then(response => response.json())
        .then(data => {
            textEl.textContent = `"${data.quote}"`;
            authorEl.textContent = `- ${data.author}`;

            loader.style.display = 'none';
            textEl.style.display = 'block';
            authorEl.style.display = 'block';
        })
        .catch(error => {
            console.error('Erreur:', error);
            textEl.textContent = "Impossible de charger la citation.";
            authorEl.textContent = "";
            loader.style.display = 'none';
            textEl.style.display = 'block';
        });
});
