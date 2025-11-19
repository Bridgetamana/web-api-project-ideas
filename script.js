const cardWrapper = document.getElementById("card-wrapper")

const url = "/data/web-api.json"

fetch(url)
    .then((response) => {
        if (!response.ok) {
            console.log(`HTTPS error ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        cardWrapper.innerHTML = '';
        data.forEach(api => {
            const card = createCard(api);
            cardWrapper.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error))

function createCard(api) {
    const card = document.createElement('a');
    card.className = 'single-card';
    card.href = `#${api.id || api.name.toLowerCase().replace(/\s+/g, '-')}`;

    card.innerHTML = `
        <div class="icon-wrapper">
             ${api.icon}
        </div>
        <div class="card-details">
            <h3>${api.name}</h3>
            <p>${api.description}</p>
        </div>
        <div class="card-labels">
            <span class="label">
                ${api.projects.length} project idea(s)
            </span>
        </div>
    `;

    return card;
}