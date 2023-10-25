let tl = gsap.timeline()

tl.from('#nav' , {
    y : -20 ,
    opacity : 0 ,
    stagger : 0.55 ,
    duration : 0.4 ,
    delay : 0.65
})

tl.to('.item' , {
    y : 0 ,
    ease : Power2 ,
    duration : 0.55 ,
    stagger : 0.56 ,
    delay : 0.4
})


let video = document.querySelector('video')
let box = document.querySelector('#bigcircle')

function mouseenter() {

    video.addEventListener('mouseenter' ,() => {
        box.style.opacity = 1
    })

    video.addEventListener('mouseleave' ,(event) =>  {
        box.style.opacity = 0
    })

    video.addEventListener('mousemove' , (details) => {
           gsap.to(box , {
            left : details.x-70 ,
            top : details.y-80
           })
    })
}

mouseenter()