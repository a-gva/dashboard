module.exports = {
    ci: {
        collect: {
            url: ['http://dashboard-pgyg7blro-a-gva.vercel.app'], // replace with your URLs
            startServerCommand: 'npm run start', // replace with your server start command
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.5 }], // 50% performance
                'categories:accessibility': ['error', { minScore: 0.5 }], // 50% accessibility
                // add more assertions as needed
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};