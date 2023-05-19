export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'error'
export type ButtonNativeType = 'button' | 'submit' | 'reset'
export interface ButtonProps {
  round?: boolean
  circle?: boolean
  disabled?: boolean
  autofocus?: boolean
  block?: boolean
  ghost?: boolean
  dashed?: boolean
  strong?: boolean
  text?: boolean
  loading?: boolean
  size?: ButtonSize
  type?: ButtonType
  nativeType?: ButtonNativeType
  tag?: string
}
