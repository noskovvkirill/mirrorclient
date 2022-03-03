import { Thunder } from 'zeus'

const thunder = Thunder(async (query) => {
    const response = await fetch('https://mirror-api.com/graphql', {
        body: JSON.stringify({ query }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        return new Promise((_, reject) => {
            response
                .text()
                .then((text) => {
                    try {
                        reject(JSON.parse(text));
                    } catch (err) {
                        reject(text);
                    }
                })
                .catch(reject);
        });
    }

    const json = await response.json();

    return json.data;
});

export default thunder;