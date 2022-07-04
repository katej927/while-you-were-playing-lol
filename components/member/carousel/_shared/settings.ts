const breakpoints = [
  { breakpoint: 820, slidesToShow: 5, slidesToScroll: 5 },
  { breakpoint: 770, slidesToShow: 4.5, slidesToScroll: 4 },
  { breakpoint: 690, slidesToShow: 4, slidesToScroll: 4 },
  { breakpoint: 620, slidesToShow: 3.5, slidesToScroll: 3 },
  { breakpoint: 540, slidesToShow: 3, slidesToScroll: 3 },
  { breakpoint: 470, slidesToShow: 2.5, slidesToScroll: 2 },
  { breakpoint: 400, slidesToShow: 2, slidesToScroll: 2 },
];

export const settings = {
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5.5,
  slidesToScroll: 5,
  responsive: breakpoints.map(({ breakpoint, slidesToShow, slidesToScroll }) => {
    return {
      breakpoint,
      settings: {
        slidesToShow,
        slidesToScroll,
        infinite: false,
      },
    };
  }),
};
