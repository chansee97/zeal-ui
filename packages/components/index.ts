import { buildInstall } from './create'
import { Input } from './input'
import { Button } from './button'
import { Progress } from './progress'

import '../../style/index.scss'

export * from './components'

const components = [
  Input, Button, Progress,
]

export const zeal = buildInstall(components)
