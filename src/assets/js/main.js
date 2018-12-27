// $('ul.content-center-tabs').delegate('li:not(.current)', 'click', function() {
//     $(this).addClass('current').siblings().removeClass('current').parents('div.content-center-chart').find('div.box').hide().eq($(this).index()).fadeIn(300);
// });







// $('ul.content-orders-tabs').delegate('li:not(.current)', 'click', function() {
//     $(this).addClass('current').siblings().removeClass('current').parents('div.content-center-orders').find('div.box').hide().eq($(this).index()).fadeIn(300);
// });












// $(".top-currency-btn").click(function(e) {
//     $(".top-currency-dropdown").toggleClass('top-currency-dropdown-open');
//     return false;
// });
// $('.top-currency-dropdown').click(function(e) {
//     e.stopPropagation();
// });
// $(document).click(function(e) {
//     $('.top-currency-dropdown').removeClass('top-currency-dropdown-open');
// });





// $(".button-sell").click(function() {
//     $(this).addClass('button-sell-live');
//     $(".button-buy").addClass('button-buy-die');
// });
// $(".button-buy").click(function() {
//     $(".button-sell").removeClass('button-sell-live');
//     $(this).removeClass('button-buy-die');
// });




// /*
// $('ul.responcive-tabs').delegate('li:not(.current)', 'click', function() {
//     $(this).addClass('current').siblings().removeClass('current').parents('body').find('div.box-responcive').hide().eq($(this).index()).fadeIn(300);
// });
// */







// // For the responsive
// $(function() {
//     doSomethingUseful();
//     $(window).resize(doSomethingUseful);
// });
// function doSomethingUseful() {
//     /*
//     if(document.body.clientWidth < 840)
//     {
//         $(init);
//         function init() {
//             $('.left-top-menu').append($('.login'));
//             $('.left-top-menu').append($('.register'));
//         }
//     }
//     else
//     {
//         $(init);
//         function init() {
//             $('#top').append($('.login'));
//             $('#top').append($('.register'));
//         }
//     }
//     */
//     if(document.body.clientWidth < 600)
//     {
//         $(init);
//         function init() {
//             $('.pos-rel').append($('.left-content-tabs'));
//             $('.left-top').after($('.top-currency'));
//             $('#top').after($('.left-content-block'));
//             $('.left-content').removeClass('visible1');
//             $('.left-content').addClass('visible');
//             $('.content-left').removeClass('visible');
            
//             $('ul.left-content-tabs').delegate('li:not(.current)', 'click', function() {
//                 $(this).addClass('current').siblings().removeClass('current').parents('div.left-content').find('div.box').hide().eq($(this).index()).fadeIn(300);
//             });
            
//             $('ul.responcive-tabs li').removeClass('current');
            
//             $('ul.responcive-tabs').delegate('li:not(.current1)', 'click', function() {
//                 $(this).addClass('current1').siblings().removeClass('current1').parents('body').find('div.box-responcive').hide().eq($(this).index()).fadeIn(300);
//             });
            
//             $('#content').append($('.left-top-menu'));
//         }
//     }
//     else
//     {
//         $(init);
//         function init() {
//             $('.left-content').after($('.left-content-tabs'));
//             $('.top-last-price').before($('.top-currency'));
//             $('.left-top').after($('.left-content-block'));
//             $('.left-content').addClass('visible1');
//             $('.left-content').removeClass('visible');
//             $('.content-left').addClass('visible');
            
            
//             $('ul.left-content-tabs').delegate('li:not(.current)', 'click', function() {
//                 $(this).addClass('current').siblings().removeClass('current').parents('div#left').find('div.box').hide().eq($(this).index()).fadeIn(300);
//             });
            
//             $('ul.responcive-tabs li').removeClass('current1');
//             $('ul.responcive-tabs li:first').addClass('current1');
//             $('ul.responcive-tabs li:eq(1)').addClass('current');
            
//             $('ul.responcive-tabs').delegate('li:not(.current)', 'click', function() {
//                 $(this).addClass('current').siblings().removeClass('current').parents('body').find('div.box-responcive').hide().eq($(this).index()).fadeIn(300);
//             });
            
//             $('.left-top').append($('.left-top-menu'));
//         }
//     }
    
// }




