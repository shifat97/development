function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        const demo = document.getElementById('demo');
        demo.innerHTML = xhr.response;
    }

    xhr.open('GET', '../html/data/data.txt');

    xhr.send();
}