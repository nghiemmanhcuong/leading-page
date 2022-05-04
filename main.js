const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const accordionHeaders = Array.from($$('.accordion-header'));
accordionHeaders.forEach((accordionHeader) => {
    accordionHeader.onclick = () => {
        const accordionBody = accordionHeader.nextElementSibling;
        const accordionButton = accordionHeader.lastChild.querySelector('i');
        accordionBody.classList.toggle('slideDown');
        accordionButton.classList.toggle('fa-plus');
        accordionButton.classList.toggle('fa-times');
    };
});

$('#header-show').onclick = () => {
    $('.menu').classList.toggle('show');
    $('#header-show > i').classList.toggle('fa-bars');
    $('#header-show > i').classList.toggle('fa-times');
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        $('.menu').classList.remove('show');
        $('#header-show > i').classList.remove('fa-times');
        $('#header-show > i').classList.add('fa-bars');
    }
    
    if (window.scrollY > 1200) {
        $('#to-top').classList.add('show');
    }else {
        $('#to-top').classList.remove('show');
    }
});

$('#to-top').onclick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
