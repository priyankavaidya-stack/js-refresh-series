// why r we getting response data first then all previous promise execution later

// network based request
// fetch api creates its own queue for storing callbacks.
// It has more priority over task queue of callbacks.
// that's reason for executing first

// ************************************
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => {
    console.log(error);
})
