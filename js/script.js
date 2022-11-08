'use strict'

/*
random mail API
https://flynn.boolean.careers/exercises/api/random/mail
*/

const app = Vue.createApp({
    data() {
        return {
            mailList: [],
            created: false,
        }
    },
    computed:{

    },
    methods: {
        listCreation(){
            const creatingMailList = [];
            for(let i=0; i<10 ; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((answ)=>{
                    creatingMailList.push(answ.data.response);
                    if(creatingMailList.length === 10){
                        this.mailList = {...creatingMailList};
                        this.created = true
                    }
                });
            }    
        }
    },
    mounted() {
        this.listCreation()
    },
})
app.mount('#app');