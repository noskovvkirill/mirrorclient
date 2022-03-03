import thunder from 'src/fetcher'


const fetcher = (ensLabel: string) => {
    return thunder('query')({
        projectFeed: [{
            projectAddress: ensLabel,
            // limit: 10,
        }, {
            address: true,
            displayName: true,
            ens: true,
            avatarURL: true,
            description: true,
            theme: {
                accent: true
            },
            headerImage: {
                mimetype: true,
                url: true
            },
            domain: true,
            memberships: {
                address: true,
                ens: true,
                displayName: true,
                avatarURL: true,
                domain: true
            },
            members: {
                address: true,
                ens: true,
                displayName: true,
                avatarURL: true,
                domain: true
            },
            posts: {
                "...on entry": {
                    body: true,
                    title: true,
                    digest: true,
                    entryId: true,
                    publishedAtTimestamp: true,
                    canonicalUrl: true,
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
                },
                "...on crowdfund": {
                    id: true
                }
            }
            // posts: {
            // "...on entry": {
            //     body: true,
            //     title: true,
            //     entryId: true,
            //     publishedAtTimestamp: true,
            //     canonicalUrl: true,
            //     featuredImage: {
            //         mimetype: true,
            //         url: true
            // //     },
            //     publisher: {
            //         project: {
            //             address: true,
            //             displayName: true,
            //             avatarURL: true,
            //             domain: true,
            //             ens: true,
            //             theme: {
            //                 accent: true
            //             }
            //         },
            //         member: {
            //             address: true,
            //             ens: true,
            //             displayName: true,
            //             avatarURL: true,
            //             domain: true

            //         }
            //     },
            // },
            // "...on crowdfund": {

            // },

            // }
        }],
    }
    )
}

export default fetcher