var characters = ['a','b','c','d','e','1','2','3','4','5','$','w']


function generate(){
    let password = ''
    for(let i = 0; i < 10; i++){
        password = password + characters[Math.floor(Math.random() * characters.length)]
        console.log(password)
    }

   document.querySelector('input').value = password
}

