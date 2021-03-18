$('#dong1 > div > div.item1 > button').click(function(){
    $('#dong1 > div > div.item2').toggleClass('active');
})

$('#dong1 > div > div.item2 > div > div.product1').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    
})
    
$('#dong2>.container >.item1>button').click(function(){
    $('#dong2>.container>.item2').toggleClass('active');
})

$('.sub-menu').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    
})
            // tìm kiếm
$('#timkiem>.item1,#timkiem>.item2>button').click(function(){
    $('#timkiem').css('display', 'none');
    $('body').css('overflow','visible');
})
$('#dong2 > div > div.item2 > div.product2 > div:nth-child(1) > a').click(function(){
    $('#timkiem').css('display', 'flex');
    $('body').css('overflow','hidden');
})

                    // giỏ hàng
$('#giohang>.item1,#giohang>.item2>button').click(function(){
    $('#giohang').css('display', 'none');
    $('body').css('overflow','visible');
})
$('#dong2 > div > div.item2 > div.product2 > div:nth-child(4) > a').click(function(){
    $('#giohang').css('display', 'flex');
    $('body').css('overflow','hidden');
})
                    
                    // xem san pham

    // màu
$('#xemsanpham > div > div.item2 > div.dong4 > div:nth-child(2) > a').click(function(){
    $('#xemsanpham > div > div.item2 > div.dong4 > div:nth-child(1) > a').removeClass('active');
    $(this).addClass('active');
    document.getElementById('item2_dong3_xsp').innerHTML = 'black';
    
})
$('#xemsanpham > div > div.item2 > div.dong4 > div:nth-child(1) > a').click(function(){
    $('#xemsanpham > div > div.item2 > div.dong4 > div:nth-child(2) > a').removeClass('active');
    $(this).addClass('active');
    document.getElementById('item2_dong3_xsp').innerHTML = 'white';
    
})

// size

$('#xemsanpham>.container>.item2>.dong6>button').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    a = $(this).html(); 
    document.getElementById('item2_dong5_xsp').innerHTML = a;
    
})
//dóng mở
$('#xemsanpham>.container>button,#outlay').click(function(){
    $('#xemsanpham').css('display', 'none');
    $('#outlay').css('display', 'none');
    $('body').css('overflow','visible');
})
$('#dong7>.container>.item>.item3>button:nth-child(1)').click(function(){
    $('#xemsanpham').css('display', 'block');
    $('body').css('overflow','hidden');
    $('#outlay').css('display', 'block');
})


// đổi chũ màu đỏ
$('#dong7 > div > div > div.item3 > button').click(function(){
    $(this).toggleClass('color-red');
})

//chu và boder botom
$('#dong7 > div.text > div > a').click(function(){
    $(this).siblings().removeClass('border-text');
    $(this).addClass('border-text');
})


//Đồng hồ đém ngược
var ngay = $('#donghodemnguoc > div.ngay > div.so').html() ,
 gio = $('#donghodemnguoc > div.gio > div.so').html() ,
  phut = $('#donghodemnguoc > div.phut > div.so').html() , 
  giay = $('#donghodemnguoc > div.giay > div.so').html();
var x = setInterval(
    function demnguoc(){
        giay = giay-1 ;
        if (giay < 0){
            giay = 60;
            phut = phut -1 ;
        }
        if (phut < 0){
            phut = 60;
            gio = gio -1 ;
        }
        if (gio < 0){
            gio = 24;
            ngay = ngay -1 ;
        }
    
    
        $('#donghodemnguoc > div.ngay > div.so').html(ngay);
        $('#donghodemnguoc > div.gio > div.so').html(gio);
        $('#donghodemnguoc > div.phut > div.so').html(phut);
        $('#donghodemnguoc > div.giay > div.so').html(giay);    
        if ( giay <10 )
            $('#donghodemnguoc > div.giay > div.so').html( '0' + giay);
        if (phut < 10)
            $('#donghodemnguoc > div.phut > div.so').html( '0'+ phut);
        if (gio < 10 )
            $('#donghodemnguoc > div.gio > div.so').html(gio);
        if (ngay < 10 )
            $('#donghodemnguoc > div.ngay > div.so').html(ngay);
    }
,0.0000001);










// var swiper1  = new Swiper('#dong9>.container>.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
  


  resize =  () => {

    if(innerWidth >1200  ){
        var swiper = new Swiper('#dong4.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
          });

                //dong9
                var swiper1  = new Swiper('#dong9>.container>.swiper-container', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                    },
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                  });
                  
                
          //


    }
      if(innerWidth > 450 && innerWidth<1200  ){
        var swiper = new Swiper('#dong4.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
          });

          // dong 9
          var swiper1  = new Swiper('#dong9>.container>.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
          
        

    }
      if(innerWidth < 450  ) {
        var swiper = new Swiper('#dong4.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
          });

          //dong 9
          var swiper1  = new Swiper('#dong9>.container>.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
          
        




  }
}
addEventListener ('resize' ,resize);
addEventListener ('DOMContentLoaded' ,resize);