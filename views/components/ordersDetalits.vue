<template>
  <div class="orders-detalits font-text">
    <div class="orders-detalits-top detalits-margin">
      <img src="" alt="">
      <p>№ 097843</p>
      <p>Статус: {{ this.orders.status }}</p>
    </div>
    <div>
      <table class="detalits-margin">
        <h1>Детали заказа</h1>
        <tr class="">
          <td>VIN автомобиля</td>
          <td>{{ this.cars.vin }}</td>
        </tr>
        <tr>
          <td>Модель автомобиля</td>
          <td>{{ this.cars.model }}</td>
        </tr>
        <tr>
          <td>Год выпуска автомобиля</td>
          <td>{{ this.cars.production_year }}</td>
        </tr>
        <tr>
          <td>ФИО заказчика</td>
          <td>{{ this.users.name }}</td>
        </tr>
        <tr>
          <td>Комментарий к заказу</td>
          <td>{{ this.orders.description }}</td>
        </tr>
      </table>
      <button class="" href="../chevrolete/chevrolete_front/index.html">Назад</button>
      <button class="" >Добавить активность</button>
      <button class="" >Выполнен</button>
    </div>
  </div>
</template>

<script>
export
</script>
