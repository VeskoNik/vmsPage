function page() {
        debugger
        const parent = document.querySelector('.slideshow-container')
        const links = localStorage.getItem('links').split(',')
        localStorage.clear()
        for(let i = links.length-1 ; i>=0 ; i--){
                const img = document.createElement('img');
                img.src = links[i];
                img.className = 'mySlides'
                img.style.height = '440px'
                img.style.width = '390px'
                parent.prepend(img)
        }
}
