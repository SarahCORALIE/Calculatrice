$(document).ready(function()
{   
//Calculatrice
//---------------------------------
    $('#egale').on('click',function()
   
     { // alert('ok!');
        var saisie1 = $('#saisie1').val();
        var saisie2 = $('#saisie2').val();
        var operateur = $('#operateurs').val();
        var resultat = $('#resultat').val();
        var saisie1a = saisie1.replace(',','.');
        var saisie2a = saisie2.replace(',','.');
     
        // Aditions
        //--------------------------------------------
        if ( operateur == '+' && saisie1.indexOf(',') < 0 && saisie2.indexOf(',') < 0)
        {
           // console.log(saisie1.indexOf(','))
            resultat =  parseFloat(saisie1) + parseFloat(saisie2);
            $('#resultat').val(resultat);
             console.log( saisie1);
             console.log( saisie2);
             console.log( resultat);
         }
         //======================================
         //Adition avec virgule
         //======================================
        else if (operateur == '+' && saisie1.indexOf(',') >= 0 )// virgule ',' au lieu d'un point'.' dans la saisie1
         { 
             resultat =  parseFloat(saisie1a) + parseFloat(saisie2a);
             $('#resultat').val(resultat); 
             
          }
        else if ( operateur == '+' && saisie2.indexOf(',') >= 0 )// virgule ',' au lieu d'un point'.' dans la saisie2
         {       
             resultat =  parseFloat(saisie1a) + parseFloat(saisie2a);
             $('#resultat').val(resultat);  
                      
          }
 
        //  Soustractions
        //--------------------------------------------
        if ( operateur == '-' && saisie1.indexOf(',') < 0 && saisie2.indexOf(',') < 0)
        {
           // console.log(saisie1.indexOf(','))
            resultat =  parseFloat(saisie1) - parseFloat(saisie2);
            $('#resultat').val(resultat);
             console.log( saisie1);
             console.log( saisie2);
             console.log( resultat);
         }
         //======================================
         //Soustraction avec virgule
         //======================================
        else if (operateur == '-' && saisie1.indexOf(',') >= 0 )// virgule ',' au lieu d'un point'.' dans la saisie1
         { 
             resultat =  parseFloat(saisie1a) - parseFloat(saisie2a);
             $('#resultat').val(resultat); 
             
          }
        else if ( operateur == '-' && saisie2.indexOf(',') >= 0 )// virgule ',' au lieu d'un point'.' dans la saisie2
         {       
             resultat =  parseFloat(saisie1a) - parseFloat(saisie2a);
             $('#resultat').val(resultat);  
                      
          }
        //  Divisions
        //--------------------------------------------
        if ( operateur == '/' && saisie1.indexOf(',') < 0 && saisie2.indexOf(',') < 0)
        {
           // console.log(saisie1.indexOf(','))
            resultat =  parseFloat(saisie1) / parseFloat(saisie2);
            $('#resultat').val(resultat);
             console.log( saisie1);
             console.log( saisie2);
             console.log( resultat);
         }
         //======================================
         //Division avec virgule
         //======================================
        else if (operateur == '/' && saisie1.indexOf(',') >= 0 )// virgule ',' au lieu d'un point'.' dans la saisie1
         { 
             resultat =  parseFloat(saisie1a) / parseFloat(saisie2a);
             $('#resultat').val(resultat); 
             
          }
        else if ( operateur == '/' && saisie2.indexOf(',') >= 0 )// virgule ',' au lieu d'un point'.' dans la saisie2
         {       
             resultat =  parseFloat(saisie1a) / parseFloat(saisie2a);
             $('#resultat').val(resultat);  
                      
          }

        //  Multiplications
        //--------------------------------------------
        if ( operateur == '*' && saisie1.indexOf(',') < 0 && saisie2.indexOf(',') < 0)
        {
           // console.log(saisie1.indexOf(','))
            resultat =  parseFloat(saisie1) * parseFloat(saisie2);
            $('#resultat').val(resultat);
             console.log( saisie1);
             console.log( saisie2);
             console.log( resultat);
         }
         //======================================
         //Multiplication avec virgule
         //======================================
        else if (operateur == '*' && saisie1.indexOf(',') >= 0 )// virgule ',' au lieu d'un point'.' dans la saisie1
         { 
             resultat =  parseFloat(saisie1a) * parseFloat(saisie2a);
             $('#resultat').val(resultat); 
             
          }
        else if ( operateur == '*' && saisie2.indexOf(',') >= 0 )// virgule ',' au lieu d'un point'.' dans la saisie2
         {       
             resultat =  parseFloat(saisie1a) * parseFloat(saisie2a);
             $('#resultat').val(resultat);  
                      
          }
     });

//Disparition / appartion de la calculatrice
//---------------------------------------------
     $('.slide').on('click',function()
     {
         $(this).prev().slideUp(600);
         $(this).fadeOut(600);
         $('#logo').delay(600).show(600)
     });
     
     $('#logo').on('click',function()
     { 
         $(this).fadeOut(600);
         $('.slide').prev().delay(600).fadeIn(600);
         $('.slide').delay(600).show(600)
     });

//  Message au survole 
//--------------------------------------------
    $('#saisie1').on('mouseover',function()
        {  //alert('ok!');
        $('.message').show().html('<div>Choisissez un nombre.</div>');
     });
    $('#saisie1').on('mouseout',function()
     {  //alert('ok!');
        $('.message').hide().html(''); 
     });

    $('#saisie2').on('mouseover',function()
        {  //alert('ok!');
        $('.message').show().html('<div>Choisissez un nombre.</div>'); 
     });
    $('#saisie2').on('mouseout',function()
     {  //alert('ok!');
        $('.message').hide().html(''); 
     });
     $( '#operateurs' ).on('mouseover',function()
        {  //alert('ok!');
        $('.message').show().html('<div>Choisissez un opérateur.</div>'); 
     });
    $('#operateurs').on('mouseout',function()
     {  //alert('ok!');
        $('.message').hide().html(''); 
     });

});