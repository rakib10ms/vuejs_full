
function start(){
  console.log('start!');
}
function process(callback){
setTimeout(function(){
        console.log('process!');
        callback();
      },2000);
 }

function finish(){
  console.log('finished!');
}

start();
process(function(){
  finish();
});


var myInfo={
  name:'Rakib Hossain',
  web:'www.rakib10ms.com',
  skills:['c','javascript','php','c++'],
  friends:[
  {name:'sakib',web:'www.sakib.com'},
  {name:'tareq',web:'www.tareq.com'},
  {name:'aakib',web:'www.aakib.com'},
  ],
}

console.log(myInfo.friends[0].name);
console.log(myInfo.skills[0]);