import thunder from 'src/fetcher'

const fetcher = (digest: string) => {
    return thunder('query')({
        entry: [{
            digest: digest
        }, {
            body: true,
            title: true,
            entryId: true,
            publishedAtTimestamp: true,
            canonicalUrl: true,
            timestamp: true,
            featuredImage: {
                mimetype: true,
                url: true
            },
            publisher: {
                project: {
                    address: true,
                    displayName: true,
                    avatarURL: true,
                    domain: true,
                    ens: true,
                    theme: {
                        accent: true
                    }
                },
                member: {
                    address: true,
                    ens: true,
                    displayName: true,
                    avatarURL: true,
                    domain: true

                }
            },
            collaborators: {
                address: true,
                displayName: true,
                avatarURL: true,
                domain: true,
                ens: true,
            }
        },
        ],
    }
    )
}

export default fetcher