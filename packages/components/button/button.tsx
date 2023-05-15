import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'
import { Loading, Wave } from '../_private'
import type { WaveRef } from '../_private'
import { prefix } from '../config'
import type { ButtonNativeType, ButtonSize, ButtonType } from './props'

export const buttonProps = {
  round: Boolean,
  circle: Boolean,
  disabled: Boolean,
  autofocus: Boolean,
  block: Boolean,
  ghost: Boolean,
  dashed: Boolean,
  strong: Boolean,
  text: Boolean,
  loading: Boolean,
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'button',
  },
}

export default defineComponent({
  name: 'Button',
  props: buttonProps,
  emits: ['click'],
  setup(props, { slots, emit }) {
    const waveRef = ref<WaveRef | null>(null)

    const handleClick = (e: MouseEvent) => {
      if (props.disabled || props.loading)
        return

      waveRef.value?.play()

      emit('click', e)
    }

    return {
      props,
      slots,
      handleClick,
      waveRef,
    }
  },
  render() {
    const { tag: Component } = this.props

    return (
      <Component
        class={[
          `${prefix}-btn`,
          `${prefix}-btn--${this.props.size}`,
          `${prefix}-btn--${this.props.type}`,
          this.props.round && `${prefix}-btn--round`,
          this.props.circle && `${prefix}-btn--circle`,
          this.props.block && `${prefix}-btn--block`,
          this.props.ghost && `${prefix}-btn--ghost`,
          this.props.dashed && `${prefix}-btn--dashed`,
          this.props.strong && `${prefix}-btn--strong`,
          (this.props.disabled || this.props.loading) && `${prefix}-btn--disabled`,
          this.props.text && `${prefix}-btn--text`,
        ]}
        onClick={this.handleClick}
      >
        {this.slots.default ? this.slots.default() : ''}
        <Loading show={this.props.loading} />
        {!this.props.text && <div aria-hidden="true" class={`${prefix}-btn__border`} />}
        {!this.props.text && <Wave ref="waveRef" />}
      </Component>
    )
  },
})
