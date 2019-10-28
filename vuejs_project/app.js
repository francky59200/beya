"use strict"

new Vue({
    el: '#app',
    data:{
        message: 'bonjour comment tu vas',
        link: 'https://franckbeya.fr',
        success: true,
        persons:['pierre', 'eric', 'jonathan', 'lucas', 'marc']
    },
    methods:{
        close: function (){
            this.success= false
        }
    }
})

// create a component and template

Vue.component('button-count', {
    data: function(){
        return {
            count: 0
        }
    },
    template: `<div>
    <p>{{count}}</p>
    <button @click="count++">vous avez cliqué</button>
    </div>`

})

new Vue({ el: '#counter'})