<template>
  <div class="dashboard" id="app">
    <div class="created__at__container">
      <div class="created__at">
        <p class="created__at_time">12:04</p>
        <p class="created__at_date">сегодня</p>
      </div>
    </div>
    <div class="dashboard__img_content">
      <img class="product-img">
    </div>
    <div class="dashboard__content">
      <div class="what-we-bo__box">
        <div>
          <h3 class="product__heading">{{ this.order.id }}</h3>
          <span class="button__text button-urgent-order">
            <i class="fas fa-fire"></i>Срочный
          </span>
        </div>
        <div class="dashboard__content_user">
          <img class="img-account">
          <a href="#" class="account_text">Сергей Олегович</a>
        </div>
        <p class="product__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.
        </p>
        <a href="" class="product__link">Просмотреть</a>
      </div>
    </div>
  </div>
  <hr class="dashboard__separator">
</template>


