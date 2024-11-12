<template>
  <div class="app">
    <h1 class="title">Tienda 32 Bits</h1>
    <h2 class="subtitle">Lista de juegos</h2>
    <GamesTable />
  </div>
</template>

<script>
import GamesTable from './components/GamesTable.vue';
import { mapState } from 'vuex';

export default {
  components: {
    GamesTable,
  },
  computed: {
    ...mapState(['games']),
  },
};
</script>

<style>
.title {
  color: #808080;
}

.subtitle {
  color: #A9A9A9; 
}
</style>