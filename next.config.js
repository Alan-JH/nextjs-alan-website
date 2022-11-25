module.exports = {
    async redirects() {
        return [
            {
                source: '/photos',
                destination: '/photos/photos-landing',
                permanent: true,
            },
            {
                source: '/projects',
                destination: '/projects/projects-landing',
                permanent: true,
            },
            {
                source: '/notes',
                destination: '/notes/notes-landing',
                permanent: true,
            }
        ]
    }
}