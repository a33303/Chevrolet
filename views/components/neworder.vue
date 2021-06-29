<template>
  <form class="new-order" method="POST" >
    <h1 class="heading_text">Новый заказ</h1>
    <input type="text"
           class="user-text-order"
           placeholder="Введите VIN автомобиля"
           name="vin"
           v-model="form.vin">

    <input type="text"
           class="user-text-order"
           placeholder="Введите модель автомобиля"
           name="model"
           v-model="form.model">

    <input type="text"
           class="user-text-order"
           placeholder="Укажите год выпуска автомобиля"
           name="year"
           v-model="form.production_year">

    <input type="text"
           class="user-text-order"
           placeholder="Укажите ФИО заказчика"
           name="fio"
           v-model="form.name">

    <textarea name=""
              id=""
              cols="60"
              rows="30"
              class="user-text-comment"
              placeholder="Укажите комментарий к заказу"
              name="comment"
              v-model="form.description">

      </textarea>
    <div>
      <!--        <button class="btn-create_order">Создать</button>-->
      <button class="btn-create_order" v-on:click="sendIdentity">Создать</button>
      <button class="btn-clear_order" v-on:click="clearToForm">Очистить</button>
    </div>
</template>

<script>
export default {
  name: "neworder"
}
</script>

<style scoped>

</style>
