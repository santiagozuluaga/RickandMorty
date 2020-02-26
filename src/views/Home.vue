<template>
  <div class="home">
    <div class="banner">
      <img class="img-banner" src="@/resources/rick-morty.jpg">
    </div>
    <div class="container text-center info-home">
      <h1>Welcome!</h1>
      <h3>This is a small project with the information of Rick and Morty.</h3>
        <b-button variant="success">
          <b-link class="link-api" target="_blank" href="https://rickandmortyapi.com/">
            Rick and Morty API
          </b-link>
        </b-button>
        
      
    </div>
    <!--
    <div class="info-home">
      <h2>Encuentra aquí toda la información relacionada con la serie:</h2>

      <router-link class="links-home" to="/characters">
        <h3>Personajes</h3>
      </router-link>
      <router-link class="links-home" to="/locations">
        <h3>Lugares</h3>
      </router-link>
      <router-link class="links-home" to="/episodes">
        <h3>Episodios</h3>
      </router-link>
    </div>
    -->
  </div>
</template>

<script>

export default {
}
</script>

<style>
.banner{
  background: black;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.img-banner{
  width: 65%;
}

.info-home{
  padding: 60px;
}

.links-home{
  margin: 10px;
  text-decoration: none;
  color: #212529;
}

.links-home:hover{
  text-decoration: none;
  color: #212529;
}

.link-api{
  color: white;
}

.link-api:hover{
  text-decoration: none;
  color: white;
}
</style>