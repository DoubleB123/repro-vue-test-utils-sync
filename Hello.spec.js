import { mount } from '@vue/test-utils' 
import Hello from './Hello.vue'

describe('Test', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Hello, { sync: false })
  })

  it('does stuff', async () => {
    wrapper.setProps({ foo: 'xxx' })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toEqual('xxx')
  })
})