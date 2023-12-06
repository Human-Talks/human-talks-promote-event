export type Talk = {
  title: string;
  speakers: {
    name: string;
    pic: string;
  }[];
  info: {
    city: string;
    date: string;
    place: string;
  };
};

export const talk: Talk = {
  title: "This is the title of your next talk. As you can see it can be pretty long.",
  speakers: [{
    name: "Felicia Rodriguez",
    pic: "https://randomuser.me/api/portraits/women/63.jpg"
  }, {
    name: "Gina Jackson",
    pic: "https://randomuser.me/api/portraits/women/53.jpg"
  }, {
    name: "Terry Robinson",
    pic: "https://randomuser.me/api/portraits/men/38.jpg"
  }],
  info: {
    city: "🐘 Nantes",
    date: "2024-01-01",
    place: "Downtown"
  }
};
