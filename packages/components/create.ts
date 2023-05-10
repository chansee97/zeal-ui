import type { App, DefineComponent } from 'vue'

type Components = DefineComponent<Record<string, unknown>, Record<string, unknown>, any>[]

export function buildInstall(components: Components = []) {
  return function install(app: App) {
    const prefix = 'Z'

    components.forEach((component) => {
      app.component(`${prefix}${component.name}`, component)
    })
  }
}
