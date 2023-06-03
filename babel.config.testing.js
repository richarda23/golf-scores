module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current', // compile against the current node version
                },
            },
        ],
    ],
};
