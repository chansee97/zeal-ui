import { buildInstall } from './create'
import { ZInput } from './input'
import { ZButton } from './button'
import { ZProgress } from './progress'

import '../style/index.scss'

export const components = [
  ZInput, ZButton, ZProgress,
]

export const zeal = buildInstall(components)
