<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 ">
            hình ảnh giới thiệu
        </div>
        <div class="col-md-6 ">
          <div class="card mt-5">
            <div class="card-body">
              <h3 class="text-center mb-4">Đăng nhập</h3>
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input v-model="email" type="email" id="email" class="form-control" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Mật khẩu</label>
                  <input v-model="password" type="password" id="password" class="form-control" required>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Đăng nhập</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import webService from '../services/web.service';

  export default {
    data() {
      return {
        email: "",
        password: "",
        users: [],
      };
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          this.users = await webService.getAcountUser();
        } catch (error) {
          console.error(error);
        }
      },

      login() {
        const checkUser = this.users.find(user => user.email === this.email);
        if(checkUser.password == this.password) {
          this.$store.commit('login', this.email);
          if(this.email == 'admin@gmail.com'){
            this.$router.push('/admin');
          }else{
            this.$router.push('/');
          }
        }else{
          console.log('sai mật khẩu');
        }
      }
    }
  };
  </script>
  
  <style>
  .card {
    opacity: 0.9;
  }
  
  form {
    margin-top: 20px;
  }
  </style> 