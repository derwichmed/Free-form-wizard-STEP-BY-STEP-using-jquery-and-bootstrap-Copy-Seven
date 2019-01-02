$(function (){
   nbrStep = 0; 
   $('.nxt_step').click(function (){
       $(window).scrollTop(0);
       $('.form_wizard_item').eq(nbrStep).hide();
       $('.wizard_header .lst_steps .item').eq(nbrStep)
               .css('background-color','transparent');
       nbrStep = nbrStep + 1;
       $('.wizard_header .lst_steps .item').eq(nbrStep)
               .css('background-color','#525252');
       $('.wizard_header .lst_steps .item').eq(nbrStep)
               .find('img').
               attr('src',$('.wizard_header .lst_steps .item').eq(nbrStep)
               .find('img').attr('hover-img'));
       $('.wizard_header .lst_steps .item').eq(nbrStep).css('color','#f4880a');
       $('.form_wizard_item').eq(nbrStep).show();
   });
   
   
   $('.pre_step').click(function (){
       $(window).scrollTop(0);
       $('.form_wizard_item').eq(nbrStep).hide();
       $('.wizard_header .lst_steps .item').eq(nbrStep)
               .css('background-color','transparent');
       
       $('.wizard_header .lst_steps .item').eq(nbrStep)
               .find('img').
               attr('src',$('.wizard_header .lst_steps .item').eq(nbrStep)
               .find('img').attr('init-img'));
       $('.wizard_header .lst_steps .item').eq(nbrStep).css('color','white');
       
       
       
       
       nbrStep = nbrStep - 1;
       $('.wizard_header .lst_steps .item').eq(nbrStep)
               .css('background-color','#525252');
       $('.wizard_header .lst_steps .item').eq(nbrStep)
               .find('img').
               attr('src',$('.wizard_header .lst_steps .item').eq(nbrStep)
               .find('img').attr('hover-img'));
       $('.wizard_header .lst_steps .item').eq(nbrStep).css('color','#f4880a');
       $('.form_wizard_item').eq(nbrStep).show();
   });
   
});