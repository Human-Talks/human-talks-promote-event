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
  title: "Tout ce qui est cassé avec les pull requests",
  speakers: [{
    name: "Hadrien MENS-PELLEN",
    pic: "https://randomuser.me/api/portraits/women/63.jpg"
  }],
  info: {
    city: "🐘 Nantes",
    date: "2024-04-09",
    place: "Nickel"
  }
};
