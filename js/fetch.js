const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch
//     .then(response => response.json())
//     .then(json => console.log(json))
function loadData() {

    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))

}