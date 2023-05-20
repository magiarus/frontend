const getDataAsync = async () => {
    const result = fetch ("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    });
}
getDataAsync()