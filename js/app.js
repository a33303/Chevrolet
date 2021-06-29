const App = {
  data() {
    return {
      searchPlaceholder: 'Поиск заказов',
      inputValue: '',
      vin:'',
      model:'',
      production_year:'',
      name:'',
      description:'',
      placeholderOrderVin:'Введите VIN автомобиля',
      form:{},
    }
  },
  methods: {
    clearToForm() {
      this.vin = ''
      this.model = ''
      this.production_year = ''
      this.name = ''
      this.description = ''
    },
    addNewOrder(e) {
      e.preventDefault()
      console.log('Отправка JSON данных', this.form)

      // fetch('http://localhost:63342/chevrolete/chevrolet_front/order.php',{
      //   method:'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(this.form),
      //   url: "/order.php"
      // }).then(
      //   function (response) {
      //     // успешно получен ответ сервера на запрос
      //     console.log('Ответ сервера', response);
      //   },
      //   function(error) {
      //     // Ошибка при осуществлении запроса
      //     console.error(error);
      //   }
      // );

    },
    sendIdentity: function (e) {
      e.preventDefault()
      axios
        .post('/chevrolete/chevrolet_front/order.json')
        .then(function (response) {
          this.form = response.data;
        });
    },

    с(){
      this.fetchData(this.url)
        .then(data => {this.item = data})
        .finally(() => {this._render()})
    },

     fetchData: function (url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest(); // if(){} else {} проверка на IE (ActiveXObject)
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) { // 4 - зав запроса без ошибки
        if(xhr.status == 200) { // 200 - ответ сервера о том, что он все сделал
          res(JSON.parse(xhr.responseText));
        }
        else {
          rej('server Error');
        }
      }
    };
    xhr.send();
  })
}
  }
}
Vue.createApp(App).mount('#app')



