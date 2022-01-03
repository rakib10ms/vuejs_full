var app=Vue.createApp({
  data(){
    return{
      name:'',
    };
  },
  methods:{
    handleKeyUp(e){
      this.name=e.target.value;
      console.log(this.name)
    },
    handleFormSubmit(e){
    console.log("form submitted");
    },
    handleCardClick(e){
 console.log('card clicked');
    },
    handleViewClick(e){
      // e.stopPropagation();
      console.log('view clicked');
    }
  }
});

app.mount('#app');