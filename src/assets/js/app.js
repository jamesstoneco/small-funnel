import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


$('.scroll-anchor').on('click', function() {
  console.log( $('#' + $(this).data('target')) );
  
  $('html,body').animate({scrollTop: $('#' + $(this).data('target')).offset().top - 25}, 2000);
});

// function scrollToAnchor(aid){
//     var aTag = $("a[name='"+ aid +"']");
//     $('html,body').animate({scrollTop: aTag.offset().top},'slow');
// }

// scrollToAnchor('id3');
