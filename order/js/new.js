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
// ================================================================================
$('#link>a').click(function(){
    var a = document.querySelectorAll('#link>a');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var b = $(this).index()+1;
    
    $('#nd>div:nth-child('+b+')').siblings().hide();
    $('#nd>div:nth-child('+b+')').show();

})

//===========================================

$('#personal > form > div.dong3 > div:nth-child(2) > div > button').click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
})