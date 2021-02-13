const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("options");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  // create constant textNode which searches textNodes and checks if the id is the same as the textNodeIndex
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  // take the text from the textNode and replace the text on the screen with that text
  textElement.innerText = textNode.text;
  // remove all buttons so we can re add correct buttons
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
  // adding buttons by going into textNode.options and looping through them one by one
  textNode.options.forEach((option) => {
    // check if the option is possible based on choices
    if (showOption(option)) {
      // create a button which has the option text and btn class
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      //give it a click listener which runs selectOption function
      button.addEventListener("click", () => selectOption(option));
      //add the button
      console.log(button);
      optionButtonsElement.appendChild(button);
    }
  });
}
function showOption(option) {
  console.log(state);
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text:
      "Hello welcome to Nataly and Naseems Pepega adventure.\n" +
      "This adventure is easy to play just pick an option, lets start with an easy one.\n" +
      "Are you Nataly or Naseem?",
    options: [
      {
        text: "Nataly",
        setState: { nataly: true },
        nextText: 2,
      },
      {
        text: "Naseem",
        setState: { naseem: true },
        nextText: 101,
      },
    ],
  },
  {
    id: 2,
    text: `Nataly looked back towards the burning wreck of the ship, reflections of flame dancing in the midnight ocean as it slowly sank beneath the waves. How long had it been since they ran aground? Impossible to say, but it felt like an eternity. Caught up in the storm, the S.S Chee-z had been tossed like a rag doll towards the inescapable, dark monolith that now lay inexorably before them. Thrown against the rocks, she supposed that at some point the cargo must have spilled loose and been ignited by a stray spark. She looked to her sides, taking in the full length of the dark beach and the cliffs and forest that lay further inland. This island was an unknown, something which had been absent from all the latest navigational charts.

      To Nataly’s side, Naseem ran his hands through his luscious locks of hair. She was struck suddenly by how unbelievably handsome he was, and found herself blushing. `,
    options: [
      {
        text: "Flirt with the sexy Arabian prince",
        setState: { flirt: true },
        nextText: 3,
      },
      {
        text: "Don't Flirt",
        setState: { noflirt: true },
        nextText: 4,
      },
    ],
  },
  {
    id: 101,
    text: `Naseem looked back towards the burning wreck of the ship, reflections of flame dancing in the midnight ocean as it slowly sank beneath the waves. How long had it been since they ran aground? Impossible to say, but it felt like an eternity. Caught up in the storm, the S.S Chee-z had been tossed like a rag doll towards the inescapable, dark monolith that now lay inexorably before them. Thrown against the rocks, he supposed that at some point the cargo must have spilled loose and been ignited by a stray spark. He looked to his sides, taking in the full length of the dark beach and the cliffs and forest that lay further inland. This island was an unknown, something which had been absent from all the latest navigational charts.
    To Naseem’s side, Nataly looked kinda sus. Noticing his glance, she asked him ‘what is it?’. Naseem was suddenly struck by how amazingly attractive and seductive her voice was.
`,
    options: [
      {
        text: "Flirt with the sexy Serbian girl ",
        setState: { flirt: true },
        nextText: 103,
      },
      {
        text: "Don't Flirt",
        setState: { noflirt: true },
        nextText: 104,
      },
    ],
  },
  {
    id: 104,
    text: `Turning to face the forest, Naseen began considering what their next move should be. In the distance he could faintly make out what could possibly be smoke and a faint light from a fire deep in the depths.
    ‘Nataly, it looks like there might be someone else out there. Maybe we should go check it out?’
    Nataly nodded, and the two began to walk into the darkness of the forest. For hours, they travelled by torchlight along well-trodden ancient paths. With no guide nor any landmarks to guide them, they found themselves often lost, wandering in circles. By chance, they stumbled their way through the brush and directly into a large tribal settlement, running directly into what appeared to be a primitive-looking man dressed in tribal furs. His features were exaggerated, almost like the drawings of neanderthal cavemen that Naseem had seen in books. As he spotted the two, he pointed and screamed out.
    ‘OOH OOH AH AH!’ Within seconds, Nataly and Naseem found themselves surrounded by similar-looking men and women wielding spears, presumably the locals of this place, and were prodded towards the village centre.
    `,
    options: [
      {
        text: "Continue",
        nextText: 7,
      },
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 4,
    text: `Turning to face the forest, Nataly began considering what their next move should be. In the distance she could faintly make out what could possibly be smoke and a faint light from a fire deep in the depths.
    ‘Naseem, it looks like there might be someone else out there. Maybe we should go check it out?’
    Naseem nodded, and the two began to walk into the darkness of the forest. For hours, they travelled by torchlight along well-trodden ancient paths. With no guide nor any landmarks to guide them, they found themselves often lost, wandering in circles. By chance, they stumbled their way through the brush and directly into a large tribal settlement, running directly into what appeared to be a primitive-looking man dressed in tribal furs. His features were exaggerated, almost like the drawings of neanderthal cavemen that Naseem had seen in books. As he spotted the two, he pointed and screamed out.
    ‘OOH OOH AH AH!’ Within seconds, Nataly and Naseem found themselves surrounded by similar-looking men and women wielding spears, presumably the locals of this place, and were prodded towards the village centre.
    `,
    options: [
      {
        text: "Continue",
        nextText: 7,
      },
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 103,
    text: `Nataly, I know this isn’t the time, but...damn you got a sexy voice,’
    ‘Wh-what do you mean? Idiot!’ she replied, punching him in the arm. But her embarrassed expression as she awkwardly looked away revealed her true feelings.

          Making their way further up the beach, Naseem caught a fluttering of motion in the shadows of the trees at the edge of the forest. He motioned for Nataly to stop, taking her hand and causing her to blush again as his incredible fighting instincts alerting him to the danger that approached. As he focused his gaze, several of the closest shadows slowly coalesced into humanoid shapes, approaching with speed and stealth. Casting his torch towards the figures, he saw a group of around a dozen men and women dressed in tribal furs. Their features were exaggerated, almost like the drawings of neanderthal cavemen that he had seen in books, and they held rudimentary weapons - stone spears and slings, which they brandished towards the survivors as they were spotted.
          ‘Ooo ooh, ooh ee ah?’ the lead figure spoke in a questioning inflection.`,
    options: [
      {
        text: "Respond with 'English motherfucker do you speak it?'",
        nextText: 105,
      },
      {
        text: "Respond with ‘eee ooh ah ooh ah?",
        nextText: 6,
      },
      {
        text: "Respond with ‘ooh ooh ee ooh",
        nextText: 5,
      },
      {
        text: "Respond with 'What is this what kind of ape are you?'",
        nextText: 5,
      },
    ],
  },
  {
    id: 3,
    text: `‘Naseem, I know this isn’t the time, but...damn you’re pretty’
          ‘I don’t know Nataly, kinda sus’, he replied.

          Making their way further up the beach, Naseem caught a fluttering of motion in the shadows of the trees at the edge of the forest. He motioned for Nataly to stop, taking her hand and causing her to blush again as his incredible fighting instincts alerting him to the danger that approached. As he focused his gaze, several of the closest shadows slowly coalesced into humanoid shapes, approaching with speed and stealth. Casting his torch towards the figures, he saw a group of around a dozen men and women dressed in tribal furs. Their features were exaggerated, almost like the drawings of neanderthal cavemen that he had seen in books, and they held rudimentary weapons - stone spears and slings, which they brandished towards the survivors as they were spotted.
          ‘Ooo ooh, ooh ee ah?’ the lead figure spoke in a questioning inflection.`,
    options: [
      {
        text: "Respond with 'English motherfucker do you speak it?'",
        nextText: 105,
      },
      {
        text: "Respond with ‘eee ooh ah ooh ah?",
        nextText: 6,
      },
      {
        text: "Respond with ‘ooh ooh ee ooh",
        nextText: 5,
      },
      {
        text: "Respond with 'What is this what kind of ape are you?'",
        nextText: 5,
      },
    ],
  },
  {
    id: 105,
    text: `The tribesman’s face contorted in fury as he heard the reply. Leaping forwards with a screech of fury, he brought his spear down.
    On this signal the rest of the tribespeople rush Naseem and Nataly killing them instantaneously`,
    options: [
      {
        text: "You killed them..",
        nextText: -1,
      },
      {
        text: "play again?",
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text: `The response sent the tribesmen into a frenzy of monkey-like grunting. As they raised their weapons and charged forwards, Naseem stepped in front of Nataly, and moving into a well-practiced boxing stance, he deftly dodged the spears of the foremost two tribesmen and knocked them flat with blows to the head. Before he could brace himself for the next wave, however, he found himself surrounded on all sides by spears. Lowering his fists, he was approached by the leader of the group.
    ‘You come us now. Be prisoner. Me Glimpee, do best capture.’
    Naseem and Nataly found themselves tied by the group of tribesmen and pulled into the forest. After what felt like hours of relentless marching, they saw a settlement ahead.
    `,
    options: [
      {
        text: "Continue",
        nextText: 7,
      },
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 6,
    text: `‘Come this way my broodas’ the lead tribesmen replied. ‘Me call Glimpee, take see Pepega leader, wise man, they help’.
    Nataly turned to Naseem and raised an eyebrow.
    ‘I suppose we don’t have any better leads. It seems like they’ve lived here for a long time. Maybe they know something about this place?’
    
    The group proceeded into the darkened forest and, with the perfect guidance of the tribespeople, followed along the ancient paths of their people and quickly reached the Pepega settlement.
    `,

    options: [
      {
        text: "Continue",
        nextText: 7,
      },
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: `Arriving at the village, the duo looked around at an expansive clearing filled with ramshackle wooden huts. The chaos was organised around a large, exquisitely carved throne which contrasted starkly with the messy nature of the rest of the village. Atop the throne sat what must surely have been the tribe leader. Her short stature belied the majesty that surrounded her. 
    ‘Greetings my fellow Pepegas,’ she exclaimed. Casting her eyes upon Naseem and Nataly, she added ‘what is this we have in our midst today, Glimpee?’
    ‘Ooo oo ooo ee ooh,’ the tribesman known as Glimpee responded. Somehow, the leader seemed to understand his nonsensical grunting perfectly, and replied in the same way.
    ‘Ya lil dipshit,’ she added. ‘These guests must be taken to the wise one.’
    She summoned her attendants, who led the confused Nataly and Naseem in the direction of a relatively large and well-built tent on the edge of the village.
    `,
    options: [
      {
        text: "Continue",
        nextText: 8,
      },
      {
        text: "Continue",
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    text: `As Nataly and Naseem entered the tent, they saw a gnarled old tribesman speaking with a young man whilst tinkering with a strange device which appeared to be some sort of primitive computer made primarily of coconuts and bananas. Judging from what little of the conversation Nataly was able to understand, it appeared that he was giving the young man relationship advice. Evidently, this mysterious ‘G’ was both the tribe’s chief engineer and chief counselor. 

    ‘Yo, guests,’ he spoke. ‘How are you today bro?’
    ‘Not so great, actually,’ Nataly replied. ‘We kinda barely survived a flaming shipwreck and then almost died making our way here.’
    ‘Oh. That sucks man.’
    His voice growing serious, the sage explained: ‘You’re not the first to crash here, and you won’t be the last. The evil wizard who lives in the tower rules this land, and he kills all outlanders he sees. The only reason he leaves us is because we don’t bother him anymore. Every time we tried to storm his tower, we were helpless to do anything.’
    Nataly and Naseem’s faces fell, realising the difficulty of the task that faced them ahead.
  ‘Don’t worry. There’s still a chance. The prophecies of our tribe tell of the brave foreign heroes who will defeat the wizard one day. But only the truly worthy can overcome the trial needed to wield the legendary blade of our tribe the Infinity Edge. None among us has yet been able to succeed.’
    Shifting his weight, he continued.
    ‘If you’d rather not take the risk, the tribe is willing to arm you both with spears and our glorious leader Moka has kindly offered to send scout leader Glimpee with you, or even accompany you herself.’
    `,
    options: [
      {
        text: "Take Moka",
        setState: { spear: true, moka: true },
        nextText: 9,
      },
      {
        text: "Take Glimpee",
        setState: { spear: true, glimpee: true },
        nextText: 9,
      },
      {
        text: "Retrieve the Infinity Edge",
        nextText: 69,
      },
    ],
  },
  {
    id: 69,
    text: `Nataly and Naseem entered the trial circle at the centre of the village, directly in front of Moka’s throne, where the intimidating leader sat with a stern glare. To her side, the one known as ‘G’ stood overseeing the trial.
    ‘This trial will find the true strength of these visitors. Only the destined hero will be able to overcome what is to come.’
    As he spoke, two statues on either side of the throne appeared to come to life, their eyes shining with purple light. 
    ‘One of us always tells the truth,’ said the left.
    ‘And one of us always lies,’ said the right.
    ‘One of us holds nothing,’ said the left.
    ‘And the other holds that which you seek,’ said the right.
    ‘How can you know for certain which?’ they asked in tandem.
    
    ‘Glimpee, what do you think the answer is?’ Moka called from her throne.
    ‘Ooh ooh ah?’ he answered.
    ‘Fuck’s sake you’re so bad man what am I watching’
    `,

    options: [
      {
        text:
          "ask either statue ‘where would the other statue say the sword is?’",
        setState: { ie: true },
        nextText: 70,
      },
      {
        text: `ask either statue: ‘are you telling the truth?’`,
        nextText: 71,
      },
      {
        text: "ask either statue: ‘is the other statue lying?’",
        nextText: 71,
      },
    ],
  },
  {
    id: 70,
    text: `The legendary Infinity Edge suddenly appears from within one of the statues, Naseem and Nataly both grip the sword and raise it up triumphantly.
    The people of Pepega village start roaring triumphantly, ‘OOO OOO OOH AA AA’. The leaders give the heroes a nod of approval. Wielding their new weapon Naseem and Nataly head towards the dark tower. `,

    options: [
      {
        text: "Continue",
        nextText: 9,
      },
      {
        text: "Continue",
        nextText: 9,
      },
    ],
  },
  {
    id: 71,
    text: `The light in the statue’s eyes intensified, radiating outwards towards both Naseem and Natalie in twin laser beams. The two ate shit and died as so many had before them. The island remained unchanged, and the evil wizard continued to bring ships in to wreck for his own nefarious purposes.
    `,

    options: [
      {
        text: "You died idot.",
        nextText: -1,
      },
      {
        text: `How did you fail that riddle fucks sake man`,
        nextText: -1,
      },
      {
        text: "Click any button to play again..",
        nextText: -1,
      },
      {
        text: "Or just alt-f4..",
        nextText: -1,
      },
    ],
  },
  {
    id: 9,
    text: `After a few hours' walk, the group left the forest behind, proceeding along the cliff edges of the island towards a strange tower that hadn’t been visible from the beach. Approaching the gargantuan, shadowy tower, Naseem and Nataly both felt the presence of a strong, evil magical power gnawing at them like an ever-present sickening anxiety. Atop the tower a large crystal glowed a deep purple hue, pulsing regularly. Surely it must be the source of whatever had pulled the S.S. Chee-z towards the island and onto the rocks. Clutching her fists, Nataly vowed to make the one responsible pay for the disaster. As the group began to climb the steps of the tower, the gigantic stone doors which lay at the top began to slowly swing open, as if it was welcoming them. At the same moment, a booming voice rang out:
    ‘WHO DARES APPROACH MY TOWER? LEAVE NOW IF YOU WISH TO LIVE.’
    Shaken, Nataly and Naseem steeled their resolve and entered the door.
    `,

    options: [
      {
        text: "IT IS I, NATALY! AND WE ARE HERE TO DEFEAT YOU OLD MAN.",
        requiredState: (currentState) => currentState.nataly,
        nextText: 10,
      },
      {
        text: "Yo, it's the boy from Naseem I'm here to beat you down old man.",
        requiredState: (currentState) => currentState.naseem,
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    text: `The darkness in the lobby of the tower cast an oppressive atmosphere as the party carefully made their way towards the ornately carved stairs, inlaid with gold and jewelry. To the highly classy Nataly, such decoration seemed somewhat crass and tacky - as if it was a desperate attempt by an old man to impress a non-existent audience. As the group took their first steps up the staircase, they were distracted by a loud groaning sound coming from the direction of the door. Spinning around, Naseem saw a large group of shambling creatures approaching from the shadowy corners of the room. The voice that had spoken earlier sounded again.
    ‘YOU WERE WARNED, YOU FOOLS. YOU WON’T SURVIVE MY ARMY OF UNDEAD SIMPS.’
    The group began sprinting up the stairs and away from the horde of monsters. The staircase spiralled around into what felt like a never-ending ascending loop, as the zombies began to pile their way up the steps behind the group like a cresting wave. 
    
    As the group piled through the doorway into a large chamber, they were dismayed at the sight of a large door blocking their escape at the far end.
    `,
    options: [
      {
        text: "Continue",
        requiredState: (currentState) => currentState.moka,
        setState: { mokadead: true },
        nextText: 11,
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.moka,
        setState: { mokadead: true },
        nextText: 11,
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.glimpee,
        setState: { glimpeedead: true },
        nextText: 12,
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.glimpee,
        setState: { glimpeedead: true },
        nextText: 12,
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.ie,
        nextText: 13,
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.ie,
        nextText: 13,
      },
    ],
  },
  {
    id: 11,
    text: `Moka the Pepega queen turned her back on the door, walking back towards the stairwell with her staff raised high.
    ‘Fucksake man I’ll show them just how Pepega I can be’.
    As the power of raw Pepega flowed through her it soon became so powerful that it began to warp the very laws of time and space, creating a singularity which distorted the very stone and air surrounding her.
    ‘Moka! No! Don’t do it!’ Nataly called, reaching out to her.
    ‘Get out of here! Go find the wizard! I’ll be fine...I’m used to inting. GG GO NEXT.’
    As the zombies began to grab at her arms and legs, a violent implosion obscured the entire scene from vision. When the dust settled, only the shattered floor and ceiling of the tower remained.
    `,
    options: [
      {
        text: "Continue",
        nextText: 14,
      },
      {
        text: "Continue",
        nextText: 14,
      },
    ],
  },
  {
    id: 12,
    text: `Glimpee the Pepega warrior turned his back on the door, walking back towards the stairwell with his spear raised high.
    ‘OOO OOO OOH AA AA’ he screeched, and began aggressively charging the zombies. 
    ‘It’s suicide Glimpee!’ Naseem called out.
    ‘OOOOH OOOOH AAAHHHH AAAAHHHH!’
    Growing frantic, Glimpee charged headlong into the group of zombies, spearing one directly through the head and spinning his spear into the chest of another. Losing his grip on the spear as the zombie’s body fell away, the brave warrior began to tear at the creatures with his bare hands and feet like a rabid animal. As they began to overwhelm him, Nataly picked the lock on the door and slipped through with Naseem.
    `,
    options: [
      {
        text: "Continue",
        nextText: 14,
      },
      {
        text: "Continue",
        nextText: 14,
      },
    ],
  },
  {
    id: 13,
    text: `Faced with no other choice, Nataly and Naseem turned to face the oncoming horde. Recalling the weapon that they had won from the Pepega clan, Nataly reached down to the scabbard and drew the legendary blade. It shone with a brilliant light as the zombies approached, and she swung, a beam of light cutting down three of the creatures at once. Another slash turned three more of the beasts to dust, and even with their rudimentary leftover intelligence the others began to back away in fear of the weapon’s holy power. Meanwhile, Naseem’s tinkering had freed the door lock, and the two dashed through in the reprieve. 
    `,
    options: [
      {
        text: "Continue",
        nextText: 14,
      },
      {
        text: "Continue",
        nextText: 14,
      },
    ],
  },
  {
    id: 14,
    text: `
    Awaiting them at the very summit of the tower, standing beneath the enormous crystal, was the dark-robed wizard. Lightning flared in the sky above as storm clouds once again gathered around the island. The man turned, his deranged face briefly illuminated by the flash of a lightning bolt. His face was ancient, ravaged and disfigured by the passage of time and his long imprisonment on the island. 
    ‘My name is Pogge’, the old man spoke. ‘I, too, was once like you. I washed up on this island hundreds of years ago, and found myself surrounded by nothing but these animals. Not a single person ever came to look for me. It was all I could do to survive apart from them for many years before I was able to construct this tower.’
    He walked towards the crystal, raising his hand in admiration at his own work. ‘After decades I was able to finish the crystal you see before you. It lures in ships like yours, pulling them into the rocks, where I can easily gather bodies for my simp army. One day I’ll be able to salvage enough material to finally leave this place, and then I’ll avenge myself on the entire world for not searching for me.’
    ‘You’re a crazy old man and I’ll never simp for you’ Nataly responded.
    ‘Shuddup Nataly’
    ‘Shuddup Pogge’
    ‘SHUDDUP NATALY’
    ‘SHUDDUP POGGE’
    With that, the dark wizard began channeling a spell.
    `,
    options: [
      {
        text: "Attack with Pepega Spear",
        requiredState: (currentState) =>
          currentState.spear && currentState.naseem && currentState.flirt,
        nextText: 15,
      },
      {
        text: "Attack with Pepega Spear",
        requiredState: (currentState) =>
          currentState.spear && currentState.nataly && currentState.flirt,
        nextText: 16,
      },
      {
        text: "Attack with Pepega Spear",
        requiredState: (currentState) =>
          currentState.spear && currentState.nataly && currentState.noflirt,
        nextText: 17,
      },
      {
        text: "Attack with Pepega Spear",
        requiredState: (currentState) =>
          currentState.spear && currentState.naseem && currentState.noflirt,
        nextText: 18,
      },
      {
        text: "Dodge",
        setState: { dodge: 1 },
        nextText: 19,
      },
      {
        text: "Attack with the Infinity Edge",
        requiredState: (currentState) => currentState.ie && currentState.nataly,
        nextText: 20,
      },
      {
        text: "Attack with the Infinity Edge",
        requiredState: (currentState) => currentState.ie && currentState.naseem,
        nextText: 21,
      },
      {
        text: "Hold Hands",
        requiredState: (currentState) => currentState.flirt,
        nextText: 22,
      },
    ],
  },
  {
    id: 19,
    text: `Nataly and Naseem rolled to each side, deftly avoiding the gout of dark flame fired by the evil Pogge.
    Pogge scoffs and laughs and begins drawing power from his crystal to shoot another of his dark spells.`,
    options: [
      {
        text: "Attack with Pepega Spear",
        requiredState: (currentState) =>
          currentState.spear && currentState.naseem && currentState.flirt,
        nextText: 15,
      },
      {
        text: "Attack with Pepega Spear",
        requiredState: (currentState) =>
          currentState.spear && currentState.nataly && currentState.flirt,
        nextText: 16,
      },
      {
        text: "Attack with Pepega Spear",
        requiredState: (currentState) =>
          currentState.spear && currentState.nataly && currentState.noflirt,
        nextText: 17,
      },
      {
        text: "Attack with Pepega Spear",
        requiredState: (currentState) =>
          currentState.spear && currentState.naseem && currentState.noflirt,
        nextText: 18,
      },
      {
        text: "Dodge again",
        nextText: 23,
      },
      {
        text: "Attack with the Infinity Edge",
        requiredState: (currentState) => currentState.ie && currentState.nataly,
        nextText: 20,
      },
      {
        text: "Attack with the Infinity Edge",
        requiredState: (currentState) => currentState.ie && currentState.naseem,
        nextText: 21,
      },
      {
        text: "Hold Hands",
        requiredState: (currentState) => currentState.flirt,
        nextText: 22,
      },
    ],
  },
  {
    id: 15,
    text: `With a battle cry Naseem charged the evil Pogge. His spell fired off, sending searing black flames directly towards him.
    At the last moment, Nataly leaped in front of the flames, taking them directly to the chest. As her body and soul were seared by the dark magic, Naseem drove his Pepega spear directly into Pogge’s chest.`,
    options: [
      {
        text: "Continue",
        requiredState: (currentState) => currentState.glimpeedead,
        nextText: 201, // nataly dead glimpee dead
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.mokadead,
        nextText: 202, // nataly dead moka dead
      },
    ],
  },
  {
    id: 16,
    text: `With a battle cry Nataly charged the evil Pogge. His spell fired off, sending searing black flames directly towards her.
    At the last moment, Naseem leaped in front of the flames, taking them directly to the chest. As his body and soul were seared by the dark magic, Nataly drove her Pepega spear directly into Pogge’s chest.`,
    options: [
      {
        text: "Continue",
        requiredState: (currentState) => currentState.glimpeedead,
        nextText: 203, // naseem dead glim dead
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.mokadead,
        nextText: 204, //naseem dead moka ded
      },
    ],
  },
  {
    id: 17,
    text: `With a battle cry Nataly charged the evil Pogge. His spell fired off, sending searing black flames directly towards her.
    The flames hit Nataly directly in the chest, searing into her very soul. As her life faded, Naseem charged Pogge with his Pepega spear, driving it directly into his chest.
`,
    options: [
      {
        text: "Continue",
        requiredState: (currentState) => currentState.glimpeedead,
        nextText: 201, // nataly dead glimpee dead
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.mokadead,
        nextText: 202, // nataly dead moka dead
      },
    ],
  },
  {
    id: 18,
    text: `With a battle cry Naseem charged the evil Pogge. His spell fired off, sending searing black flames directly towards him.
    The flames hit Naseem directly in the chest, searing into his very soul. As his life faded, Nataly charged Pogge with her Pepega spear, driving it directly into his chest.
`,
    options: [
      {
        text: "Continue",
        requiredState: (currentState) => currentState.glimpeedead,
        nextText: 203, // naseem dead glim dead
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.mokadead,
        nextText: 204, //naseem dead moka ded
      },
    ],
  },
  {
    id: 20,
    text: `With a battle cry Nataly charged the evil Pogge. His spell fired off, sending searing black flames directly towards her. At the last moment, however, her glowing sword absorbed the flame like a magnet. Continuing with her momentum, Nataly thrust the sword directly through Pogge’s chest in a flash of holy light.`,
    options: [
      {
        text: "Continue",
        nextText: 205, // both live
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.flirt,
        nextText: 206,
      },
    ],
  },
  {
    id: 21,
    text: `With a battle cry Naseem charged the evil Pogge. His spell fired off, sending searing black flames directly towards Naseem. At the last moment, however, the glowing sword absorbed the flame like a magnet. Continuing with his momentum, Naseem thrust the sword directly through Pogge’s chest in a flash of holy light.`,
    options: [
      {
        text: "Continue",
        nextText: 205, // both live
      },
      {
        text: "Continue",
        requiredState: (currentState) => currentState.flirt,
        nextText: 206,
      },
    ],
  },
  {
    id: 22,
    text: `In desperation, Nataly reached out towards her beloved Naseem. The two joined hands and stood together against the evil Pogge’s dark flame. The power of their love entwined around them into a protective pink cocoon, dispelling his spell easily. It swirled and coalesced into a beam of pink light, shooting forwards and impaling Pogge through the chest in a beam of love.`,
    options: [
      {
        text: "Continue",
        requiredState: (currentState) => currentState.flirt,
        nextText: 206,
      },
    ],
  },
  {
    id: 23,
    text: `As Pogge’s spell missed for the second time, his face began to soften, doubt showing in his ancient eyes at his foes’ pacifism. Sensing her opportunity, Nataly spoke.
    ‘Pogge, it’s not too late. There’s still some good in you. Why don’t we all leave here together?’
    `,
    options: [
      {
        text: "Continue",
        nextText: 207, // both live pogge good
      },
    ],
  },
  {
    id: 201,
    text: `With Pogge defeated, Naseem returned to the Pepega tribe’s village. With the tribe’s bravest warrior gone, the Pepegas mourned for their lost friend and struggled to ensure their food supplies. Nonetheless, they celebrated the defeat of the evil wizard, their newfound freedom, and their two heroes.
    `,
    options: [
      {
        text: "Thanks for playing",
        nextText: -1,
      },
      {
        text: "Play again?",
        nextText: -1,
      },
    ],
  },
  {
    id: 202,
    text: `With Pogge defeated, Naseem returned to the Pepega tribe’s village. With the tribe’s leader gone, the Pepegas reverted to (even more) primitive ways, splitting apart into factions and warring against each other.`,
    options: [
      {
        text: "Thanks for playing",
        nextText: -1,
      },
      {
        text: "Play again?",
        nextText: -1,
      },
    ],
  },
  {
    id: 203,
    text: `With Pogge defeated, Nataly returned to the Pepega tribe’s village. With the tribe’s bravest warrior gone, the Pepegas mourned for their lost friend and struggled to ensure their food supplies. Nonetheless, they celebrated the defeat of the evil wizard, their newfound freedom, and their two heroes.
    `,
    options: [
      {
        text: "Thanks for playing",
        nextText: -1,
      },
      {
        text: "Play again?",
        nextText: -1,
      },
    ],
  },
  {
    id: 204,
    text: `With Pogge defeated, Nataly returned to the Pepega tribe’s village. With the tribe’s leader gone, the Pepegas reverted to (even more) primitive ways, splitting apart into factions and warring against each other.`,
    options: [
      {
        text: "Thanks for playing",
        nextText: -1,
      },
      {
        text: "Play again?",
        nextText: -1,
      },
    ],
  },
  {
    id: 205,
    text: `With Pogge defeated, Nataly and/or Naseem returned to the Pepega tribe’s village, where they spent the rest of their lives living peacefully amongst their fellow tribesmen.
    `,
    options: [
      {
        text: "Thanks for playing",
        nextText: -1,
      },
      {
        text: "Play again?",
        nextText: -1,
      },
    ],
  },
  {
    id: 206,
    text: `With Pogge defeated, Nataly and/or Naseem returned to the Pepega tribe’s village, where they spent the rest of their lives living peacefully amongst their fellow tribesmen. The two married and produced many happy children. :)
    `,
    options: [
      {
        text: "Thanks for playing",
        nextText: -1,
      },
      {
        text: "Play again?",
        nextText: -1,
      },
    ],
  },
  {
    id: 207,
    text: `With Pogge convinced, the group returned to the Pepega tribe’s village. With their help, they were able to fashion a basic raft. Using Pogge’s magic, the raft survived the journey across the ocean and Nataly and Naseem were able to return to their lives. Pogge decided to devote his magic to helping people, and in his downtime he became an extremely popular and successful elderly Twitch streamer`,
    options: [
      {
        text: "Thanks for playing",
        nextText: -1,
      },
      {
        text: "Play again?",
        nextText: -1,
      },
    ],
  },
];

startGame();
