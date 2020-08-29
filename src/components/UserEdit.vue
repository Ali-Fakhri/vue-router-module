<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <button class="btn btn-primary" @click="getBack">Back</button>
        <h3>User Edit</h3>
        <p>Editting User with id: {{$route.params.id}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>