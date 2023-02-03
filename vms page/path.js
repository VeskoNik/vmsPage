function onClick(event){
    debugger
    const clicked = event.target
    const parent = clicked.parentElement
    const [textArea,otherChildren] = Array.from(parent.children)
    const imgLinks = textArea.textContent ;
    localStorage.setItem("links",imgLinks)
}
