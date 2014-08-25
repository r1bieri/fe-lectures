// alert("12345");

(function($){
    var ajaxRequest;
    var renderProducts;
    var registerEvents;
    var onClickShowProductsData;

    // init DOM ready
    $(function(){
//        ajaxRequest( '/data/products');
        registerEvents();
    });

    registerEvents = function(){
        $(".js-link-show-productdata").on('click', onClickShowProductsData);
    };

    onClickShowProductsData =function( ev){
        ev.preventDefault();
        ajaxRequest( '/data/products');
    };

    ajaxRequest = function(url){

        $.ajax(
            url,{
                error: function(){
                         console.log(' 1');
                },
                success: function(data){
                    console.log('request succeed');
                    renderProducts(data);
                }
            }
        )};

    renderProducts = function(data){
            var productId;
            var product;
            var html=[];

            for(productId in data){
                product = data[productId];
                console.dir(product);
                html += '<article><h2>'+product.name+'</h2>Price: chf ' +  product.price+ '</article>';
            }
            $('.js-container-products').html(html);
    }

})(jQuery);
