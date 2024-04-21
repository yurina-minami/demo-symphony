$(function(){
    //ヘッダー
    $('.nav-ticket').on('click',function(){
        $('.menu-ticket').toggleClass('active');
        $('.menu-event').removeClass('active');
        $('.menu-other').removeClass('active');
    });

    $('.nav-event').on('click',function(){
        $('.menu-event').toggleClass('active');
        $('.menu-ticket').removeClass('active');
        $('.menu-other').removeClass('active');
    });

    $('.nav-other').on('click',function(){
        $('.menu-other').toggleClass('active');
        $('.menu-ticket').removeClass('active');
        $('.menu-event').removeClass('active');
    });

    $('.nav-close').on('click',function(){
        $('.menu-ticket').removeClass('active');
        $('.menu-event').removeClass('active');
        $('.menu-other').removeClass('active');
    });

    //フッター
    const scrollTop = document.getElementById("scroll-top");

    scrollTop.addEventListener("click", () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });

    //トップページタブ切り替え
    $('.tab-pickup').on('click',function(){
        $(this).addClass('active');
        $('.tab-calendar').removeClass('active');
        $('#pickup').addClass('active');
        $('#calendar').removeClass('active');
    });

    $('.tab-calendar').on('click',function(){
        $(this).addClass('active');
        $('.tab-pickup').removeClass('active');
        $('#calendar').addClass('active');
        $('#pickup').removeClass('active');
    });

    //おすすめ公演slick
    $('.slick-pickup').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        pauseOnHover: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
              slidesToShow: 2,
              slidesToScroll : 1,
              },
            },
            {
                breakpoint: 700,
                settings: {
                slidesToShow: 1,
                slidesToScroll : 1,
                },
            },
        ],
    });

    //FAQアコーディオン
    $('.question').on('click', function() {
        var nextAnswer = $(this).next(".answer");
        $(nextAnswer).slideToggle();
        $(this).toggleClass('close');
    });

    //NEWS一覧カテゴリー切り替え
    $('.news-category').on('click',function(){
        $(this).toggleClass('active');
        $('.news-category').not(this).removeClass('active');
    });

    //BLOG一覧カテゴリー切り替え
    $('.blog-category').on('click',function(){
        $(this).toggleClass('active');
        $('.blog-category').not(this).removeClass('active');
    });

    //購入方法タブ切り替え
    $('.tab-web').on('click',function(){
        $(this).addClass('active');
        $('.tab-tel').removeClass('active');
        $('.tab-window').removeClass('active');
        $('#how-web').addClass('active');
        $('#how-tel').removeClass('active');
        $('#how-window').removeClass('active');
    });

    $('.tab-tel').on('click',function(){
        $(this).addClass('active');
        $('.tab-web').removeClass('active');
        $('.tab-window').removeClass('active');
        $('#how-tel').addClass('active');
        $('#how-web').removeClass('active');
        $('#how-window').removeClass('active');
    });

    $('.tab-window').on('click',function(){
        $(this).addClass('active');
        $('.tab-tel').removeClass('active');
        $('.tab-web').removeClass('active');
        $('#how-window').addClass('active');
        $('#how-tel').removeClass('active');
        $('#how-web').removeClass('active');
    });

    //座席表モーダル
    $('.seat-close').on('click',function(){
        $('.bg-gray').removeClass('active');
        $('.seat-detail').removeClass('active');
    });

    $('.a').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.a-modal').addClass('active');
    });

    $('.b').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.b-modal').addClass('active');
    });

    $('.c').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.c-modal').addClass('active');
    });

    $('.d').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.d-modal').addClass('active');
    });

    $('.e').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.e-modal').addClass('active');
    });

    $('.f').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.f-modal').addClass('active');
    });

    $('.g').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.g-modal').addClass('active');
    });

    $('.h').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.h-modal').addClass('active');
    });

    $('.i').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.i-modal').addClass('active');
    });

    $('.j').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.j-modal').addClass('active');
    });

    $('.k').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.k-modal').addClass('active');
    });

    $('.l').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.l-modal').addClass('active');
    });

    $('.m').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.m-modal').addClass('active');
    });

    $('.n').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.n-modal').addClass('active');
    });

    $('.o').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.o-modal').addClass('active');
    });

    $('.p').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.p-modal').addClass('active');
    });

    $('.q').on('click',function(){
        $('.bg-gray').addClass('active');   
        $('.q-modal').addClass('active');
    });


});