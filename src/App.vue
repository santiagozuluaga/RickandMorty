<template>
  <div id="app">

    <b-navbar type="dark" variant="dark" toggleable="lg">
      <b-container>
        <b-navbar-brand>
          <router-link class="text-nav" to="/">RickandMorty</router-link> 
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link class="text-nav" to="/characters">Characters</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="text-nav" to="/locations">Locations</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="text-nav" to="/episodes">Episodes</router-link>
            </b-nav-item>
          </b-navbar-nav>        
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}

//color:#212529;
</script>

<style>
.text-nav{
  text-decoration: none;
  color: white;
}

.text-nav:hover{
  text-decoration: none;
  color: white;
}
</style>
