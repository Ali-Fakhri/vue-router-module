<template>
  <div class="py-5">
    <b-jumbotron bg-variant="white" text-variant="dark" border-variant="dark">
      <template v-slot:header>Home Page</template>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    console.log("Logged Before Leaving the Route");
    next();
  },
};
</script>

<style>
</style>