var app = new Vue({
    el: "#app",
    data:{
        name: 'Vue.js',
        Job: "doctor"
    },
    computed:{
        computeName: function(){
            return this.name.split('').reverse().join('')
        },
        computeJob: function(){
            return this.Job.split('').reverse().join('')
        }
    },
    methods:{
        reverseString: function(){
            console.log(this.computeName)
        },
        reverseStringAlert: function(){
            alert(this.computeJob)
        }
    }
})