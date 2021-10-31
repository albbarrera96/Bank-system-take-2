new Vue ({
  el: '#vue-app',

data: {
      retirar: 0,
      depositar: 0,
      bolsillo: 0,
      cuenta: 0,
},

methods: {
      depositarDinero1: function (){
        return Number(this.depositar) + Number(this.cuenta)
      }

}
})
