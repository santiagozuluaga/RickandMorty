<template>
  <div class="charactes">
    <Container :view="'Characters'" />    
  </div>
</template>

<script lang="ts">
import Container from "@/components/container.vue";
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Container
  },
})
export default class Charactes extends Vue {
}
</script>

<style scoped>

</style>
