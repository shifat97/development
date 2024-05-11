function loadDataFromDB() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => showDataToUser(data))
}

const showDataToUser = data => {
    const processData = data.slice(0, 10);
    const container = document.getElementById('container-id');

    for (const img of processData) {
        const imgContainer = `
        <div class="img-container">
            <div>
                <img height="300" src="${img.url}" alt="">
            </div>
            <div class="img-title">
                <h1>${img.title}</h1>
            </div>
        </div>
        `
        container.insertAdjacentHTML('beforeend', imgContainer);
    }
}