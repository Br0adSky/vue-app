<template>
  <v-app>
    <v-main>
      <v-app-bar app color="blue">
        <v-app-bar-title>
          <h1 class="hello">Обзор сессий</h1>
        </v-app-bar-title>
      </v-app-bar>
      <article class="article"><MenuComponent/>
        </article>
    </v-main>
  </v-app>
  <!--  <Page1Component />-->

</template>

<script>

export default {
  name: 'MenuMain'
}
</script>

<style>
.hello {
  font-family: Georgia, serif;
  font-size: 24px;
}
.article {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>