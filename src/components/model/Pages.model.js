const Pages = () => {
  return [
    {
      name: "Type",
      title: "What platform you want your app to be built on?",
      url: "/questions/type",
      buttons: [
        {
          id: 1,
          name: "Apple",
          icon: "faApple",
          price: 2000,
          next: "/questions/social"
        },
        {
          id: 2,
          name: "Android",
          icon: "faAndroid",
          price: 1500,
          next: "/questions/social"
        },
        {
          id: 3,
          name: "Both",
          icon: "faAngellist",
          price: 3500,
          next: "/questions/social"
        }
      ]
    },
    {
      name: "Social",
      title: "Do you want your App to be connected to Socials?",
      url: "/questions/social",
      buttons: [
        {
          id: 4,
          name: "Yes",
          icon: "faThumbsUp",
          price: 1000,
          next: "/questions/payments"
        },
        {
          id: 5,
          name: "No",
          icon: "faThumbsDown",
          price: 0,
          next: "/questions/payments"
        },
        {
          id: 6,
          name: "I don't know",
          icon: "faArrowsAltH",
          price: 0,
          next: "/questions/payments"
        }
      ]
    },
    {
      name: "Payments",
      title: "Do you want in-App purchases?",
      url: "/questions/payments",
      buttons: [
        {
          id: 7,
          name: "Yes",
          icon: "faCcMastercard",
          price: 3200,
          next: "/questions/logo"
        },
        {
          id: 8,
          name: "No",
          icon: "faCreativeCommonsNcEun",
          price: 0,
          next: "/questions/logo"
        },
        {
          id: 9,
          name: "I don't know",
          icon: "faArrowsAltH",
          price: 0,
          next: "/questions/logo"
        }
      ]
    },
    {
      name: "Logo",
      title: "Do you want a logo for your brand?",
      url: "/questions/logo",
      buttons: [
        {
          id: 10,
          name: "Yes",
          icon: "faSmile",
          price: 1200,
          next: "/questions/recap"
        },
        {
          id: 11,
          name: "No",
          icon: "faFrown",
          price: 0,
          next: "/questions/recap"
        }
      ]
    }
  ];
};
export default Pages;
