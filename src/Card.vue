<template>
  <section class="card">
    <i :class="[icon, 'green']"/>
    <h2>{{ title }}</h2>  
    <p v-html="description"></p>
  </section>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
  }
}
</script>

<style lang="scss">

.card {
 background-color: white;
 border-radius: 2px; 
 margin: 3%;
 padding: 10px;
 z-index: 2;
 height: 30vh;

 h2, .green {
  color: #49BEB5;
 }
}

</style>
