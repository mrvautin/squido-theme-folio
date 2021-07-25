const config = {
    development: {
        name: 'sympl',
        description: 'Thoughts, stories and ideas.',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 4,
        dateFormat: 'dd MMM yyyy',
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    },
    production: {
        name: 'sympl',
        description: 'Thoughts, stories and ideas.',
        twitterHandle: '@mrvautin',
        baseUrl: 'https://blog.squido.org',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 4,
        dateFormat: 'dd MMM yyyy'
    }
};

module.exports = config;
