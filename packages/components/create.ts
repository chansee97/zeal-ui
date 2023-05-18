import type { App } from 'vue'

interface Component {
  name: string
}

interface localConfig {
  prefix?: string
}
export function buildInstall(components: Component[] = []) {
  return function install(app: App, _config: localConfig = {}) {
    components.forEach((component) => {
      app.component(component.name, component)
    })
  }
}
