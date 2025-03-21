export interface Question {
  image: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    image: require('../../assets/module_4/4. Kawasan Falls/1.b Kawasan Falls.jpg'), // Update path
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Natural Heritage',
  },
  {
    image: require('../../assets/module_4/1. Belfry/1.Old Photo Belfry 1.jpg'), // Update path
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Built Heritage',
  },
  {
    image: require('../../assets/module_4/5. Sumad Festival/5.c Sumad Streetdancing in 2024.png'), // Update path
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Intangible Heritage',
  },
  {
    image: require('../../assets/module_4/6. Other Cultural Assets/19.b Hugos.jpg'),
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Intangible Heritage',
  },
  {
    image: require('../../assets/module_4/6. Other Cultural Assets/23. Tagbo.png'), //
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Intangible Heritage',
  },
  {
    image: require('../../assets/module_4/6. Other Cultural Assets/11.a Manlawi Peak.jpg'), //
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Natural Heritage',
  },
  {
    image: require('../../assets/module_4/6. Other Cultural Assets/18.a Santo Entierro_new.png'), //
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Built Heritage',
  },
  {
    image: require('../../assets/module_4/2. Churches/1.a Our Lady of Mt. Carmel Parish Church (1954).jpg'), //
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Intangible Heritage',
  },
  {
    image: require('../../assets/module_4/6. Other Cultural Assets/1.a Old Municipal Hall.jpg'), //
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Movable Heritage',
  },
  {
    image: require('../../assets/module_4/6. Other Cultural Assets/14. Kumparsa.png'), //
    options: ['Natural Heritage', 'Built Heritage', 'Movable Heritage', 'Intangible Heritage'],
    correctAnswer: 'Built Heritage',
  },
];
