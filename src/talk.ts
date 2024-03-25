export type Talk = {
  pos: string
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

export const talks: Array<Talk> = [ 
  {
    pos: "1",
    title: "Tout ce qui est cassé avec les pull requests",
    speakers: [{
      name: "Hadrien Mens-Pellen",
      pic: "https://randomuser.me/api/portraits/women/63.jpg"
    }],
    info: {
      city: "🐘 Nantes",
      date: "2024-04-09",
      place: "Nickel"
    }
  },
  {
    pos: "2",
    title: "La positive alt-itude ! Un outil d'inclusion pour votre accessibilité",
    speakers: [{
      name: "Angi Guyard",
      pic: "https://randomuser.me/api/portraits/women/63.jpg"
    }],
    info: {
      city: "🐘 Nantes",
      date: "2024-04-09",
      place: "Nickel"
    }
  }
];
