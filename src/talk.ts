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
    title: "WordPress : open source ou commercial ?",
    speakers: [{
      name: "Patrice de Saint Steban",
      pic: ""
    }],
    info: {
      city: "🐘 Nantes",
      date: "2025-03-11",
      place: "Valeuriad"
    }
  },
  {
    pos: "2",
    title: "Il est temps de dire adieu à l’attribut title",
    speakers: [{
      name: "François-Xavier Lair",
      pic: ""
    }],
    info: {
      city: "🐘 Nantes",
      date: "2025-03-11",
      place: "Valeuriad"
    }
  },
  {
    pos: "3",
    title: "Développer avec une IA : retour d'expérience de Cursor",
    speakers: [{
      name: "Julien Landuré",
      pic: ""
    }],
    info: {
      city: "🐘 Nantes",
      date: "2025-03-11",
      place: "Valeuriad"
    }
  },
  {
    pos: "4",
    title: "Craft-ia, un outil pour faire du peer programming avec une IA",
    speakers: [{
      name: "Benoît Riaza",
      pic: ""
    }],
    info: {
      city: "🐘 Nantes",
      date: "2025-03-11",
      place: "Valeuriad"
    }
  }
];
