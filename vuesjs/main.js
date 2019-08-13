new Vue({
  el: '#app',
  data: {
    title: 'super intro',
    strongTag: '<strong>IMPORTANT</strong>',
    mediumTag: '<strong>bonjour comment tu vas?</strong>'
  },
  methods: {
    reversTitle: function(){
     this.title= this.title.split('').reverse().join('')
    }
  }
})

new Vue({
  el: '#vue',
  data: {
    title:'',
    counter: 0,
    tagname:''
  },
  methods :{
    increase: function(step, event){
      this.counter+=step
      this.tagname= event.target.tagName
    },
    hover: function(event){
      this.tagname= event.target.tagName
    }
  }
})

new Vue({
  el:'#computer',
  data: {
    succes: false,
    message:''
  },
  computed: { /* permet de mettre en cache une valeur
    tant qu'elle n'est pas appelé dans la fonction computed
    ce qui le differencie de meyhods*/
    cls: function(){
      console.log('cls called')
      return this.succes === true ? 'success' : 'error'
    }
  }
})

new Vue({
  el: '#style',
  data: {
    isBlue: true,
    isUnderline: true,
    color: 'red'
  },
  computed: {
    myClass: function(){
      return{
      blue: this.isBlue,
      underline: this.isUnderline
     }
    }
  }
})

new Vue({
  el:'#conditions',
  data: {
    show: false
  }
})


new Vue({
  el:'#templa',
  data: {
    color: 'yellow'
  }
})

new Vue({
  el:'#vfor',
  data: {
    names: ['jean', 'alain', 'thomas']
  }
})


new Vue ({
  el:'#vforObject',
  data: {
    names: [
    {name: 'john',
     age: 23},
     {
      name:'jane',
      age: 20
     }
    ]
  }
})

new Vue({

})
/* ici grace au script on a cree une
classe vue et on en fait une instance
grace a new et c'est a l'interieur
de cet objet qu'on va paremetrer
notre vue el est l'element qui specifie
l'endroit ou la vue va sappliquer*/

/* on a rajouter la propriéte data qui
regroupe toute les propriétés qui vont s'
appliquer sur la div*/

/* on a rajouter la propriété methods pour dynamiser nos rendus
elle aussi prend des propriétés qui peuvent être des
fonctions.*/

/* v-bind est une propriété qui permet de gerer les arguments
des élements html qu vont interagir vue js dans le dom*/

/* v-once permet de stopper l'actualistion d'une variable
elle permet de figer une variable mm s'il est affecté dans
linstanciation dans le vue js*/

/* v-html permet de rajouter du html de façon dynamique grace
a vue.js dans le dom*/

/* le paramentre event permet de recuperer le parametre de
l'evenement pour avoir le nom de la balise ici on
l'a utulisé en mouseover pour avoir le nom
de la balise et sur le js dans le html on utulise en parmetre
le $ event*/
/* le template permet de regrouper
plusieurs lignes d'une condition
afin d'éviter veau coup de v-if*/
