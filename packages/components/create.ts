import type { App, DefineComponent } from 'vue'

type Components = DefineComponent<Record<string, unknown>, Record<string, unknown>, any>[]

interface localConfig {
  prefix?: string
}
export function buildInstall(components: Components = []) {
  return function install(app: App, config: localConfig = {}) {
    const {
      prefix = 'Z',
    } = config

    components.forEach((component) => {
      app.component(`${prefix}${component.name}`, component)
    })
  }
}
