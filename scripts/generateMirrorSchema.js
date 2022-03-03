const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const {
    buildClientSchema,
    getIntrospectionQuery,
    printSchema,
} = require('graphql/utilities');

fetch('https://mirror-api.com/graphql', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: getIntrospectionQuery(),
    }),
})
    .then(res => {
        return res.json()
    })
    .then(schemaJSON => {
        return printSchema(buildClientSchema(schemaJSON.data))
    })
    .then(clientSchema => {
        // console.log('client schema', clientSchema)
        try {
            fs.writeFileSync(
                path.join(__dirname, '.', 'schema.graphql'),
                clientSchema,
            )
        } catch (e) {
            console.log(e)
        }
    })
    .catch(err => console.error(err));