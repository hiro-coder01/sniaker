$(function () {
  // カルーセル
  // $(".carousel").slick({
  //   autoplay: true,
  //   infinite: true,
  // });
  // $(".carousel").slick({
  //   centerMode: true,
  //   centerPadding: "30px",
  //   slidesToShow: 5,
  //   infinite: true,
  //   swipe: true,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "20px",
  //         slidesToShow: 1,
  //         infinite: true,
  //         swipe: true,
  //         autoplay: true,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 1,
  //         infinite: true,
  //         swipe: true,
  //         autoplay: true,
  //       },
  //     },
  //   ],
  // });
  // $(".multiple").slick({
  //   autoplay: true, //自動再生
  //   infinite: true, //スライドのループ有効化
  //   dots: true, //ドットのナビゲーションを表示
  //   slidesToShow: 4, //表示するスライドの数
  //   slidesToScroll: 4, //スクロールで切り替わるスライドの数
  //   responsive: [
  //     {
  //       breakpoint: 768, //ブレークポイントが768px
  //       settings: {
  //         slidesToShow: 3, //表示するスライドの数
  //         slidesToScroll: 3, //スクロールで切り替わるスライドの数
  //       },
  //     },
  //     {
  //       breakpoint: 480, //ブレークポイントが480px
  //       settings: {
  //         slidesToShow: 2, //表示するスライドの数
  //         slidesToScroll: 2, //スクロールで切り替わるスライドの数
  //       },
  //     },
  //   ],
  // });
  $(".carousel").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    swipe: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          infinite: true,
          swipe: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          infinite: true,
          swipe: true,
          autoplay: true,
        },
      },
    ],
  });
});

// Javascriptの場合
document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".hamburger_bar ").classList.toggle("active");
  document.querySelector(".background").classList.toggle("active");
});
