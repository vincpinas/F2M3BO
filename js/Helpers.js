export const postData = async(url, data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    
    return response.json();
}

export const statusTemps = {
    idle: { before: 75, after: 52},
    work: { before: 81, after: 60},
    gaming: { before: 95, after: 75}
}