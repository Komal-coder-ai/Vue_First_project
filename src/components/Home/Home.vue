<template>
  <div class="HomePageContainer flex flex-col justify-center items-center p-8">
    <p class="text-2xl sm:text-3xl lg:text-4xl text-center font-fantasy ">
      Luxury space that you can afford
    </p>
    <h1 class="text-4xl sm:text-5xl lg:text-6xl text-center">
      Holiday
    </h1>
    <p class="text-2xl sm:text-3xl lg:text-4xl text-center">
      Perfect place to relax and enjoy your rest.
    </p>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
.HomePageContainer {
  height: 100vh;
  background-image: url('../../assets/Image/resort-banner-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  justify-content: center;
  align-items: center;
}
</style>