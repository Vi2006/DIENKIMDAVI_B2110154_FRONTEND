<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div v-if="$store.state.email == 'admin@gmail.com'" class="container">
        <a class="navbar-brand" href="/admin" span style="color: #ff8c00"
          ><b>Trang chủ</b></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/admin/product" style="color: #ff8c00"
                ><b>Sản phẩm</b></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/order" style="color: #ff8c00"
                ><b>Đơn hàng</b></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/statistic" style="color: #ff8c00"
                ><b>Thống kê</b></a
              >
            </li>

            <li class="nav-item">
              <router-link
                v-if="!$store.state.email"
                to="/login"
                class="nav-link"
                ><b>Đăng nhập</b></router-link
              >
              <a
                v-if="$store.state.email"
                @click="logout"
                class="nav-link"
                style="color: #ff8c00"
                ><b>Đăng xuất</b></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="container">
        <a class="navbar-brand" href="/" style="color: #ff8c00">Trang chủ</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link
                v-if="!$store.state.email"
                class="nav-link"
                to="/login"
                >Sản phẩm</router-link
              >
              <a
                v-if="$store.state.email"
                class="nav-link"
                href="/ordered"
                style="color: #ff8c00"
                >Sản phẩm</a
              >
            </li>
            <li class="nav-item">
              <router-link
                v-if="!$store.state.email"
                class="nav-link"
                to="/login"
                >Giỏ hàng</router-link
              >
              <a
                v-if="$store.state.email"
                class="nav-link"
                href="/cart"
                style="color: #ff8c00"
                >Giỏ hàng</a
              >
            </li>
            <li class="nav-item">
              <router-link
                v-if="!$store.state.email"
                class="nav-link"
                to="/login"
                >Đăng nhập</router-link
              >
              <a
                v-if="$store.state.email"
                @click="logout"
                class="nav-link"
                style="color: #ff8c00"
                >Đăng xuất</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return {
      searchs: "",
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
  mounted() {
    this.$store.commit("initializeStore");
  },
};
</script>

<style>
header {
  background: rgb(223, 223, 223);
}
</style>
