$('body > header > div.ngonngu > a:nth-child(1)').click(function(){
    $('body > header > div.menu > a:nth-child(1)').html('Services');
    $('body > header > div.menu > a:nth-child(2)').html('Gallery');
    $('body > header > div.menu > a:nth-child(3)').html('Contact');
    // main
    $('body > main > div.dong2 > div > h2').html('Our Vision');
    $('body > main > div.dong2 > div > span').html('Maison Jin creates beautify modern classic and neoclassical style interior spaces that enhance the lives of and offer inspiration to our clients. We are committed to satisfying our clients by offering the highest level of service and understanding our clients’ needs. ');
     
    $('body > main > div.dong4 > p').html('Maison Jin Interiors portrays the art of elegance by bringing your home a sense of personalized style in a seamless blend of character and warmth.');
    $('body > main > div.dong4 > h2').html('ABOUT US');
    $('body > main > div.dong4 > h5').html('Maison Jin Furniture Co., Ltd. was founded in Hanoi, Vietnam in 2018 by Jin Hoang and Ha Nguyen. Maison Jin offers modern classic and neoclassic style interior design and installation services, furniture and decorative accessories. The company’s designers, educated in the United States, Denmark and Canada, combine the latest design concepts and industry knowledge to create luxurious and timeless living spaces for clients.');
      
    $('body > main > div.dong4 > a').html('Learn More');    

    $('body > main > div.dong7 > h2').html('Want To Know More?');
    $('body > main > div.dong7 > p').html('Our home is in Hanoi but if you desire our Interior Design Services elsewhere in Vietnam, don’t hesitate to inquire. We look forward to crafting your vision into the masterpiece it deserves to be. ');
    $('body > main > div.dong7 > a').html('Contact Us');
    
});

//tiếng việt :))

$('body > header > div.ngonngu > a:nth-child(3)').click(function(){
    $('body > header > div.menu > a:nth-child(1)').html('Dịch vụ');
    $('body > header > div.menu > a:nth-child(2)').html('Thư viện ảnh');
    $('body > header > div.menu > a:nth-child(3)').html('Liên Hệ');
    // main
    $('body > main > div.dong2 > div > h2').html('Tầm nhìn');
    $('body > main > div.dong2 > div > span').html('Maison Jin tạo ra những không gian sống theo hai phong cách nội thất tân cổ điển (modern classic) và phong cách nội thất thế kỷ XVIII (neoclassical) mang lại cho khách hàng những trải nghiệm thú vị để tận hưởng cuộc sống. Chúng tôi cam kết sẽ làm hài lòng khách hàng với sự thấu hiểu cùng những dịch vụ tốt nhất.');
     
    $('body > main > div.dong4 > p').html('Nội thất Maison Jin mang đến sự thanh lịch cho ngôi nhà của bạn bằng cách&nbsp;kết hợp&nbsp;giữa phong cách cá nhân và chiều sâu&nbsp;thẩm mỹ.');
    $('body > main > div.dong4 > h2').html('Giới thiệu');
    $('body > main > div.dong4 > h5').html('Công ty TNHH nội thất Maison Jin được thành lập năm 2018 tại Hà Nội, Việt Nam do hai nhà sáng lập Jin Hoàng và Hà Nguyễn. Chúng tôi thiết kế và cung cấp nội thất trọn gói hai phong cách nội thất modern classic và neoclassic. Đội ngũ thiết kế của công ty tốt nghiệp từ những quốc gia uy tín như Mỹ, Đan Mạch và Canada. Cùng với sự cập nhất mới nhất về chuyên môn, Maison Jin mang đến cho khách hàng không gian sống sang trọng và bền vữg theo thời gian.&nbsp;');
      
    $('body > main > div.dong4 > a').html('Chi tiết');    

    $('body > main > div.dong7 > h2').html('Hiểu thêm về chúng tôi?');
    $('body > main > div.dong7 > p').html('Showroom của chúng tôi ở Hà Nội nhưng nếu bạn quan tâm đến dịch vụ thiết kế nội thất ở những tỉnh thành khác, đừng ngại liên lạc. Chúng tôi mong muốn được tạo ra những kiệt tác xứng đáng với ý tưởng của bạn.');
    $('body > main > div.dong7 > a').html('Liên Hệ');
    
});



// modal img 

