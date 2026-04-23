document.getElementById('filtrer').addEventListener('click', () => {
    const idInput = document.getElementById('id').value.trim();
    const nameInput = document.getElementById('nom').value.trim().toLowerCase();
    const typeInput = document.getElementById('type').value;
    const resultsContainer = document.getElementById('results');

    resultsContainer.innerHTML = '';

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const filtered = data.filter(pokemon => {
                const matchId = idInput === '' || pokemon.id.toString() === idInput;
                
                const frenchName = pokemon.name.french ? pokemon.name.french.toLowerCase() : '';
                const englishName = pokemon.name.english ? pokemon.name.english.toLowerCase() : '';
                const matchName = nameInput === '' || frenchName.includes(nameInput) || englishName.includes(nameInput);
                
                const matchType = typeInput === '' || pokemon.type.includes(typeInput);

                return matchId && matchName && matchType;
            });

            filtered.forEach(pokemon => {
                const card = document.createElement('div');
                card.className = 'pokemon-card';
                
                const typesHtml = pokemon.type.map(t => `<span class="type-badge">${t}</span>`).join('');
                
                card.innerHTML = `
                    <div class="id">#${pokemon.id}</div>
                    <h3>${pokemon.name.french || pokemon.name.english}</h3>
                    <div class="types">${typesHtml}</div>
                `;
                resultsContainer.appendChild(card);
            });

            if (filtered.length === 0) {
                resultsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Aucun Pokémon trouvé.</p>';
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            resultsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">Erreur lors du chargement des données.</p>';
        });
});
