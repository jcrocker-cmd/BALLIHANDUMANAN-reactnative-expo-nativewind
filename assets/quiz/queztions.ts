export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    question:
      'What was the original name of the sitio where Friar Tomas established a settlement in Balilihan?',
    options: ['Abaca', 'Bay sa Iring', 'Del Carmen', 'Sal-ing'],
    correctAnswer: 'Bay sa Iring',
  },
  {
    question:
      'What is the name of the area located in the northeast part of Balilihan, historically referred to as “Pekin”?',
    options: ['Cantalid', 'Datag', 'Hanopol', 'Baucan'],
    correctAnswer: 'Hanopol',
  },
  {
    question:
      'Which town initially encompassed the areas that later became Balilihan, Alburquerque, and others?',
    options: ['Baclayon', 'Antequera', 'Tagbilaran', 'Catigbian'],
    correctAnswer: 'Baclayon',
  },
  {
    question: 'What was the main reason for Balilihan\'s initial relocation from "Bay sa Iring"?',
    options: [
      'Lack of arable land.',
      'Frequent attacks by bandits.',
      'Scarcity of water.',
      'Friar’s personal choice.',
    ],
    correctAnswer: 'Scarcity of water.',
  },
  {
    question: "How would you characterize Balilihan's economic state following its founding?",
    options: [
      'It suffered from extreme poverty.',
      'It remained economically stagnant.',
      'Its economic status is not mentioned.',
      'It experienced rapid economic growth.',
    ],
    correctAnswer: 'It experienced rapid economic growth.',
  },
  {
    question: 'What is the officially recognized founding date of Balilihan?',
    options: [
      'September 29, 1828',
      'September 1, 1847',
      'September 28, 1946',
      'September 30, 1989',
    ],
    correctAnswer: 'September 29, 1828',
  },
  {
    question:
      'Which occupation period saw the establishment of a concentration camp for suspected collaborators in the barrio of Hanopol?',
    options: ['Spanish', 'American', 'Japanese', 'None of the above'],
    correctAnswer: 'Japanese',
  },
  {
    question: 'What is the official municipal hymn of Balilihan?',
    options: [
      'Awit sa Bohol',
      'Balilihan sa Kahangturan',
      'Awit sa Balilihan',
      'Aim High Balilihan',
    ],
    correctAnswer: 'Balilihan sa Kahangturan',
  },
  {
    question: "What does the sky-blue color in Balilihan's municipal flag symbolize?",
    options: ['Courage', 'Unity', 'Prosperity', 'Peace'],
    correctAnswer: 'Peace',
  },
  {
    question:
      'What does the reclassification of Balilihan from a 4th class to a 3rd class municipality signify?',
    options: [
      'Economic decline and poverty increase in Balilihan',
      'Improved governance and financial management',
      'Increased population in the municipality',
      'Political instability in the municipality',
    ],
    correctAnswer: 'Improved governance and financial management',
  },
  {
    question: 'What is the central theme of the Balilihan Hymn, "Balilihan sa Kahangturan"?',
    options: [
      "The importance of agriculture to the town's economy.",
      "The town's reliance on external aid for development.",
      "The town's rich history and its enduring spirit.",
      "The town's struggles to overcome poverty.",
    ],
    correctAnswer: "The town's rich history and its enduring spirit.",
  },
];
