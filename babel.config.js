const plugins = [
    [
        'module-resolver',
        {
            root: ['./src'],
            extensions: [
                '.ios.ts',
                '.android.ts',
                '.ts',
                '.ios.tsx',
                '.android.tsx',
                '.tsx',
                '.jsx',
                '.js',
                '.json'
            ],
            alias: {
                api: './src/api',
                utils: './src/utils',
                helpers: './src/helpers',
                components: './src/components',
                containers: './src/containers',
                reduxStore: './src/redux-store'
            }
        }
    ]
]

const presets = ['module:metro-react-native-babel-preset']

module.exports = {
    presets,
    plugins
}
