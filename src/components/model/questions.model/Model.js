import uuid from "uuid";
const Model = () => {
  return [
    {
      name: "type",
      title: "What platform you want your app to be built on?",
      id: uuid(),
      values: [
        {
          id: uuid(),
          name: "Apple",
          icon: "apple-brands.svg",
          price: 2000,
          next: "/questions/social"
        },
        {
          id: uuid(),
          name: "Android",
          icon: "android.svg",
          price: 1500,
          next: "/questions/social"
        },
        {
          id: uuid(),
          name: "Both",
          icon: "both.svg",
          price: 3500,
          next: "/questions/social"
        }
      ]
    },
    {
      name: "social",
      title: "Do you want your App to be connected to Socials?",
      id: uuid(),
      values: [
        {
          id: uuid(),
          name: "Yes",
          icon: "users.svg",
          price: 1400,
          next: "/questions/payments"
        },
        {
          id: uuid(),
          name: "No",
          icon: "no-social.svg",
          price: 0,
          next: "/questions/payments"
        },
        {
          id: uuid(),
          name: "I don't know",
          icon: "dunno.svg",
          price: 0,
          next: "/questions/payments"
        }
      ]
    },
    {
      name: "payments",
      title: "Do you want in-App purchases?",
      id: uuid(),
      values: [
        {
          id: uuid(),
          name: "Yes",
          icon: "money.svg",
          price: 3000,
          next: "/questions/logo"
        },
        {
          id: uuid(),
          name: "No",
          icon: "no-money.svg",
          price: 0,
          next: "/questions/logo"
        },
        {
          id: uuid(),
          name: "I don't know",
          icon: "dunno.svg",
          price: 0,
          next: "/questions/logo"
        }
      ]
    },
    {
      name: "logo",
      title: "Do you want a logo for your App?",
      id: uuid(),
      values: [
        {
          id: uuid(),
          name: "Yes",
          icon: "Yes.svg",
          price: 3000,
          next: "/recap"
        },
        {
          id: uuid(),
          name: "No",
          icon: "No.svg",
          price: 0,
          next: "/recap"
        }
      ]
    }
  ];
};
export default Model;
