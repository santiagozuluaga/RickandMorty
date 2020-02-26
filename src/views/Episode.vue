<template>
    <div class="container">
        <div class="text-center container-button-title">
            <h2 class="title-episode">Episodes</h2>
            <b-button-group>
                <b-button class="button-pages" variant="success" v-on:click="minusCurrent()">Previous</b-button>
                <!--<b-button variant="outline-primary" v-on:click="changeCurrent(pagesToShow[0])">{{pagesToShow[0]}}</b-button>
                <b-button variant="outline-primary" v-on:click="changeCurrent(pagesToShow[1])">{{pagesToShow[1]}}</b-button>
                <b-button variant="outline-primary" v-on:click="changeCurrent(pagesToShow[2])">{{pagesToShow[2]}}</b-button>-->
                <b-button class="button-pages" variant="success" v-on:click="plusCurrent()">Next</b-button>
            </b-button-group>
        </div>
        <div class="container-episode">
            <b-row class="justify-content-center">
                <b-col lg="3" class="episode" v-for="episode in episodes" :key="episode.key">
                    <div>
                        <h3><strong>{{episode.name}}</strong></h3>
                        <p><strong>Air date: </strong> {{episode.air_date}}</p>
                        <p><strong>Episode: </strong> {{episode.episode}}</p>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            episodes: [],
            currentPage: 1,
            numberPages: 0
        }
    },
    created(){
        fetch('https://rickandmortyapi.com/api/episode/')
        .then(res => res.json())
        .then(res => {
            this.numberPages = res.info.pages;
            this.episodes = res.results;
        })
    },
    methods: {
        getInfo(){  
            fetch('https://rickandmortyapi.com/api/episode/?page=' + this.currentPage)
            .then(res => res.json())
            .then(res => {
                this.episodes = res.results;
            })
        },
        plusCurrent(){
            if(this.currentPage < this.numberPages){
                this.currentPage = this.currentPage + 1;
                this.getInfo();
            }
        },
        minusCurrent(){
            if(this.currentPage > 1){
                this.currentPage = this.currentPage - 1;
                this.getInfo();
            }
        }
    }
}
</script>

<style>
.container-button-title{
    padding: 20px;
}

.button-pages{
    width: 150px;
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
}


.container-episode{
    padding: 20px;
}

.episode{
    background: #212529;
    margin: 10px;
    padding-top: 20px;
    padding-bottom: 10px;
    color: white;
    border-radius: 10px;
}
</style>