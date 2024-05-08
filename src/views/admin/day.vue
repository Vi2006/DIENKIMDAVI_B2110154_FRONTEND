<template>
  <div class="container">
    <h1 class="my-4" style="color: brown">Thống kê Đơn hàng</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card" style="background-color: #f8c471">
          <div class="card-body">
            <h5 class="card-title" style="color: #6c3483">
              Đơn hàng Chờ xử lý
            </h5>
            <p class="card-text" style="color: #6c3483">Số lượng: 0</p>
            <img
              src="https://tradefx.co.za/wp-content/uploads/2022/05/futuristic-stock-exchange-scene-with-chart-numbers-and-buy-and-sell-options-3d-illustration-stockpack-adobe-stock-1024x576.jpg"
              alt="Pending Orders Chart"
              style="width: 100%"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card" style="background-color: #82e0aa">
          <div class="card-body">
            <h5 class="card-title" style="color: #196f3d">
              Đơn hàng Đã xác nhận
            </h5>
            <p class="card-text" style="color: #196f3d">
              Số lượng: {{ orders.length }}
            </p>
            <img
              src="https://png.pngtree.com/png-clipart/20211226/original/pngtree-order-confirmed-tags-with-check-mark-icon-png-image_6979177.png"
              alt="Confirmed Orders Chart"
              style="width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminService from "../../services/admin.service";
export default {
  data() {
    return {
      orders: [],
    };
  },
  created() {
    this.fetchorders();
  },
  methods: {
    async fetchorders() {
      this.orders = await adminService.getOrders();
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #a3d2ca;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
