<template>
  <div class="container mt-5" style="position: relative">
    <img
      src="https://i.pinimg.com/736x/aa/9c/d4/aa9cd4f7c8157b301903a242946a558d.jpg"
      alt="Hình ảnh giới thiệu"
      style="max-width: 150%; display: block; margin: 0 auto"
    />
    <div
      class="card mt-5"
      style="
        position: absolute;
        top: 50%;
        left: 30%;
        transform: translate(-30%, -70%);
        width: 350px;
      "
    >
      <div class="card-body">
        <h3 class="text-center mb-4" style="color: brown">Đăng nhập</h3>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="form-control"
              style="width: calc(100% + 2px)"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Mật khẩu:</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="form-control"
              style="width: calc(100% + 2px)"
              required
            />
          </div>
          <div class="" style="float: right">
            <a href="">Quên mật khẩu?</a>
          </div>
          <div class="text-center">
            <button type="submit" class="btn">Đăng nhập</button>
          </div>
          <div class="text-center">
            Bạn chưa có tài khoản?
            <a href=""><i>Đăng ký</i></a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import webService from "../services/web.service";

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
      const checkUser = this.users.find((user) => user.email === this.email);
      if (checkUser.password == this.password) {
        this.$store.commit("login", this.email);
        if (this.email == "admin@gmail.com") {
          this.$router.push("/admin");
        } else {
          this.$router.push("/");
        }
      } else {
        alert("sai thông tin tài khoản");
      }
    },
  },
};
</script>

<style>
.card {
  opacity: 0.9;
}

form {
  margin-top: 20px;
}

input[type="email"],
input[type="password"] {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px 0 20px 0;
  border-radius: 5px;
  width: calc(100% - 22px);
  background-color: #f8f8f8;
}
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #5cb3fd;
  box-shadow: 0 0 5px rgba(92, 179, 253, 0.5);
}
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
}
button:hover {
  opacity: 0.8;
}

button[type="submit"] {
  background-color: #007bff;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  transition: background-color 0.3s;
}
label {
  display: inline-block;
  text-align: left;
  width: 100%;
}

input {
  width: calc(100% - 2px);
  box-sizing: border-box;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
