export const settings = {
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5.5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 4,
        infinite: false,
      },
    },
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
};
