<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <h3 class="my-3">User Start Component</h3>
        <ul class="list-unstyled">
          <router-link to="/user/1" tag="li">
            <a>user 1</a>
          </router-link>
          <router-link to="/user/2" tag="li">
            <a>user 2</a>
          </router-link>
          <router-link to="/user/3" tag="li">
            <a>user 3</a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>