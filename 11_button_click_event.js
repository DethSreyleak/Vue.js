var app = new Vue({
    el: "#app",
    data:{
        count: 0
    },
    methods:{
        increase: function(){
            this.count++;
        },
        decrease: function(){
            this.count--;
        },
        reset: function(){
            this.count=0;
        }
    }
})