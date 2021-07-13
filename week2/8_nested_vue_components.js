Vue.component('outter', {
    template: `
    <div>
        <form action="">
            <table>
                <ol>
                    <inner></inner>
                </ol>
            </table>
        </form>
    </div>
    `
})
Vue.component("inner", {
    data: function () {
        return {
            studentDetails: [{
                id: " 1 ",
                name: " Molika ",
                age: " 90 "
                },
                {
                id: " 2 ",
                name: " Dariya ",
                age: "100"
                },
                {
                id: " 3 ",
                name: " Teppy ",
                age: "109"
                },
                {
                id: " 4 ",
                name: " Ariya",
                age: " 200 "
                },
                {
                id: "5",
                name: " Boramey ",
                age: " 250 "
                }
            ]
        }
    },
    template: `

    <div>
        <li v-for="items in this.studentDetails">{{items.id}}:{{items.name}}:{{items.age}} </li>
    </div> `

})
new Vue({
    el: '#app',
});