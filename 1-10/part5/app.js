var app=Vue.createApp({
  data(){
    return{
      count:0,
    };
  },
  methods:{
    getCurrentTime(){
      let ct=new Date();
      return ct;
    },
    increase(){
      this.count=this.count+1;
    },
    decrease(){
      this.count--;
    }

  }


 

});

app.mount('#app');