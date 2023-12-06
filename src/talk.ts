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
  title: "Human Talks Nantes, how to become an organizer",
  speakers: [{
    name: "Jean-Phi Baconnais",
    pic: "jeanPhi.jpeg"
  }, {
    name: "Julien Tanguy",
    pic: "julien.jpeg"
  }, {
    name: "Alexis Lozano",
    pic: "alexis.jpeg"
  }],
  info: {
    city: "🐘 Nantes",
    date: "2023-12-12",
    place: "Delia Technologies"
  }
};
