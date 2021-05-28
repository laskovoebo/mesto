const presets = [
    ['@babel/env', { // какой пресет использовать
        targets: { // какие версии браузеров поддерживать
            chrome: '90',
        },

        // использовать полифиллы для браузеров из свойства target
        // по умолчанию babel использует поллифиллы библиотеки core-js
        useBuiltIns: "entry"
    }]
];

module.exports = { presets };