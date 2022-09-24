(function($){
    var images = $(" .img-gallery-slider");
    $(' .right').on('click', function(){
     
        images.children(' :last').prependTo(' .img-gallery-slider');
        clearInterval(id);
        
    })
    $(' .left').on('click', function(){
       
        images.children(' :first').appendTo(' .img-gallery-slider').last();
        clearInterval(id);
       
        
    })
   
   
var id = setInterval(function(){
    images.children(' :last').prependTo(' .img-gallery-slider');
},1000)
    
    $(' .img-gallery-slider div a').on('click', function(event){
        event.preventDefault();
        var is = $(this).parent().is(" :nth-child(4)");
         if(is === true){
            var findLightbox = $('body').find(' .lightbox').length;
        
            // Get href attribut from a element
            var href = $(this).attr('href');
            if(findLightbox === 0){
                 // Create div with class lightbox
                 var lightbox = $('<div class="lightbox" </div>')
                
                 
                 lightbox.prependTo("body");
                 
            }
         
            // Create img element and addd href attribut
            var image = $('<img src=' + href + '>');
            image.prependTo(' .lightbox');
            
            
        
    
            if($(' .lightbox').css('display') === "none"){
                $(' .lightbox').fadeIn();
                image.fadeIn();
            }
            $(' .lightbox').on('click', function(){
                $(' .lightbox').fadeOut();
                $(' .lightbox > img').fadeOut();
            });
         }




     
    })

    





}(jQuery));