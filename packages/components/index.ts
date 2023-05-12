import { buildInstall } from './create'
import { Input } from './input'
import { Button } from './button'
import { Progress } from './progress'

import '../../theme/index.css'

const components = [
  Input, Button, Progress,
]

export const zeal = buildInstall(components)
export * from './button'
export * from './input'
export * from './progress'
