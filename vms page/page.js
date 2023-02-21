function sale() {

        const header = document.getElementById('header');
        const main = document.getElementById('main');
        const footer = document.getElementById('footer');
        const body = document.getElementById('body');
        document.getElementById('main-page-css').disabled = true;


        header.remove();
        main.remove();
        footer.remove();

        createHeader();
        createMain();
        document.getElementById('sale-page-css').disabled = false;
        function createHeader() {
                const headerSale = document.createElement('header')
                headerSale.id = 'header'
                const h1 = document.createElement('h1');
                h1.classList.add('SALE');
                h1.innerHTML = "SALE";
                const button = document.createElement('button');
                button.addEventListener('click', () => window.location.reload());
                button.innerHTML = 'Back';
                button.id = "Back";
                headerSale.appendChild(h1);
                headerSale.appendChild(button);
                body.appendChild(headerSale);
        }
        function createMain() {

                const mainSale = document.createElement('main')
                mainSale.id = 'main'
                const ul = document.createElement('ul');
                const div1 = document.createElement('div');
                const textarea1 = document.createElement('textarea');
                textarea1.textContent = 'PAGE_T-SHIRTS/DIESEL_PURPLE_VMS.jpeg,PAGE_T-SHIRTS/DSL_PURPLE_PAGE_01.jpeg,PAGE_T-SHIRTS/DSL_PURPLE_PAGE_02.jpeg,PAGE_T-SHIRTS/DSL_PURPLE_PAGE_03.jpeg';
                const li1 = document.createElement('li');
                li1.classList.add('first-T-shirt');
                const p1 = document.createElement('p');
                p1.textContent = '40,99лв'
                li1.appendChild(p1);
                div1.appendChild(textarea1);
                div1.appendChild(li1);



                const div2 = document.createElement('div');
                const textarea2 = document.createElement('textarea');
                textarea2.textContent = 'PAGE_T-SHIRTS/RC_CHEETAH_WHITE_VMS.jpeg,PAGE_T-SHIRTS/RCWHITE_CHEETAH_1.jpg,PAGE_T-SHIRTS/RCWHITE_CHEETAH_2.jpg,PAGE_T-SHIRTS/RCWHITE_CHEETAH_3.jpg,PAGE_T-SHIRTS/RCWHITE_CHEETAH_4.jpg';
                const li2 = document.createElement('li');
                li2.classList.add('second-T-shirt');
                const p2 = document.createElement('p');
                p2.textContent = '59,99лв'
                li2.appendChild(p2);
                div2.appendChild(textarea2);
                div2.appendChild(li2);


                const div3 = document.createElement('div');
                const textarea3 = document.createElement('textarea');
                textarea3.textContent = 'PAGE_T-SHIRTS/CK_VMS.jpeg,PAGE_T-SHIRTS/CK_PAGE-01.jpeg,PAGE_T-SHIRTS/CK_PAGE_02.webp,PAGE_T-SHIRTS/CK_2.jpg';
                const li3 = document.createElement('li');
                li3.classList.add('third-T-shirt');
                const p3 = document.createElement('p');
                p3.textContent = '40,99лв'
                li3.appendChild(p3);
                div3.appendChild(textarea3);
                div3.appendChild(li3);

                const div4 = document.createElement('div');
                const textarea4 = document.createElement('textarea');
                textarea4.textContent = 'PAGE_T-SHIRTS/RC_EAGLE_VMS.jpeg,PAGE_T-SHIRTS/RCWHITE_BIRD_1.jpg,PAGE_T-SHIRTS/RCWHITE_BIRD_BACK.jpg';
                const li4 = document.createElement('li');
                li4.classList.add('fourth-T-shirt');
                const p4 = document.createElement('p');
                p4.textContent = '59,99лв'
                li4.appendChild(p4);
                div4.appendChild(textarea4);
                div4.appendChild(li4);

                const div5 = document.createElement('div');
                const textarea5 = document.createElement('textarea');
                textarea5.textContent = 'PAGE_T-SHIRTS/RC_CHEETAH_BLACK_VMS.jpeg,PAGE_T-SHIRTS/RCBLACK_CHEETAH_3.jpg,PAGE_T-SHIRTS/RCBLACK_CHEETAH_copy.jpg,PAGE_T-SHIRTS/RCBLACK_CHEETAH_4.jpg';
                const li5 = document.createElement('li');
                li5.classList.add('fifth-T-shirt');
                const p5 = document.createElement('p');
                p5.textContent = '59,99лв'
                li5.appendChild(p5);
                div5.appendChild(textarea5);
                div5.appendChild(li5);
                ul.appendChild(div1);
                ul.appendChild(div2);
                ul.appendChild(div3);
                ul.appendChild(div4);
                ul.appendChild(div5);
                mainSale.appendChild(ul);
                body.appendChild(mainSale);
                li1.addEventListener('click', onClick);
                li2.addEventListener('click', onClick);
                li3.addEventListener('click', onClick);
                li4.addEventListener('click', onClick);
                li5.addEventListener('click', onClick);


        }
}
