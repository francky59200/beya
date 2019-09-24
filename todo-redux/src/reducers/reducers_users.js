export default function(){
    return [
        {name: 'Sarah Croche', id:1, role:'ROOT', active: 'NON'},
        {name: 'Eléonore Labanquise', id:2, role:'USER', active: 'OUI'},
        {name: 'Emma Karena', id:3, role:'USER', active:'NON'},
        {name: 'Jean Bonnot', id:4, role:'ADMIN', active:'OUI'}
    ]
}

//**************************Les reducers************************ */

// les reducers sont des morceaux du state de l'application en gros ce sont des fonctions qui retournent un bout
// du state de notre application ici par exemple reducers_users.js est un reducers qui a la liste de notre application