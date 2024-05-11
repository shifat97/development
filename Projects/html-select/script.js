document.getElementById('submit').addEventListener('click', function () {
    const cities = document.getElementById('city-list');
    getInnerText(cities);
})

const getInnerText = (cities) => {
    const container = document.getElementById('container');
    const li = document.createElement('li');
    li.innerText = cities.options[cities.selectedIndex].innerText;
    container.appendChild(li);
}

document.getElementById('fetch').addEventListener('click', async function() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const getData = await fetchData(url);
    console.log(getData);
})

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data;
}