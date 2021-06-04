const App = {
  data() {
    return {
      title: 'Все заказы',
      searchPlaceholder: 'Поиск заказов',
      inputValue: '',
      inputValueVinCars:'',
      inputValueModelCars:'',
      inputValueYearCars:'',
      inputValueName:'',
      inputValueComment:'',
      placeholderOrderVin:'Введите VIN автомобиля',
      users: ['Ivan', 'Sasha']
    }
  },
  methods: {
    inputChangeHandler(event){
      this.inputValue = event.target.value
    },
    inputChangeHandlerVin(event){
      this.inputValueVinCars = event.target.value
    },
    inputChangeHandlerMode(event){
      this.inputValueModelCars = event.target.value
    },
    inputChangeHandlerName(event){
      this.inputValueName = event.target.value
    },
    inputChangeHandlerComment(event){
      this.inputValueComment = event.target.value
    },
    inputChangeHandlerYear(event){
      this.inputValueYearCars = event.target.value
    },
    addNewOrder() {
      this.users.push(this.inputValueName)
    }
  }
}


Vue.createApp(App).mount('#app')



