module.exports = {
    input: [
        'resources/js/**/*.js',
        'resources/js/**/*.jsx',
        // Include other file patterns as needed

        // Use ! to filter out files or directories
        "!resources/js/**/*.spec.{js,jsx}",
        "!resources/js/i18n/**",
        "!**/node_modules/**",
    ],
    output: './',
    options: {
        debug: true,
        func: {
            list: ['i18next.t', 'i18n.t', 't'],
            extensions: ['.js', '.jsx'],
        },
        trans: {
            component: 'Trans',
            i18nKey: 'i18nKey',
            defaultsKey: 'defaults',
            extensions: [],
            fallbackKey: function (ns, value) {
                return value;
            },
        },
        lngs: ['en', 'tg'], // Specify your languages here
        ns: [
            'translation',
        ],
        defaultLng: 'en',
        defaultNs: 'translation',
        defaultValue: (lng, ns, key) => {
            return key; // Use the key as the default value
        },
        resource: {
            loadPath: 'resources/js/locales/{{lng}}/{{ns}}.json',
            savePath: 'resources/js/locales/{{lng}}/{{ns}}.json', // Or another path as needed
            jsonIndent: 2,
        },
        nsSeparator: false, // Namespace separator
        keySeparator: false, // Key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}',
        },
    },
};
