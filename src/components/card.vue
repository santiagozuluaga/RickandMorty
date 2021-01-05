<template>
    <div class="card">
        <img v-if="element.image" :src="element.image" alt="" />
        <div>
            <h3>{{element.name}}</h3>

            <!-- EPISODES -->
            <p v-if="type == 'Episodes'"><strong>Air date: </strong>{{element.air_date}}</p>
            <p v-if="type == 'Episodes'"><strong>Episode: </strong>{{element.episode}}</p>

            <!-- LOCATIONS -->
            <p v-if="type == 'Locations'"><strong>Type: </strong>{{element.type}}</p>
            <p v-if="type == 'Locations'"><strong>Dimension: </strong>{{element.dimension}}</p>

            <!-- CHARACTERS -->
            <p><strong>{{element.status}} - {{element.species}}</strong></p>
            <p v-if="type == 'Characters'"><strong>Location: </strong></p>
            <p v-if="type == 'Characters'">{{element.location.name}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Card extends Vue {
    @Prop() private element!: any;
    @Prop() private type!: String;
}
</script>

<style scoped>
.card{
    text-align: left;
    display: inline-block;
    color: white;
    width: 280px;
    border-radius: 10px;
    background: #3c3e44;
    margin: 25px;
}

.card img{
    width: 100%;
    border-radius: 10px 10px 0px 0px;
}

.card div {
    padding: 5px 10px;
}

@media (max-width: 800px) {
    .card {
        border-radius: 10px;
        background: #3c3e44;
        width: 80%;
        margin: 25px auto;
    }
    
}
</style>