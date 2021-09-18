<template>
    <Search />
</template>

<script>
  export default {
    data() {
      return {
        title: 'Search Google Books'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Search App'
          }
        ]
      }
    }
  }
</script>