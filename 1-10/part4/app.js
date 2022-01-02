var app=Vue.createApp({
  data:function(){
    return {
      msg:'Welcome to Vue js3',
      tutorialInfo:{
        name:"Vuejs 3",
        githubLink:'https://github.com/rakib10ms',
      },
      htmlCode:'<a href="https://github.com/rakib10ms">',
    }
  }
});

app.mount('#app');