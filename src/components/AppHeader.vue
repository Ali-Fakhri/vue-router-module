<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link tag="b-navbar-brand" to="/">Brand</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link tag="b-nav-item" to="/" exact>Home</router-link>
          <router-link tag="b-nav-item" to="/user">User</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
</style>