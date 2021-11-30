const imageUrl = {
  image1:
    'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
  image2:
    'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=1320&height=746&fit=crop&format=pjpg&auto=webp',
  image3:
    'https://badianhotel.com/wp-content/uploads/2020/08/the-spectator-charleston-south-carolina-lead-CHARLESTONHTLWB18-1536x960.jpg',
  image4:
    'https://badianhotel.com/wp-content/uploads/2020/08/baglioni-hotel-london-1536x864.jpg',
  image5:
    'https://badianhotel.com/wp-content/uploads/2020/08/01-luxury-hotel-in-crete-creta-palace-6255-1160x870.jpg',
};

const hotelData = (type) => {
  switch (type) {
    case 1:
      return {
        title: 'Treebo Hotels',
        body: 'Located at Mumbai, India.',
        url: imageUrl.image1,
        altText: 'Hotel1',
      };
    case 2:
      return {
        title: 'Holiday Inn',
        body: 'Located at Delhi, India.',
        url: imageUrl.image2,
        altText: 'Hotel2',
      };
    case 3:
      return {
        title: 'Marriott International',
        body: 'Located at Bangalore, India.',
        url: imageUrl.image3,
        altText: 'Hotel3',
      };
    case 4:
      return {
        title: 'Le Sapphire',
        body: 'Located at Cochin, India.',
        url: imageUrl.image4,
        altText: 'Hotel4',
      };
    case 5:
      return {
        title: 'Crowne Plaza',
        body: 'Located at Chennai, India.',
        url: imageUrl.image5,
        altText: 'Hotel5',
      };
    default:
      return {
        title: 'Treebo Hotels',
        body: 'Located at Mumbai, India.',
        url: imageUrl.image1,
        altText: 'Hotel1',
      };
  }
};

export default hotelData;
