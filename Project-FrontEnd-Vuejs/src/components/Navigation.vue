<template>
    <div>
        <section>
        <div class="header_container">
             <div class="header_logo">
                <a href="index.html">Watch<span>.Store</span></a>
             </div>
             <div class="header_nav_menu">
                <ul class="nav_list">
                    <li class="nav_item">
                        <a href="index.html" class="nav_links active">TRANG CHỦ</a>
                    </li>
                    <li class="nav_item">
                        <a href="gioithieu.html" class="nav_links">GIỚI THIỆU</a>
                    </li>
                    <li class="nav_item">
                        <a class="nav_links">SẢN PHẨM</a>
                    </li>
                    <li class="nav_item">
                        <a href="blog.html" class="nav_links">BLOG</a>
                    </li>
                    <li class="nav_item">
                        <a href="lienhe.html" class="nav_links">LIÊN HỆ</a>
                    </li>
                </ul>
                <div class="header_search">
                    <input type="search" placeholder="Tìm kiếm" class="form_input">
                    <button class="search_btn">
                        <i class="ri-search-line"></i>
                    </button>
                </div>
                <i id="close-menu" class="ri-close-line"></i>
             </div>
             <div class="header_user_shopcart">
               <a href="#" class="header_user"><i class="ri-user-line"></i></a>
               <a href="rohang.html" class="header_cart"><i class="ri-shopping-bag-line"></i></a>
             </div>
             <div class="mobile">
                <a href="#" class="header_user"><i class="ri-user-line"></i></a>
                <a href="rohang.html" class="header_cart"><i class="ri-shopping-bag-line"></i></a>
                <i id="bar" class="ri-menu-line"></i>
             </div>

        </div>
    </section>
    </div>
</template>

<script>
export default {
      name:'navigation'
}
</script>

<style>

</style>
