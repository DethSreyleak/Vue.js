 var app = new Vue({
     el: "#app",
     data:{
         message:'Hello World',
         mystyle1:{
             color: 'blue',
             fontsize: '30px',
         }
     },
     methods:{
         mouseover: function(){
            this.mystyle1.color="red"
            this.mystyle1.fontsize="100px"
         },
         mouseleave: function(){
            this.mystyle1.color="blue"
            this.mystyle1.fontsize="30px"
         }
     }
 })