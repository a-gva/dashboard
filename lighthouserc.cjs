module.exports = {
    ci: {
        collect: {
            url: ['http://dashboard-pgyg7blro-a-gva.vercel.app'], // replace with your URLs
            startServerCommand: 'npm run start', // replace with your server start command
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.99 }],
                'categories:accessibility': ['error', { minScore: 0.99 }],
                'categories:best-practices': ['error', { minScore: 0.99 }],
                'categories:seo': ['error', { minScore: 0.99 }],
                'categories:pwa': ['error', { minScore: 0.99 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};