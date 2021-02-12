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
        nextText: 101,
      },
      {
        text: "Naseem",
        setState: { naseem: true },
        nextText: 999,
      },
    ],
  },
  {
    id: 101, //flirt or no flirt scenario
    text: `Nataly looked back towards the burning wreck of the ship, reflections of flame dancing in the midnight ocean as it slowly sank beneath the waves. How long had it been since they ran aground? Impossible to say, but it felt like an eternity. Caught up in the storm, the S.S Chee-z had been tossed like a rag doll towards the inescapable, dark monolith that now lay inexorably before them. Thrown against the rocks, she supposed that at some point the cargo must have spilled loose and been ignited by a stray spark. She looked to her sides, taking in the full length of the dark beach and the cliffs and forest that lay further inland. This island was an unknown, something which had been absent from all the latest navigational charts.

      To Nataly’s side, Naseem ran his hands through his luscious locks of hair. She was struck suddenly by how unbelievably handsome he was, and found herself blushing. `,
    options: [
      {
        text: "Flirt with the sexy arabian prince",
        setState: { flirt: true },
        nextText: 102,
      },
      {
        text: "Don't Flirt",
        nextText: 404, //go ot no flirt scenario
      },
    ],
  },
  {
    id: 404, //flirt or no flirt scenario
    text: `Matt: "Who would even pick this option?"

    Turning to face the forest, Nataly began considering what their next move should be. In the distance she could faintly make out what could possibly be smoke and a faint light from a fire deep in the depths.
    ‘Naseem, it looks like there might be someone else out there. Maybe we should go check it out?’
    Naseem nodded, and the two began to walk into the darkness of the forest. For hours, they travelled by torchlight along well-trodden ancient paths. With no guide nor any landmarks to guide them, they found themselves often lost, wandering in circles. By chance, they stumbled their way through the brush and directly into a large tribal settlement.
    `,
    options: [
      {
        text: "skip to tent for now",
        nextText: 104,
      },
      {
        text: "Die and restart for now",
        nextText: -1,
      },
    ],
  },
  {
    id: 102, //ambush scenario
    text: `‘Naseem, I know this isn’t the time, but...damn you’re pretty’
          ‘I don’t know Nataly, kinda sus’, he replied.

          Making their way further up the beach, Naseem caught a fluttering of motion in the shadows of the trees at the edge of the forest. He motioned for Nataly to stop, taking her hand and causing her to blush again as his incredible fighting instincts alerting him to the danger that approached. As he focused his gaze, several of the closest shadows slowly coalesced into humanoid shapes, approaching with speed and stealth. Casting his torch towards the figures, he saw a group of around a dozen men and women dressed in tribal furs. Their features were exaggerated, almost like the drawings of neanderthal cavemen that he had seen in books, and they held rudimentary weapons - stone spears and slings, which they brandished towards the survivors as they were spotted.
          ‘Ooo ooh, ooh ee ah?’ the lead figure spoke in a questioning inflection.`,
    options: [
      {
        text: "Respond with 'English motherfucker do you speak it?'",
        nextText: 203,
      },
      {
        text: "Respond with ‘eee ooh ah ooh ah?",
        nextText: 103,
      },
      {
        text: "Respond with ‘ooh ooh ee ooh",
        nextText: 203,
      },
      {
        text: "Respond with 'What is this what kind of ape are you?'",
        nextText: 203,
      },
    ],
  },
  {
    id: 203, //ambush scenario bad responce
    text: `The response sent the tribesmen into a frenzy of monkey-like grunting. As they raised their weapons and charged forwards, Naseem stepped in front of Nataly, and moving into a well-practiced boxing stance, he deftly dodged the spears of the foremost two tribesmen and knocked them flat with blows to the head. Before he could brace himself for the next wave, however, he found himself surrounded on all sides by spears. Lowering his fists, he was approached by the leader of the group.
    ‘You come us now. Be prisoner. Me Glimpee, do best capture.’
    Naseem and Nataly found themselves tied by the group of tribesmen and pulled into the forest. After what felt like hours of relentless marching, they saw a settlement ahead.
    `,
    options: [
      {
        text: "skip to tent for now",
        nextText: 104,
      },
      {
        text: "Die and restart for now",
        nextText: -1,
      },
    ],
  },
  {
    id: 103, //ambush scenario good responce scenario
    text: `‘Come this way my broodas’ the lead tribesmen replied. ‘Me call Glimpee, take see Pepega leader, wise man, they help’.
            Nataly turned to Naseem and raised an eyebrow.
            ‘I suppose we don’t have any better leads. It seems like they’ve lived here for a long time. Maybe they know something about this place?’

            Arriving at the Pepega village, the duo looked around at an expansive clearing filled with ramshackle wooden huts. The chaos was organised around a large, exquisitely carved throne which contrasted starkly with the messy nature of the rest of the village. Atop the throne sat what must surely have been the tribe leader. Her short stature belied the majesty that surrounded her.
            ‘Greetings my fellow Pepegas’ she exclaimed. Casting her eyes upon Naseem and Nataly, she added ‘what have you brought me today?’
            ‘Ooo oo ooo ee ooh,’ the tribesman who had introduced himself as Glimpse responded. Somehow, the leader seemed to understand his nonsensical grunting perfectly, and replied in the same way.`,

    options: [
      {
        text: "To the Tent",
        nextText: 104,
      },
    ],
  },
  {
    id: 104,
    text: `As Nataly and Naseem entered the tent, they saw a gnarled old tribesman speaking with a young man whilst tinkering with a strange device which appeared to be some sort of primitive computer made primarily of coconuts and bananas. Judging from what little of the conversation Nataly was able to understand, it appeared that he was giving the young man relationship advice. Evidently, this mysterious ‘G’ was both the tribe’s chief engineer and chief counselor. 

    ‘Welcome, guests,’ he spoke. ‘How are you today?’
    ‘Not so great, actually,’ Nataly replied. ‘We kinda barely survived a flaming shipwreck and then almost died making our way here.’
    ‘Oh. That sucks man.’
    His voice growing serious, the sage explained: ‘You’re not the first to crash here, and you won’t be the last. The evil wizard who lives in the tower rules this land, and he kills all outlanders he sees. The only reason he leaves us is because we don’t bother him anymore. Every time we tried to storm his tower, we were helpless to do anything.
    `,
    options: [
      {
        text: "Take Moka",
        setState: { spear: true },
        setState: { moka: true },
        nextText: 105,
      },
      {
        text: "Take Glimpee",
        setState: { spear: true },
        setState: { glimpee: true },
        nextText: 105,
      },
      {
        text: "Retrieve the Infinity Edge",
        nextText: 999,
      },
    ],
  },
  {
    id: 105,
    text: `Before you leave you are given a spear by the one who calls himself glimpee
    
    Approaching the gargantuan, shadowy tower, Naseem and Nataly both felt the presence of a strong, evil magical power gnawing at them like an ever-present sickening anxiety. Atop the tower a large crystal glowed a deep purple hue, pulsing regularly. Surely it must be the source of whatever had pulled the S.S. Chee-z towards the island and onto the rocks. Clutching her fists, Nataly vowed to make the one responsible pay for the disaster. As the group drew closer to the door, it became clear that the approach would not be as easy as she had hoped. The stone doors were blocked completely by a glowing barrier which repulsed her outstretched hand. At the moment that her fingers brushed the barrier, a booming voice rang out.
    ‘WHO DARES APPROACH MY TOWER?’`,

    options: [
      {
        text: "IT IS I, NATALY!",
        requiredState: (currentState) => currentState.nataly,
        nextText: 106,
      },
      {
        text: "Yo, it's the boy from Naseem I'm here to beat you down old man.",
        requiredState: (currentState) => currentState.naseem,
        nextText: 999,
      },
    ],
  },
  {
    id: 106,
    text: `The darkness in the lobby of the tower cast an oppressive atmosphere as the party carefully made their way towards the ornately carved stairs, inlaid with gold and jewelry. To the highly classy Nataly, such decoration seemed somewhat crass and tacky - as if it was a desperate attempt by an old man to impress a non-existent audience. As the group took their first steps up the staircase, they were distracted by a loud groaning sound coming from the direction of the door. Spinning around, Naseem saw a large group of shambling creatures approaching from the shadowy corners of the room. The voice that had spoken earlier sounded again.
    ‘YOU FOOLS. YOU WON’T SURVIVE MY ARMY OF UNDEAD SIMPS.’`,
    options: [
      {
        text: "moka",
        requiredState: (currentState) => currentState.moka,
        nextText: 107,
      },
      {
        text: "glimpee",
        requiredState: (currentState) => currentState.glimpee,
        nextText: 108,
      },
    ],
  },
  {
    id: 107,
    text: `Moka the Pepega queen turned her back on the door, walking back towards the stairwell with her staff raised high.
    ‘Fucksake man I’ll show them just how Pepega I can be’.
    As the power of raw Pepega flowed through her it soon became so powerful that it began to warp the very laws of time and space, creating a singularity which distorted the very stone and air surrounding her.
    ‘Moka! No! Don’t do it!’ Nataly called, reaching out to her.
    ‘Get out of here! Go find the wizard! I’ll be fine... I’m used to inting. GG GO NEXT.’
    As the zombies began to grab at her arms and legs, a violent implosion obscured the entire scene from vision. When the dust settled, only the shattered floor and ceiling of the tower remained.
    `,
    options: [
      {
        text: "Go up to the roof",
        nextText: 108,
      },
    ],
  },
  {
    id: 108,
    text: `Awaiting them at the very summit of the tower, standing beneath the enormous crystal, was the dark-robed wizard. Lightning flared in the sky above as storm clouds once again gathered around the island. The man turned, his deranged face briefly illuminated by the flash of a lightning bolt. His face was ancient, ravaged and disfigured by the passage of time and his long imprisonment on the island. 
    ‘My name is Pogge’, the old man spoke. ‘I, too, was once like you. I washed up on this island hundreds of years ago, and found myself surrounded by nothing but these animals. Not a single person ever came to look for me. It was all I could do to survive apart from them for many years before I was able to construct this tower.’
    He walked towards the crystal, raising his hand in admiration at his own work. ‘After decades I was able to finish the crystal you see before you. It lures in ships like yours, pulling them into the rocks, where I can easily gather bodies for my simp army. One day I’ll be able to salvage enough material to finally leave this place, and then I’ll avenge myself on the entire world for not searching for me.’
    `,
    options: [
      {
        text: "‘You’re a crazy old man\nI’ll never simp for you’",
        requiredState: (currentState) => currentState.nataly,
        nextText: 109,
      },
    ],
  },
  {
    id: 109,
    text: `‘Shuddup Nataly’
    ‘Shuddup Pogge’
    ‘SHUDDUP NATALY’
    ‘SHUDDUP POGGE’
    With that, the dark wizard began channeling a spell.
    `,
    options: [
      {
        text: "Attack with Pepega Spear",
        requiredState: (currentState) => currentState.spear,
        nextText: 110,
      },
      {
        text: "Dodge",
        setState: { dodge: 1 },
        nextText: 111,
      },
      {
        text: "Attack with the Infinity Edge",
        requiredState: (currentState) => currentState.ie,
        nextText: 112,
      },
      {
        text: "Hold Hands",
        requiredState: (currentState) => currentState.flirt,
        nextText: 113,
      },
    ],
  },
  {
    id: 111, // dodge once scenario
    text: `You both dodge and avoid the attack pogge looks frustrated and begins channeling his spell again`,
    options: [
      {
        text: "‘You’re a crazy old man\nI’ll never simp for you’",
        nextText: 109,
      },
      {
        text: "Attack with Pepega Spear",
        nextText: 110,
      },
      {
        text: "Dodge again",
        setState: { dodge: 2 },
        nextText: 111,
      },
      {
        text: "Attack with the Infinity Edge",
        requiredState: (currentState) => currentState.ie,
        nextText: 112,
      },
      {
        text: "Hold Hands",
        nextText: 113,
      },
      {
        text: "Dodge and attack with spear",
        requiredState: (currentState) => currentState.spear,
        setState: { dodge: 2 },
        nextText: 999, //secret scanario
      },
      {
        text: "Dodge and attack with Infinity Edge",
        requiredState: (currentState) => currentState.ie,
        setState: { dodge: 2 },
        nextText: 999, //secret scanario
      },
    ],
  },
];

startGame();
