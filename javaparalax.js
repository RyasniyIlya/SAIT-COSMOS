let dropShadow = document.querySelectorAll('.shadow')
let dropShadow1 = document.querySelectorAll('.shadow1')
let dropShadow2 = document.querySelectorAll('.slaider__slide-img')
window.addEventListener('mousemove',function(event){
    let x = event.offsetX
    let y = event.offsetY
    for(let i = 0; i < dropShadow.length;i++ ){
        let list = dropShadow[i]
        list.style.transform = `translate(-${x/50}px,-${y/50}px)`;
    }
    
    for(let i = 0; i < dropShadow1.length;i++ ){
        let list = dropShadow1[i]
        list.style.transform = `translate(-${x/50}px,-${y/50}px)`;
    }
    for(let i = 0; i < dropShadow2.length;i++ ){
        let list = dropShadow2[i]
        list.style.transform = `translate(-${x/50}px,-${y/50}px)`;
    }
})
