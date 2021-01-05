<template>
  <div class="home">
    <img src="@/assets/rickandmorty.jpg">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {

}
</script>

<style scoped>
.home{
  height: 90vh;
  width: 100%;
  text-align: center;
  background: black;
}

@media (max-width: 800px) {

  .home{
    display: flex;
    align-items: center;
  }

  .home img{
    width: 100%;
  }
}
</style>