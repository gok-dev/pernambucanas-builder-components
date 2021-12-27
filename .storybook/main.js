module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx|)', '../src/components/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
