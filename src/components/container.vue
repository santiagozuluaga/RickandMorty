<template>
    <div class="container">
        <h3>{{view}}</h3>
        <div class="body-container">
            <div v-if="isLoading">Cargando</div>
            <div v-if="!isLoading & !isError">
            <Card v-bind:key="element.id" :type="view" :element="element" v-for="element in data"/>
            </div>
            <div v-if="!isLoading & isError">Error</div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Card from '@/components/card.vue';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { PreventConsole } from '@/console';

@Component({
  components: {
    Card
  },
})
export default class Container extends Vue {
    @Prop() private view!: any;
    private VUE_APP_APIURL: string = process.env.VUE_APP_APIURL;
    private data: Array<any> = [];
    private pages: Number = 1;
    private currentPage: Number = 1;
    private isLoading: Boolean = true;
    private isError: Boolean = false;
    
    created() {
        this.fetchData();
    }

    fetchData() {
        axios.get(this.VUE_APP_APIURL + "/" + this.view.toLowerCase().slice(0, -1))
        .then((response: any) => {
            this.data = response.data.results;
            this.pages = response.data.info.pages;
            this.isLoading = false;
            PreventConsole(this.data, this.pages);
        })
        .catch((err: Error) => {
            this.isLoading = false;
            this.isError = true;
        })
    }
}
</script>

<style scoped>
.container{
    text-align: center;
}

.container h3{
    text-align: center;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.body-container{
    background: #24282f;
    padding-top: 25px;
    padding-bottom: 25px;
}

@media (max-width: 800px) {
}
</style>