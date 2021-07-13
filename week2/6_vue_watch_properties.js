   var app = new Vue({
       el: "#app",
       data:{
           status: false,
           watchStatus: false
       },
       methods:{
           changeStatus: function(){
               this.watchStatus = this.watchStatus === false ? true: false
               this.status = this.watchStatus
           }
       },
       watch:{
           watchStatus: function(){
               alert(this.watchStatus)
           }
       }
   })