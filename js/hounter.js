// sidebar
var toggle_bar = document.querySelector(".nav-header");
var sidebar = document.querySelector(".sidebar");

toggle_bar.addEventListener("click", function () {
  if (toggle_bar.firstElementChild.classList.contains("fa-bars")) {
    toggle_bar.firstElementChild.classList.replace("fa-bars", "fa-xmark");
  } else {
    toggle_bar.firstElementChild.classList.replace("fa-xmark", "fa-bars");
  }
  sidebar.classList.toggle("sidebaractive");
});

// autoplay video
$(document).ready(function(){
  var url = $("#myvideo").attr('src');
  
  /* Remove iframe src attribute on page load to
  prevent autoplay in background */
  $("#myvideo").attr('src', '');
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed */
  $("#exampleModal").on('shown.bs.modal', function(){
    console.log(url);
      $("#myvideo").attr('src', url);
      
  });
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#exampleModal").on('hide.bs.modal', function(){
      $("#myvideo").attr('src', '');
  });
  
});

// swiper1 owl library
const nextIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="#fff"><path d="M11.6589 5.83552C11.3886 5.83499 11.1266 5.92971 10.9185 6.10326C10.8014 6.20098 10.7045 6.321 10.6336 6.45644C10.5626 6.59188 10.5189 6.74007 10.5049 6.89254C10.4909 7.04501 10.507 7.19875 10.5521 7.34496C10.5973 7.49118 10.6707 7.62699 10.7681 7.74462L15.9509 13.9841L10.9532 20.2353C10.8571 20.3543 10.7854 20.4913 10.7421 20.6384C10.6988 20.7855 10.6848 20.9397 10.7009 21.0922C10.717 21.2448 10.7629 21.3926 10.836 21.5272C10.9091 21.6618 11.0079 21.7806 11.1267 21.8766C11.2464 21.9826 11.3866 22.0625 11.5385 22.1114C11.6903 22.1603 11.8506 22.177 12.0092 22.1607C12.1678 22.1443 12.3213 22.0951 12.4601 22.0161C12.5989 21.9372 12.72 21.8303 12.8158 21.702L18.4035 14.7175C18.5736 14.5092 18.6667 14.2479 18.6667 13.9783C18.6667 13.7087 18.5736 13.4474 18.4035 13.2391L12.6191 6.25459C12.5031 6.11371 12.3556 6.00235 12.1888 5.92954C12.022 5.85673 11.8404 5.82452 11.6589 5.83552Z" fill="white"/></svg>'
const prevIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="#fff"><path d="M17.5078 22.1645C17.7781 22.165 18.04 22.0703 18.2482 21.8967C18.3653 21.799 18.4622 21.679 18.5331 21.5436C18.6041 21.4081 18.6478 21.2599 18.6618 21.1075C18.6758 20.955 18.6597 20.8012 18.6145 20.655C18.5694 20.5088 18.496 20.373 18.3986 20.2554L13.2158 14.0159L18.2135 7.76475C18.3096 7.64567 18.3813 7.50867 18.4246 7.3616C18.4679 7.21453 18.4819 7.0603 18.4658 6.90777C18.4497 6.75524 18.4038 6.60742 18.3307 6.47281C18.2576 6.3382 18.1588 6.21945 18.0399 6.12339C17.9202 6.01741 17.7801 5.93748 17.6282 5.8886C17.4764 5.83972 17.3161 5.82295 17.1575 5.83935C16.9989 5.85574 16.8454 5.90495 16.7066 5.98388C16.5678 6.0628 16.4467 6.16975 16.3509 6.298L10.7632 13.2825C10.593 13.4908 10.5 13.7521 10.5 14.0217C10.5 14.2913 10.593 14.5526 10.7632 14.7609L16.5476 21.7454C16.6636 21.8863 16.811 21.9976 16.9779 22.0705C17.1447 22.1433 17.3263 22.1755 17.5078 22.1645Z" fill="#3C4563"</svg>/>';

$(document).ready(function(){
  $(".swiper-1").owlCarousel({
    items:3,
    stagePadding: 50,
    margin: 40,
    dots:false,
    autoWidth:true,
    loop:true,
    nav:true,
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
        items:3,
      }
  }
  });
});

// swiper2 owl library
$(document).ready(function(){
  $(".swiper-2").owlCarousel({
    stagePadding: 50,
    loop:true,
    center:true,
    margin: 56,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
        items:1.8,
      }
  }
  });
});


//  initialize AOS
AOS.init();


