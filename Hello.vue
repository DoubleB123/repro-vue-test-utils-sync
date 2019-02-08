<template>
  <div>{{ foo }}</div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    foo: String
  },
  methods: {
    accessingFoo() {
      console.log("foo", this.foo); // would work if method weren't accessing foo
    }
  },
  watch: {
    foo: {
      handler() {
        this.accessingFoo();
      },
      immediate: true // works with immediate:false and created() uncomented
    }
  },
  created() {
    // this.accessingFoo();
  }
};
</script>