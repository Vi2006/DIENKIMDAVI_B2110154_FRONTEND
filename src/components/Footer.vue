<template>
  <footer class="footer-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5 style="color: #ffa500">Về Chúng Tôi</h5>
          <p style="color: #808080">
            Cửa hàng mắt kính chuyên cung cấp những mẫu mã mới nhất và phổ biến
            nhất trên thị trường.
          </p>
        </div>
        <div class="col-md-3">
          <h5 style="color: #ffa500">Danh Mục</h5>
          <ul>
            <li><a href="#" style="color: #808080">Mắt Kính Mới</a></li>
            <li>
              <a href="#" style="color: #808080">Mắt Kính Bán Chạy</a>
            </li>
            <li><a href="#" style="color: #808080">Khuyến Mãi</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 style="color: #ffa500">Liên Hệ</h5>
          <ul>
            <li style="color: #808080">Email: DadiiShop@gmail.com</li>
            <li style="color: #808080">Hot: 0123 456 789</li>
          </ul>
        </div>
      </div>
      <p class="text-muted" style="color: #808080">
        © 2024 Tất cả quyền được bảo lưu
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  // Các khai báo của component nếu cần
};
</script>

<style>
.footer-wrapper {
  position: absolute;
  width: 100%;
  background-color: #212529; /* Màu đen */
  color: #ffffff; /* Màu trắng cho văn bản */
  padding: 20px 0;
  margin-top: 20px; /* Đảm bảo footer không bị đè lên nội dung */
}
</style>
