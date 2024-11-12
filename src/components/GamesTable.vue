<template>
    <div class="games-table">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <GameRow
            v-for="game in games"
            :key="game.codigo"
            :game="game"
            @updateStock="updateStock"
          />
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import GameRow from './GameRow.vue';
  
  export default {
    components: {
      GameRow,
    },
    computed: {
      ...mapState(['games']),
    },
    methods: {
      ...mapActions(['updateStock']),
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  table {
    width: 80%;
    margin: 20px auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
  }
  
  th, td {
    padding: 10px 15px;
    border: 1px solid #ccc;
    text-align: center;

  }
  
  body {
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
  </style>