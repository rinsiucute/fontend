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
   