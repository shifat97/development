// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// xhr.onreadystatechange = function (e) {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(xhr.response);
//         } else {
//             console.log(xhr.status);
//         }
//     }
// }

// xhr.send();

function getRequest (url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.response);
                callback(null, response);
            } else {
                callback(xhr.status, null);
            }
        }
    }

    xhr.send();
}

getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res);
    }
})

getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if(err) {
        console.log(err);
    } else {
        res.forEach (r => console.log(r.title));
    }
})