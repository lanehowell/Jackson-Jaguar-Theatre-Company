const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>{
    observer.observe(el)
})

const observerUp = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-up')
        }else{
            entry.target.classList.remove('show-up')
        }
    })
})

const hiddenUpElements = document.querySelectorAll('.hidden-up')
hiddenUpElements.forEach((el)=>{
    observerUp.observe(el)
})