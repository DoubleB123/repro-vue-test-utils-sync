import { mount } from '@vue/test-utils' 
import Hello from './Hello.vue'

let setup = {
  components: { Hello },
  template: `<Hello/>`,
}

describe('Test', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(setup)
  })
  afterEach(() => {
    wrapper.destroy()
  })

  // would work with a single test
  it('does stuff', () => {
    expect(wrapper).toBeTruthy()
  })

  // would work with a single test
  it('does other stuff', () => {
    expect(wrapper).toBeTruthy()
  })
})