var app=Vue.createApp({
  data(){
    return{
      count:0,
    };
  },
  methods:{

    increase(amount,e){
      console.log(e.target);
      this.count=this.count+amount;
    },
    decrease(amount){
      this.count=this.count-amount;
    },

    test(e){
      console.log(e.target);
    }

  }


 

});

app.mount('#app');