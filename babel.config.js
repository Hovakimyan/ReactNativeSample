const plugins = [
    [
        'babel-plugin-module-resolver',
        {
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
