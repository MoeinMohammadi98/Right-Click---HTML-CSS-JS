const contextMenu = document.querySelector('.container');
const subMenu = document.querySelector('.share-menu');

document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    contextMenu.style.visibility = 'visible';

    let x = e.offsetX;
    let y = e.offsetY;

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    let cmWidth = contextMenu.offsetWidth;
    let cmHeight = contextMenu.offsetHeight;

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmWidth ? winHeight - cmWidth : y;

    if(x > (winWidth - cmWidth - subMenu.offsetWidth)){
        subMenu.style.left = '-170px'; 
    }else{
        subMenu.style.left = '260px';
    }

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
})
document.addEventListener('click', ()=>{
    contextMenu.style.visibility = 'hidden';
})