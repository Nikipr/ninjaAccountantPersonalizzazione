/**
 * Created by Nicoletta on 30/10/2014.
 */

$(function(){
     $(window).scroll( function(){
         if ($(window).scrollTop() >= 100) {
             $('.navbar-default').addClass("fine");

             $('.navbar-default').removeClass("inizio");

             $('#logonero').css({
                 display: 'block'
             });

             $('#logobianco').css({
                 display: 'none'
             });

             $('.navbar-default .navbar-nav > li > a').attr('id', 'caratterineri');

             $('.btn-default').attr('id', 'bottoncinotrans');



         } else {
             $('.navbar-default').addClass("inizio");

             $('.navbar-default').removeClass("fine");

             $('#logonero').css({
                 display: 'none'
             });

             $('#logobianco').css({
                 display: 'block'
             });

             $('.navbar-default .navbar-nav > li > a').removeAttr('id', 'caratterineri');

             $('.btn-default').removeAttr('id', 'bottoncinotrans');
             $('.btn-default').attr('id', 'bottoncino');
         }
     });



    }

);



