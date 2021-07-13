var app = new Vue({
    el: "#app",
    data: {
        name: "Tida",
        job: "doctor"
    },
    methods:{
        clickhere: () =>{
            alert("Hello From The Vue Methods")
        },
        greet: function(time){
            return 'Good' + time + " " + this.name;
        }
    }
})