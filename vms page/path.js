function onClick(event) {

  const clicked = event.target
  const parent = clicked.parentElement
  const [textArea, otherChildren] = Array.from(parent.children)
  const imgLinks = textArea.textContent;
  solve();
  function solve() {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');
    const body = document.getElementById('body');
    document.getElementById('main-page-css').disabled = true;
    document.getElementById('sale-page-css').disabled = true;
    main.remove();
    header.remove();
    if (footer != null) {
      footer.remove()
    }

    document.getElementById('shirts-page-css').disabled = false;
    const headerShirts = document.createElement('header');
    headerShirts.id = 'header';
    const divShirts = document.createElement('div');
    divShirts.classList.add('slideshow-container');
    const buttonPrev = document.createElement('button');
    buttonPrev.classList.add('prev');
    buttonPrev.innerHTML = '&#8678;'
    const buttonNext = document.createElement('button');
    buttonNext.classList.add('next');
    buttonNext.innerHTML = '&#8680;';
    divShirts.appendChild(buttonPrev);
    divShirts.appendChild(buttonNext);
    headerShirts.appendChild(divShirts);
    const buttonBack = document.createElement('button');
    buttonBack.id = 'Back';
    buttonBack.innerHTML = 'Back';
    headerShirts.appendChild(buttonBack)
    body.appendChild(headerShirts);

    page();

    function page() {

      const links = imgLinks.split(',');
      for (let i = links.length - 1; i >= 0; i--) {

        const img = document.createElement('img');
        img.src = links[i];
        img.className = 'mySlides';
        img.style.height = '440px';
        img.style.width = '390px';
        divShirts.prepend(img);
      }
    }
    buttonNext.addEventListener('click', () => { plusSlides(1) })
    buttonPrev.addEventListener('click', () => { plusSlides(-1) })
    buttonBack.addEventListener('click', () => { window.location.reload() });
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(num) {

      showSlides(slideIndex += num);
    }

    function showSlides(num) {

      let slides = document.getElementsByClassName("mySlides");
      if (num > slides.length) {
        slideIndex = 1
      }
      if (num < 1) {
        slideIndex = slides.length
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";

    }
  }


}
