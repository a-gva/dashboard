module.exports = {
    ci: {
        collect: {
            url: ['http://dashboard-pgyg7blro-a-gva.vercel.app'], // replace with your URLs
            startServerCommand: 'npm run start', // replace with your server start command
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.5 }],
                'categories:accessibility': ['error', { minScore: 0.5 }],
                'categories:best-practices': ['error', { minScore: 0.5 }],
                'categories:seo': ['error', { minScore: 0.5 }],
                'categories:pwa': ['error', { minScore: 0.5 }],
                'first-contentful-paint': ['error', { maxNumericValue: 2000 }], // new FCP assertion
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};