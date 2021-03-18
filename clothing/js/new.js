$('#dong1 > div > div.item1 > button').click(function() {
    $('#dong1 > div > div.item2').toggleClass('active');
})

$('#dong1 > div > div.item2 > div > div.product1').click(function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');

})

$('#dong2>.container >.item1>button').click(function() {
    $('#dong2>.container>.item2').toggleClass('active');
})

$('.sub-menu').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');

    })
    // tìm kiếm
$('#timkiem>.item1,#timkiem>.item2>button').click(function() {
    $('#timkiem').css('display', 'none');
    $('body').css('overflow', 'visible');
})
$('#dong2 > div > div.item2 > div.product2 > div:nth-child(1) > a').click(function() {
    $('#timkiem').css('display', 'flex');
    $('body').css('overflow', 'hidden');
})

// giỏ hàng
$('#giohang>.item1,#giohang>.item2>button').click(function() {
    $('#giohang').css('display', 'none');
    $('body').css('overflow', 'visible');
})
$('#dong2 > div > div.item2 > div.product2 > div:nth-child(4) > a').click(function() {
    $('#giohang').css('display', 'flex');
    $('body').css('overflow', 'hidden');
})
//  bang size
$('#vienngoai,#close').click(function() {
    $('#bangsize').removeClass('active');
    document.getElementById("bangsize").classList.remove('active');
    $('body').css('overflow', 'visible');
})


$('#dong4 > div > div.item2 > div> div > div > div > div:nth-child(2) > p>a,#bangsize>.conten,#dong3 > div:nth-child(2) > div.item2 > p > a').click(function() {
    $('#bangsize').addClass('active');
    $('body').css('overflow', 'hidden');
})
// xem san pham

// màu
$('#xemsanpham > div > div.item2 > div.dong4 > div:nth-child(2) > a').click(function() {
    $('#xemsanpham > div > div.item2 > div.dong4 > div:nth-child(1) > a').removeClass('active');
    $(this).addClass('active');
    document.getElementById('item2_dong3_xsp').innerHTML = 'black';

})
$('#xemsanpham > div > div.item2 > div.dong4 > div:nth-child(1) > a').click(function() {
    $('#xemsanpham > div > div.item2 > div.dong4 > div:nth-child(2) > a').removeClass('active');
    $(this).addClass('active');
    document.getElementById('item2_dong3_xsp').innerHTML = 'white';

})

// size

$('#xemsanpham>.container>.item2>.dong6>button').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        a = $(this).html();
        document.getElementById('item2_dong5_xsp').innerHTML = a;

    })
    //dóng mở
$('#xemsanpham>.container>button,#outlay').click(function() {
    $('#xemsanpham').css('display', 'none');
    $('#outlay').css('display', 'none');
    $('body').css('overflow', 'visible');
})
$('#dong7>.container>.item>.item3>button:nth-child(1)').click(function() {
    $('#xemsanpham').css('display', 'block');
    $('body').css('overflow', 'hidden');
    $('#outlay').css('display', 'block');
})



//#dong4>.container>.item1>.product>button



$('#dong4>.container>.item1>.sub_menu1>.tieude').click(function(){
    $(this).parent().toggleClass('active');
})




$('#dong4>.container>.item1>.sub_menu1>.sub_menu2>.tieude').click(function(){
    $(this).parent().toggleClass('active');
    $(this).parent().siblings().removeClass('active');
})


//#dong4>.container>.item1>.sub_menu1>.sub_menu2>.sub_menu3>div>button
$('#dong4>.container>.item1>.sub_menu1>.sub_menu2>.sub_menu3>div>button').click(function(){
    $(this).toggleClass('active');
})

//#dong4 > div > div.item1 > div > div.sub_menu2 > div.check>button
$('#dong4 > div > div.item1 > div > div.sub_menu2 > div.check>button').click(function(){
    $(this).parent().toggleClass('active');
})

//#dong4 > div > div.item1 > div.sub_menu1 > div.sub_menu2 > button
$('#dong4 > div > div.item1 > div.sub_menu1 > div.sub_menu2 > button').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})

//#dong4 > div > div.item1 > div:nth-child(4) > div.sub_menu2 > div>button
$('#dong4 > div > div.item1 > div:nth-child(4) > div.sub_menu2 > div>button').click(function(){
    $(this).parent().toggleClass('active');
})

//#dong4 > div > div.item1 > div.sub_menu1.active > div.sub_menu2 > form > input
$("#dong4 > div > div.item1 > div.sub_menu1 > div.sub_menu2 > form > input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    console.log(value);
    $("#dong4 > div > div.item1 > div:nth-child(5) > div.sub_menu2 > div > p").filter(function() {
      $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



