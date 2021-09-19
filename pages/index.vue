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
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'
          }
        ]
      }
    }
  }
</script>