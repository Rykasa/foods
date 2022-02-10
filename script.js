document.querySelector('.menu').addEventListener('click', () =>{
    document.querySelectorAll('.target').forEach((item) =>{
        item.classList.toggle('change')
    })
})



const icons = document.querySelectorAll('.section-1-icons i')
let i = 1 //contador para verificar quando a lista chegar ao fim

//setInterval recebe 2 argumentos o primeiro é uma função que executa repetidamente e
//o segundo é o intervalo entre essas repetições
setInterval(() => {
    i++

    const icon = document.querySelector('.section-1-icons .change')

    icon.classList.remove('change')

    if(i > icons.length){
        icons[0].classList.add('change')
        i = 1
    }else{
        icon.nextElementSibling.classList.add('change')
    }

}, 4000)