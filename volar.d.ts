declare module "vue" {
  export interface GlobalComponents {
    ZButton: typeof import('zeal-ui')['ZButton'];
  }
}
export {}
