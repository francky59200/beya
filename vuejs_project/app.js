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