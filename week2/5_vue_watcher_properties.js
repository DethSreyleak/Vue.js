var app = new Vue({
    el: "#app",
    data() {
       return {
           a: 200,
           b: 300,
           msg: "Hello I\'m Avelx Please Calculate this Number"
       } 
    },
    computed:{
        computedProp: function(){
            return (this.a/2) + (this.b/2);
        },
        reverseMessage: function(){
            return this.msg.split('').reverse().join('');
        }
    },
    watch:{
        a: function(){
            alert("A value was Change.");
        },
        computedProp: function(){
            alert("Computed Value is now different.")
        }
    }
})