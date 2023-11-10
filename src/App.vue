<script>
import AppHeader from "@/components/AppHeader.vue";
import HeaderAdmin from "./components/HeaderAdmin.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    AppHeader,
    HeaderAdmin,
    Footer,
  },
  
}
</script>


<template>
  <div id="app">
      
    <div >
      <AppHeader></AppHeader>
    </div>

    <div style="min-height: calc(100vh - 200px);" class="container mt-3">
      <router-view />
    </div>

    <div>
      <Footer class="mt-4"></Footer>
    </div>
  </div>
</template>

<style>
.page {
  max-width: 1000px;
  margin: auto;
}

</style>
