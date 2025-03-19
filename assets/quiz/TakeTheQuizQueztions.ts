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
      'What is the name of the area located in the northeast part of Balilihan, historically referred to as "Pekin"?',
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
      "Friar's personal choice.",
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
    question:
      "Based on historical context, what might be a potential consequence of a government's attempt to annex a town against the wishes of its people forcefully?",
    options: [
      'No significant consequences.',
      'Civil unrest and potential conflict.',
      'Improved infrastructure and services.',
      'Increased cooperation and economic growth.',
    ],
    correctAnswer: 'Civil unrest and potential conflict.',
  },
  {
    question:
      'Considering the history of territorial changes, what might be a crucial factor for a town to maintain its independent status?',
    options: [
      'A weak local government and management.',
      'Effective leadership and community unity.',
      'A lack of natural resources in the town.',
      'Strong economic ties to a larger town.',
    ],
    correctAnswer: 'Effective leadership and community unity.',
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
      'How did the actions of Manuel Diamante and other local leaders demonstrate the importance of local leadership in influencing decisions regarding territorial changes?',
    options: [
      'Higher authorities always overrule local leaders.',
      'Local leaders are insignificant in the community.',
      'Local leaders have little influence on the community.',
      'Local leaders can play a crucial role in shaping political outcomes.',
    ],
    correctAnswer: 'Local leaders can play a crucial role in shaping political outcomes.',
  },
  {
    question:
      "Evaluate the significance of Balilihan's establishment as a separate town from Baclayon in shaping its identity. What does this separation indicate about the community's aspirations?",
    options: [
      'It reflects aspirations for self-governance and local leadership.',
      'It indicates a lack of ambition to grow beyond a small settlement.',
      'It signifies a desire for economic independence without a cultural identity.',
      "It shows the community's wish to remain aligned with Baclayon's traditions.",
    ],
    correctAnswer: 'It reflects aspirations for self-governance and local leadership.',
  },
  {
    question:
      'Considering the hardships faced during World War II, how effective was the leadership of wartime mayor Tan Idzong in balancing cooperation with the Japanese and supporting the guerilla movement?',
    options: [
      'Neutral; he did not influence the situation.',
      'Ineffective; the locals suffered due to his failure to provide protection.',
      'Effective; he successfully maintained a measure of safety and provided vital support to the resistance.',
      'Somewhat effective; he achieved only partial success in his cooperation efforts due to overwhelming challenges.',
    ],
    correctAnswer:
      'Effective; he successfully maintained a measure of safety and provided vital support to the resistance.',
  },
  {
    question:
      'In which period did the troops announce their intention to burn down Balilihan upon their arrival?',
    options: ['Spanish', 'American', 'Japanese', 'None of the above'],
    correctAnswer: 'American',
  },
  {
    question:
      'Which occupation period saw the establishment of a concentration camp for suspected collaborators in the barrio of Hanopol?',
    options: ['Spanish', 'American', 'Japanese', 'None of the above'],
    correctAnswer: 'Japanese',
  },
  {
    question:
      'If a new town leader was elected for the first time during a specific occupation, which period would this refer to?',
    options: ['Spanish', 'American', 'Japanese', 'None of the above'],
    correctAnswer: 'American',
  },
  {
    question: 'Which of the following colonial influences occupied Balilihan the longest?',
    options: ['Spanish', 'American', 'Japanese', 'None of the above'],
    correctAnswer: 'Spanish',
  },
  {
    question:
      'What events during the Japanese occupation signaled a change in how the local people responded to the occupying forces?',
    options: [
      'The formation of a concentration camp in Hanopol.',
      'Peaceful negotiations with local leaders during the World War.',
      'Construction of new infrastructure and community gatherings.',
      'Establishment of a military garrison and forced hiding in the mountains.',
    ],
    correctAnswer: 'Establishment of a military garrison and forced hiding in the mountains.',
  },
  {
    question:
      "How did the brutal response of Fray Benito Grayoa during the Spanish period affect the local community's relationship with the authorities?",
    options: [
      'It strengthened community ties.',
      'It had no significant impact on the community.',
      'It instilled fear and caused many residents to flee.',
      'It led to a successful rebellion against Spanish rule.',
    ],
    correctAnswer: 'It instilled fear and caused many residents to flee.',
  },
  {
    question:
      'Imagine you are a historian tasked with writing a report on the impact of the American occupation on Balilihan. Which aspect would be most important to include in your analysis?',
    options: [
      'The personal lives of the musicians who played during the welcoming ceremony.',
      "The destruction of infrastructure and the town's rebuilding efforts.",
      'The agricultural production of the town during that time.',
      'The influence of the Spanish friars on local governance.',
    ],
    correctAnswer: "The destruction of infrastructure and the town's rebuilding efforts.",
  },
  {
    question:
      "Analyze the role of the Women's Auxiliary Service (WAS) during the Japanese occupation of Balilihan. What does their involvement suggest about the contributions of women in the resistance movement?",
    options: [
      'Women were not involved in the resistance movement at all.',
      "Women's contributions were primarily limited to domestic duties.",
      'Their involvement was secondary to that of the male leaders in the resistance.',
      'Their participation indicates that women played a crucial and active role in supporting the community during times of crisis.',
    ],
    correctAnswer:
      'Their participation indicates that women played a crucial and active role in supporting the community during times of crisis.',
  },
  {
    question:
      'Evaluate the strategies employed by Tan Idzong (Patricio Ibarra) during the Japanese occupation. How successful was he in balancing cooperation with the occupiers and support for the guerilla movement? What were the potential risks and benefits of his approach?',
    options: [
      'His strategy was entirely ineffective, leading to significant harm.',
      'His actions are impossible to evaluate due to a lack of information.',
      'His approach was completely successful, leading to a total avoidance of conflict.',
      'His approach, while risky, was relatively successful in mitigating harm and supporting the resistance.',
    ],
    correctAnswer:
      'His approach, while risky, was relatively successful in mitigating harm and supporting the resistance.',
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
    question: 'What does the gathering of children in the town plaza on July 4, 1946, symbolize?',
    options: [
      'The end of the war',
      'A new beginning and hope for the future',
      'The beginning of a new war',
      'A celebration of the Japanese occupation',
    ],
    correctAnswer: 'A new beginning and hope for the future',
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
    question:
      "You are a historian studying post-war recovery efforts in various communities. Based on the historical context, which of the following best represents Balilihan's approach to rebuilding?",
    options: [
      'A rapid prioritization of modern infrastructure development.',
      'A strong reliance on attracting foreign investment and capital.',
      'A unified community effort driven by collective spirit and resilience.',
      'A significant dependence on government aid and support programs.',
    ],
    correctAnswer: 'A unified community effort driven by collective spirit and resilience.',
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
  {
    question:
      'The Balilihan hymn\'s lyrics mention "Dinagayday sa imong kasugiran, Diwa ni Dagohoy hunis kaliwatan." What does this phrase refer to?',
    options: [
      "The importance of preserving the town's natural beauty.",
      "The town's strong ties to the Spanish colonial period.",
      "The town's resilience in the face of natural disasters.",
      "The town's connection to the Dagohoy Rebellion.",
    ],
    correctAnswer: "The town's connection to the Dagohoy Rebellion.",
  },
  {
    question:
      'If you were to organize a cultural festival in Balilihan to celebrate its history and achievements, which of the following elements would be crucial to include in the festival program?',
    options: [
      'An exclusive focus on international cuisines without referencing local dishes.',
      'Only speeches from local politicians without community engagement.',
      'A focus solely on modern entertainment without historical context.',
      "Interactive exhibits showcasing the town's history.",
    ],
    correctAnswer: "Interactive exhibits showcasing the town's history.",
  },
  {
    question:
      "Based on the municipal symbol, what is the significance of the carabao in Balilihan's municipal identity?",
    options: [
      "It represents the town's resilience and perseverance in overcoming challenges.",
      "It symbolizes the town's rich agricultural heritage and economic foundation.",
      'It embodies the unity and strength of the Balilihan community.',
      'All of the above.',
    ],
    correctAnswer: 'All of the above.',
  },
  {
    question:
      "Analyze the impact of the annual Sumad Festival on Balilihan's community identity. What does this celebration reveal about the town's values?",
    options: [
      'It indicates that the town has forgotten its past.',
      "It signifies a lack of interest in the town's historical roots.",
      "It reflects the community's pride and harmony in its heritage.",
      'It shows that the town prioritizes commercialism over tradition.',
    ],
    correctAnswer: "It reflects the community's pride and harmony in its heritage.",
  },
  {
    question: 'In which years was the Balilihan Belfry constructed?',
    options: ['1932-1952', '1835-1846', '1850-1866', '1965-1972'],
    correctAnswer: '1835-1846',
  },
  {
    question: 'What event caused the collapse of the Balilihan Belfry?',
    options: ['Typhoon', 'Fire', 'Earthquake', 'War'],
    correctAnswer: 'Earthquake',
  },
  {
    question: 'In what year was the Santo Niño Parish Church in Hanopol declared a parish?',
    options: ['1946', '1969', '2000', '1989'],
    correctAnswer: '1989',
  },
  {
    question: 'What is the name of the oldest secondary school in Balilihan?',
    options: [
      'Hanopol National High School',
      'Carmel Academy',
      'San Roque National High School',
      'Cong. Pablo Malasarte National HS',
    ],
    correctAnswer: 'Carmel Academy',
  },
  {
    question:
      'What does the repeated destruction and rebuilding of churches in Balilihan reveal about the community?',
    options: [
      'A community lacking strong religious conviction.',
      'Ineffective governance and a failure to protect important structures.',
      'A community unconcerned with the preservation of its cultural heritage.',
      "The community's unwavering faith and resilience in the face of adversity.",
    ],
    correctAnswer: "The community's unwavering faith and resilience in the face of adversity.",
  },
  {
    question:
      'The official designation of Balilihan sites as "Important Cultural Properties" primarily signifies:',
    options: [
      'An urgent need for the demolition of these structures.',
      "The recognition of these sites' historical and cultural value.",
      'An immediate requirement for significant repairs and renovations.',
      "A determination that these sites are insignificant to the town's heritage.",
    ],
    correctAnswer: "The recognition of these sites' historical and cultural value.",
  },
  {
    question:
      'The presence of both Spanish-era and American-era structures in Balilihan most significantly reflects:',
    options: [
      "The town's active resistance and opposition to colonial rule and influence.",
      "Evidence of Balilihan's overall insignificance in the broader historical context.",
      "A lack of cohesive architectural planning or design throughout the town's history.",
      "The town's historical experience under successive periods of Spanish and American colonial rule.",
    ],
    correctAnswer:
      "The town's historical experience under successive periods of Spanish and American colonial rule.",
  },
  {
    question:
      'What does the involvement of various organizations (National Museum, local government, parish, Diocese) in preserving the Our Lady of Mount Carmel Church signify?',
    options: [
      'An inefficient allocation of resources and a misdirection of funds.',
      'A significant lack of cooperation and coordination among stakeholders.',
      'A collaborative and unified effort dedicated to safeguarding cultural heritage.',
      "A general lack of interest and commitment to preserving the church's historical value.",
    ],
    correctAnswer:
      'A collaborative and unified effort dedicated to safeguarding cultural heritage.',
  },
  {
    question: 'What is the name of the tallest waterfall in Balilihan?',
    options: ['Camugao Falls', 'Niluksuan Falls', 'Kawasan Falls', 'Kulang-kulang Falls'],
    correctAnswer: 'Camugao Falls',
  },
  {
    question:
      "The Balilihan Association of Women for Development (BAWOD) promotes local crafts and empowers women. What does this suggest about the town's cultural values and economic activities?",
    options: [
      "The town is primarily focused on agriculture, with little emphasis on crafts or women's empowerment.",
      "The town values tradition and community, supporting local crafts and women's economic contributions.",
      'The town is rapidly modernizing, leaving traditional crafts behind.',
      'The town relies heavily on tourism, with crafts being primarily for souvenir purposes.',
    ],
    correctAnswer:
      "The town values tradition and community, supporting local crafts and women's economic contributions.",
  },
];
