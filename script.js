

/*Navbar Produto Vertical ScrolSpy Active*/
$('#navBarVertical').on('activate.bs.scrollspy', function () {
    
  })



/*Initialize Swiper Slide*/

var swiper = new Swiper('.slide-preview', {
    slidesPerView: 5,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

/*Initialize Swiper Galery Slide*/

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });


  function openInstitucional(){
    window.location.href = "institucional.html";
  }

  function openListaProdutos(){
    window.location.href = "listaProdutos.html";
  }