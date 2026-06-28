export interface Poem {
  id: string;
  title: string;
  image: string;
  orientation: 'landscape' | 'portrait';
  stanzas: string[];
}

export const poems: Poem[] = [
  {
    id: "echoes-from-japa",
    title: "Echoes from JAPA: Black Power on the Loose",
    image: "/japa-travel.jpg",
    orientation: "landscape",
    stanzas: [
      "I hoped for repaved routes\nOff the troughs of scorn and abuse\nIndigence, ferocity and everyday abduce.\nNasty and brutish state of fruits.\nHelp me JAPA from these roots!",
      "Fellow countrymen with sullied attributes\nManeuver to power echelons gratifying as juice\nTheir noxious policies stunts and pollutes\nA land of honey and innumerable substitutes.\nDespair clogs my hope. It refutes\nMy certitude about my prideful roots.\nJAPA! The exit route.",
      "Clung to this hope, my mind it persecutes.\nAs I probe for whereabouts, swamped in doubts\nAnxiety spouts. Worries cloud my clouds\nBut just before the faith dilutes, as a bridge, an opportunity flutes\nAnd Britain welcomes my foots.",
      "Hello! Heathrow shouts\nDroughts no more, defeat for all past grouse.\nSterling Pounds for the counts. As I go all out\nLike Scout hunting for a prey spouse.\nAnd there at the hustle coasts, I hear echoes from my roots\nVoiced blackness, African offshoots",
      "Fellow countrymen with unexampled attributes\nCo-entrants from African tropics, wrapped in sludgy suits\nPristine talents from eclectic grassroots\nEvincing black power. Afro-driven solutions on diffuse\nEchoes from JAPA. A pride from Africans’ commute",
      "My soul vaults, my spirit vivaciously shouts\nEmotions of pride in Africanness spouts\nAt the savour of black intellectuality, around and about.\nPassion, vigour and dedication of peerless amount\nAcross Britain’s domains, away from home rescripting accounts\nAn elegant re-adorning of a continent’s repute",
      "Alas! Exploits of the black diaspora community troubleshoots\nMy psyche. Misguided, was I, about my roots.\nAfrica? Got no flaws. Dare I announce\nMe is Africa, I am my roots\nAfrica is us. Black skin, bright fruits\nJAPA has become – black power on the loose."
    ]
  },
  {
    id: "where-our-struggles-connect",
    title: "Where Our Struggles Connect",
    image: "/struggles.jpg",
    orientation: "portrait",
    stanzas: [
      "Manifold democratic struggles, I do recollect\nSubjects of my poignant upset\nWhen democracy faces a ceremonious reject\nAnd its creeds a precarious neglect\nI find me self-recruited into this project",
      "Of democracy - the responsibility to protect\nBut lonely I feel in this net\nAre there other voices yet?\nTo what other struggles do mine connect?",
      "There and then the echos resurrect\nFrom South Africa’s #AmINext?\nThe lamentations - #ZimbabweanLivesMatter in all facets\n#EndSARS and all police threats\n#FeesMustFall, save our sweats\n#RejectFinanceBill and all it represents\n#BringBackOurGirls from the den of death",
      "What an epiphany of voices - reverberating desires unmet\nNot desiring a world perfect\nBut one where all rights find respect\nWhere citizens are not regaled as suspects\nBut as the free world’s justice prefects",
      "Herein do our struggles connect\nAnd our voices made of effect",
      "However, my binoculars, flaws they detect\nMany voices, yet noises of defects\nThe dominance of biased voices and sects\nPower imbalances from actors of elect\nInputs from the periphery facing neglect",
      "For how long will this woe us beset?",
      "I call for activism with breadth and effect\nVoiced through truth, passion and affect\nMany voices yet one subject\nMany agendas yet one dialect\nA global south, many subsets yet one mindset",
      "One mindset\nTo be architects\nWith the resolve and intellect\nThrough which advocacy is reset",
      "Through which activism begets\nThe present and future we all covet\nAnd through which authoritarianism is laid to rest",
      "Again, herein should our struggles connect\nIf the clock is correct, then it’s time to connect."
    ]
  }
];

export const getPoemById = (id: string): Poem | undefined => {
  return poems.find(poem => poem.id === id);
};
