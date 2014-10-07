// alert("12345");

(function($){
    var ajaxRequest;
    var renderProducts;
    var registerEvents;
    var onClickShowProductsData;

    // init DOM ready
    $(function(){
        var jqXhr = ajaxRequest( '/data/products',{dataType:'json'});
        jqXhr.callback = renderProducts; /* die Callback Funktion kann wie hier oder unten in der Funktion onClickShowProductsData angegeben werden */
        registerEvents();
    });

    registerEvents = function(){
        $(".js-link-show-productdata").on('click', onClickShowProductsData);
    };

    onClickShowProductsData =function( ev){
        ev.preventDefault();
        ajaxRequest( '/data/products',{dataType:'text'}).callback = showProductData;
    };

    ajaxRequest = function(url, option){
        return $.ajax(
            url
            ,{
                dataType: option.dataType
                ,error: function(jqXhr, textStatus, errorText){
                         console.log(req, res);
                }
                ,success: function(data, textStatus, jqXhr){
                    console.log('request succeed');
                    jqXhr.callback(data);
                }
            }
        )};

    renderProducts = function(data){
            var productId;
            var product;
            var html='';

            for(productId in data){
                product = data[productId];
                console.dir(product);
                html += '<article><h2>'+product.name+'</h2>Price: chf ' +  product.price+ '</article>';
            }
            $('.js-container-products').html(html);
    };

    showProductData = function(data){
        $('.js-container-products').html(data);
    };
})(jQuery);