$('body > main > div.dong4 > div > div.item').click(function(){

    var vitri = $(this).index() + 1 ;
    $('.modalhinhanh>div.hinhanh>div.item:nth-child('+vitri+')').siblings().removeClass('active');
    $('.modalhinhanh>div.hinhanh>div.item:nth-child('+vitri+')').addClass('active');
    // hiện modal
    $('body').css('overflow','hidden');
    $('.modalhinhanh').css('display' , 'flex');
});



$('.modalhinhanh>.item:nth-child(1)').click(function(){
    var vthinhdanghien = $('.modalhinhanh>div.hinhanh>div.item.active').index() + 1;
    var pev = vthinhdanghien -1;
    if(pev==0){
        pev=9;
    }
    $('.modalhinhanh>div.hinhanh>div.item').removeClass('active');
    
    $('.modalhinhanh>div.hinhanh>div.item:nth-child('+pev+')').addClass('active');
    
});

$('.modalhinhanh>.item:nth-child(3)').click(function(){
    var vthinhdanghien = $('.modalhinhanh>div.hinhanh>div.item.active').index() + 1;
    var pev = vthinhdanghien +1;
    if(pev==10){
        pev=1;
    }
    $('.modalhinhanh>div.hinhanh>div.item').removeClass('active');
    $('.modalhinhanh>div.hinhanh>div.item:nth-child('+pev+')').addClass('active');

});


$('div.modalhinhanh > div.dong').click(function(){
    $('body').css('overflow','scroll');
    $('.modalhinhanh').css('display' , 'none');
});


// hiệu ứng scoll

$(window).scroll(function(){
    var docaomanhinh = screen.height;
    var khoangcachtop = $('html,body').scrollTop();
    console.log(khoangcachtop);


    // 
    var a=  $('body > main > div.dong2 > div').offset().top;
    if (khoangcachtop > a - 2*docaomanhinh/3){
        $('main>.dong2>div').animate({opacity: 1},'5000');
        
    }
    //
    var b=  $('body > main > div.dong4 > p').offset().top;
    if (khoangcachtop > b - 2*docaomanhinh/3){
        $('body > main > div.dong4 > p').animate({opacity: 1},'5000');
        
    }
    //
    var b=  $('body > main > div.dong4 > h2').offset().top;
    if (khoangcachtop > b - 2*docaomanhinh/3){
        $('body > main > div.dong4 > h2').animate({opacity: 1},'5000');
        
    }
    var b1=  $('body > main > div.dong4 > h5').offset().top;
    if (khoangcachtop > b1 - 2*docaomanhinh/3){
        $('body > main > div.dong4 > h5').animate({opacity: 1},'5000');
        
    }
    var b2=  $('body > main > div.dong4 > a').offset().top;
    if (khoangcachtop > b2 - 2*docaomanhinh/3){
        $('body > main > div.dong4 > a').animate({opacity: 1},'5000');
        
    }

    //
    var c=  $('main>.dong6').offset().top;
    if (khoangcachtop > c - 2*docaomanhinh/3){
        $('main>.dong6').animate({opacity: 1},'5000');
        
    }

    var d=  $('body > main > div.dong7').offset().top;
    if (khoangcachtop > d - 2*docaomanhinh/3){
        $('body > main > div.dong7').animate({opacity: 1},'5000');
        
    }









});



// check email


//var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// $('footer>form').submit(function(){
//     var email = $('footer>form>input').val();
//     console.log(email);
//     alert(email);
//     return true;
// })

// function kiemtra(){
//     var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var email = $('footer>form>input').val();
//     if(re.test(email)){
//         alert('ok');
//     }
//     else{
//         console.log(email);
//     }
// }

//kiemtra();

// $('footer>form').submit(function(e){
//     var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var email = $('footer>form>input').val();
//     var kt = re.test(input.val());
//     if(!kt){
//         e.preventDefault();
//         console.log('la');
        
//     }
//     else{
//         console.log('aaa');
//         //e.preventDefault();
//     }

// })


$('body > footer>.container > form > button').click(function(){
    var reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = $('body > footer> .container > form > input').val();

    if(reg.test(email)){
        $('.thongbaothanhcong').css('display' , 'block');
        $('form').css('display' , 'none');
        return true;
    }
    else{
        $('#thongbao').css('display', 'block');
        return false;
    }
})



// back to top

$('body > footer > div > div.thongtin > div.item1 > div').click(function(){
    $('html,body').animate({scrollTop : 0}, '300');
})