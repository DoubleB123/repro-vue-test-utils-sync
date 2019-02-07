<template>
  <div>Hello!</div>
</template>

<script>
export default {
  name: "Hello",
  props: ["foo"],
  data: () => ({
    items: []
  }),
  methods: {
    setup() {
      ["item1", "item2"].forEach(item => {
        this.items = this.items.concat(item); // would work without this
      });
    }
  },
  created() {
    // this.setup(); // would work with immediate:false on watch and this uncomented
  },
  watch: {
    foo: {
      handler() {
        this.setup();
      },
      immediate: true // would work with immediate:false and setup() called from created()
    }
  }
};
</script>