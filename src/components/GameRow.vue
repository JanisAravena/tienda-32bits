<template>
    <tr>
      <td>{{ game.codigo }}</td>
      <td>{{ game.nombre }}</td>
      <td>{{ game.stock }}</td>
      <td>{{ formatPrice(game.precio) }}</td>
      <td>
        <button @click="modifyStock(-1)">-</button>
        <button @click="modifyStock(1)">+</button>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      game: Object,
    },
    methods: {
      modifyStock(amount) {
        this.$emit('updateStock', { codigo: this.game.codigo, amount });
      },
      formatPrice(value) {
        return `$${parseInt(value).toLocaleString()}`;
      }
    },
  };
  </script>
  
  <style>
  button {
    margin: 0 1px;
  }
  </style>
  