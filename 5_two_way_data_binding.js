var app = new Vue({
    el: "#app",
    data:{
        name: '',
        age: ''
    },
    methods:{
        logName: function(){
            console.log('You enter your name');
        },
        logAge: function(){
            console.log('You enter your age');
        }
    }
});