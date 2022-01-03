var app=Vue.createApp({
  data(){
    return{
      num:'',
      result:'',
    };
  },
  methods:{
   getDouble(){
     this.result=this.num*2;
    
    },
    getSquare(){
      return this.result=this.num*this.num;
    },
 
    getReset(){
     this.result='';
       this.num='';
    }
  }
});

app.mount('#app');