import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import button from '../button.vue'

describe('test button', () => {
  it('should be hellozeal', () => {
    expect('hello' + 'zeal').toBe('hellozeal')
  })

  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'zeal',
      },
    })
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('zeal')
  })

  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('z-btn--primary')
  })
})
