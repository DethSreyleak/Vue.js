var app = new Vue({
    el: "#app",
    data:{
        message: "Hello World"
    },
    methods:{
        mouseover(){
            this.message = this.message.split('').reverse().join('');
        },
        mouseleave: function(){
            this.message = this.message.split('').reverse('').join('');
        }
    }
})