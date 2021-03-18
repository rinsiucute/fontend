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




$('#dong5 > div > form > div.item3>button').click(function(){
    $(this).toggleClass('active');
    $('#dong5 > div > form > div.item3 > div').toggle();
})


$('#dong5 > div > form > div.item4 > button').click(function(){
    $(this).toggleClass('active');
    $('#dong5 > div > form > div.item5').toggle();
    $('#dong5 > div > form > div.item6 > button').removeClass('active');
})
$('#dong5 > div > form > div.item6 > button').click(function(){
    $(this).toggleClass('active');
    $('#dong5 > div > form > div.item5').hide();
    $('#dong5 > div > form > div.item4 > button').removeClass('active');
})