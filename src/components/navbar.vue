<template>
    <nav class="navbar">
        <div class="container">
            <a class="logo" href="/">
                <strong>RickAndMorty</strong>
            </a>
            <input type="checkbox" id="res-menu" />
            <label for="res-menu">
                <i class="fa fa-bars" id="sign-one"></i>
                <i class="fa fa-times" id="sign-two"></i>
            </label>
            <ul>
                <li v-on:click="changePage('Characters')">
                    Characters
                </li>
                <li v-on:click="changePage('Locations')">
                    Locations
                </li>
                <li v-on:click="changePage('Episodes')">
                    Episodes
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { PreventConsole } from '@/console';

@Component({
  components: {},
})
export default class Navbar extends Vue {

    private checked: Boolean = false


    created() {
        if (window.outerWidth <= 800) {
            window.addEventListener('scroll', this.scrollHandler)
        }
    }   

    changePage(page: string) {
        if (window.outerWidth <= 800) {
            let element = <HTMLInputElement> document.getElementById("res-menu");
            if (element.checked) {
                element.checked = false;
                if (this.$route.name != page) {
                    this.$router.push("/"+ page.toLowerCase());
                }
            }
        }
        else{
            if (this.$route.name != page) {
                    this.$router.push("/"+ page.toLowerCase());
                }
        }
    }

    scrollHandler() {
        if(window.scrollY != 0) {
            let element = <HTMLInputElement> document.getElementById("res-menu");
            if (element.checked) {
                element.checked = false;
            }
        }
    }
}
</script>

<style scoped>
.container{
    width: 90%;
    margin: 0 auto;
}

.navbar{
    background: black;
}

.navbar div{
    color: white;
    font-family: 'Montserrat', sans-serif;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo{
    margin-left: 0;
    text-decoration: none;
    font-size: 25px;
    color: white;
}

.navbar ul li{
    display: inline-block;
    font-size: 15px;
    text-decoration: none;
    color: white;
    margin-left: 10px;
    cursor: pointer;
}

label #sign-one, label #sign-two{
    font-size: 30px;
    cursor: pointer;
    display: none;
}

#res-menu{
    display: none;
}

@media (max-width: 800px) {
    label #sign-one{
        display: block;
    }

    .navbar ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: red;
        top: 10vh;
        left: -100%;
        padding: 0;
        margin: 0;
        text-align: center;
        transition: .5s;
        z-index: 10;
    }

    .navbar ul li{
        display: block;
        padding: 15px 0;
        line-height: 30px;
        width: 100%;
        background: blue;
        margin-left: 0px;
        font-size: 20px;
        color: white;
    }
    
    #res-menu:checked ~ul{
        left: 0;
    }

    #res-menu:checked ~ label #sign-one{
        display: none;
    }

    #res-menu:checked ~ label #sign-two{
        display: block;
    }
}
</style>

