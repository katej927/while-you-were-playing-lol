export const convertShareKakao = (title: string, description: string, btnTitle: string, url: string) => {
  return {
    objectType: 'feed',
    content: {
      title,
      description,
      imageUrl: process.env.NEXT_PUBLIC_API_URL + '/static/image/WPL.png',
      link: {
        webUrl: url,
        mobileWebUrl: url,
      },
    },
    buttons: [
      {
        title: btnTitle,
        link: {
          webUrl: url,
          mobileWebUrl: url,
        },
      },
    ],
  };
};
