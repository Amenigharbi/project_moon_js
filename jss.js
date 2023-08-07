let stars=document.getElementById('stars')
let moon=document.getElementById('moon')
let mount3=document.getElementById('mount3')
let mount4=document.getElementById('mount4')
let river=document.getElementById('river')
let boat=document.getElementById('boat')
let titre=document.querySelector('.titre')

window.onscroll=function()
{
    let valeur=scrollY;
    stars.style.left=valeur+'px';
    moon.style.top=valeur * 4+'px';
    mount3.style.top=valeur * 1.5+'px';
    mount4.style.top=valeur*1.2+'px';
    river.style.top=valeur+'px';
    boat.style.top=valeur+'px'
    boat.style.left=valeur*4+'px'
    titre.style.fontSize=valeur+'px'
    if(scrollY>=58)
    {
        titre.style.fontSize=58+'px';
        titre.style.position='fixed';
        if(scrollY>=459)
        {
            titre.style.display='none';
        }else
        {
            titre.style.display='block'; 
        }
        if(scrollY>=174)
        {
            document.querySelector('main').style.backgroundColor='blue'
        }
        else{
            document.querySelector('main').style.backgroundColor='linear-gradient(#000000,rgb(150, 14, 91))'
        }
    }
}

