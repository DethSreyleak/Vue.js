Vue.component("kit", {
    data: function(){
        return{
            schoolName: "Kirirom Institute of Technology",
        }
    },
    methods:{
        getAscii(){
            let str = this.schoolName.split('')
            let sum = 0
            str.forEach((x) => {
                sum +=x.charCodeAt(0)
            });
            document.getElementById("showsum").innerHTML = sum
        }
    },
    template:`
        <div>
            <button @click="getAscii">Click Here</button>
            <h1 id="showsum"></h1>
        </div>`
})
var app = new Vue({
    el:"#app",
});