<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <router-link to="/user" tag="button" class="btn btn-primary">Back</router-link>
        <h3 class="my-3">User Details</h3>
        <p>User Loaded: {{ this.$route.params.id }}</p>
        <router-link
          :to="'/user/' + $route.params.id + '/edit'"
          tag="button"
          class="btn btn-warning"
        >Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>