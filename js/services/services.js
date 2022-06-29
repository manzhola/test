const postData = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await result.json();

};
const getResource = async (url) => {
    const result = await fetch(url, {
        origin: 'http://chi',
        method: 'GET',
        headers: {'Access-Control-Allow-Origin': '*'},
        mode: 'cors',
        cache: 'default'
      });

    if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status ${result.status}`);
    }

    return await result.json();
};

export {
    postData,
    getResource
};