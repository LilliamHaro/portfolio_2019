$(document).ready(function(){
    console.log('Powered by Lilliam Haro')

    $('.nav-btn').on('click',function(e){
        if($('#nav-options').hasClass('nav-toggle')) {
            $('#nav-options ul li').toggleClass('show-nav-options-ul-li')
            setTimeout(function(){
                $('#nav-options').toggleClass('nav-toggle')
                setTimeout(function(){
                    $('#nav-slide-color').toggleClass('nav-toggle')
                    setTimeout(function(){
                        $('#nav-slide-color-2').toggleClass('nav-toggle')
                    },150)
                },150)
            },300)
        } else {
            $('#nav-slide-color-2').toggleClass('nav-toggle')
            setTimeout(function(){
                $('#nav-slide-color').toggleClass('nav-toggle')
                setTimeout(function(){
                    $('#nav-options').toggleClass('nav-toggle')
                setTimeout(function(){
                    $('#nav-options ul li').toggleClass('show-nav-options-ul-li')
                },300)
                },150)
            },150)           
        }
        $('.nav-btn span:nth-child(1)').toggleClass('nav-btn-span-1');
        $('.nav-btn span:nth-child(2)').toggleClass('nav-btn-span-2');
        $('.nav-btn span:nth-child(3)').toggleClass('nav-btn-span-3');
    })
})

