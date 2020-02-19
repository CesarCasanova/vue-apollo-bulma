<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Partials/Nav'
export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>
