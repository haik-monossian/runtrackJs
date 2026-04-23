document.getElementById('update').addEventListener('click', () => {
    fetch('utilisateur.json')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#user-table tbody');
            tbody.innerHTML = '';

            data.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erreur:', error));
});
