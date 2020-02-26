<template>
    <div class="container">
        <div class="text-center container-button-title">
            <h2 class="title-location">Locations</h2>
            <b-button-group>
                <b-button class="button-pages" variant="success" v-on:click="minusCurrent()">Previous</b-button>
                <!--<b-button variant="outline-primary" v-on:click="changeCurrent(pagesToShow[0])">{{pagesToShow[0]}}</b-button>
                <b-button variant="outline-primary" v-on:click="changeCurrent(pagesToShow[1])">{{pagesToShow[1]}}</b-button>
                <b-button variant="outline-primary" v-on:click="changeCurrent(pagesToShow[2])">{{pagesToShow[2]}}</b-button>-->
                <b-button class="button-pages" variant="success" v-on:click="plusCurrent()">Next</b-button>
            </b-button-group>
        </div>
        <div class="container-location">
            <b-row class="justify-content-center">
                <b-col lg="3" class="location" v-for="location in locations" :key="location.key">
                    <div>
                        <h3><strong>{{location.name}}</strong></h3>
                        <p><strong>Type: </strong> {{location.type}}</p>
                        <p><strong>Dimension: </strong> {{location.dimension}}</p>
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
            locations: [],
            currentPage: 1,
            numberPages: 0
        }
    },
    created(){
        fetch('https://rickandmortyapi.com/api/location/')
        .then(res => res.json())
        .then(res => {
            this.numberPages = res.info.pages;
            this.locations = res.results;
        })
    },
    methods: {
        getInfo(){  
            fetch('https://rickandmortyapi.com/api/location/?page=' + this.currentPage)
            .then(res => res.json())
            .then(res => {
                this.locations = res.results;
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


.container-location{
    padding: 20px;
}

.location{
    background: #212529;
    margin: 10px;
    padding-top: 20px;
    padding-bottom: 10px;
    color: white;
    border-radius: 10px;
}
</style>