const diplomas = [
  {
    name: "Information Technology",
    id: "Information Technology",
    sessions: [
      {
        name: "UI/UX Design for Apps",
        id: "UIUX Design for Apps",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        speaker: {
          course: "C218",
          name: "Azhar Kamar",
          title:"Lecturer"
        },
      },
      {
        name: "Mobile App Development",
        id: "Mobile App Development",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        speaker: {
          course: "C237",
          name: "Derek Lee",
          title:"Lecturer"
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "Financial Technology",
    sessions: [
      {
        name: "Software Application Development",
        id: "Software Application Development",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        speaker: {
          course: "C237",
          name: "Hannah Lim",
          title:"Lecturer"
        },
      },
      {
        name: "Payment Technologies",
        id: "Payment Technologies",
        desc: "This module introduces students to different payment technologies and systems.",
        speaker: {
          course: "C372",
          name: "Magdalene Lim",
          title:"Senior Lecturer"
        },
      },
    ]
  },
];

export function getSession({ sessionId, catId }) {
  return diplomas
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return diplomas.find(({ id }) => id === catId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}
