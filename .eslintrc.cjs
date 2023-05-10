process.env.ESLINT_TSCONFIG = 'tsconfig.json'
module.exports = {
  extends: ['@chansee97/eslint-config-vue'],
  rules: {
    'vue/no-reserved-component-names': 'off',
  },
}
