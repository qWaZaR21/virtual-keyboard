const CONFIG = {
  tilda: {
    en_main_elem: '`',
    en_additional_elem: '~',
  },
  one: {
    en_main_elem: '1',
    en_additional_elem: '!',
  },
  two: {
    en_main_elem: '2',
    en_additional_elem: '@',
  },
  three: {
    en_main_elem: '3',
    en_additional_elem: '#',
  },
  four: {
    en_main_elem: '4',
    en_additional_elem: '$',
  },
  five: {
    en_main_elem: '5',
    en_additional_elem: '%',
  },
  six: {
    en_main_elem: '6',
    en_additional_elem: '^',
  },
  seven: {
    en_main_elem: '7',
    en_additional_elem: '&',
  },
  eight: {
    en_main_elem: '8',
    en_additional_elem: '*',
  },
  nine: {
    en_main_elem: '9',
    en_additional_elem: '(',
  },
  zero: {
    en_main_elem: '0',
    en_additional_elem: ')',
  },
  minus: {
    en_main_elem: '-',
    en_additional_elem: '_',
  },
  equal: {
    en_main_elem: '=',
    en_additional_elem: '+',
  },
  backspace: {
    en_main_elem: 'Backspace',
  },
  tab: {
    en_main_elem: 'Tab',
  },
  q: {
    en_main_elem: 'q',
    en_additional_elem: 'Q',
  },
  w: {
    en_main_elem: 'w',
    en_additional_elem: 'W',
  },
  e: {
    en_main_elem: 'e',
    en_additional_elem: 'E',
  },
  r: {
    en_main_elem: 'r',
    en_additional_elem: 'R',
  },
  t: {
    en_main_elem: 't',
    en_additional_elem: 'T',
  },
  y: {
    en_main_elem: 'y',
    en_additional_elem: 'Y',
  },
  u: {
    en_main_elem: 'u',
    en_additional_elem: 'U',
  },
  i: {
    en_main_elem: 'i',
    en_additional_elem: 'I',
  },
  o: {
    en_main_elem: 'o',
    en_additional_elem: 'O',
  },
  p: {
    en_main_elem: 'p',
    en_additional_elem: 'P',
  },
  square_bracket_open: {
    en_main_elem: '[',
    en_additional_elem: '{',
  },
  square_bracket_close: {
    en_main_elem: ']',
    en_additional_elem: '}',
  },
  right_left_slash: {
    en_main_elem: '\\',
    en_additional_elem: '|',
  },
  delete: {
    en_main_elem: 'Del',
  },
  caps_lock: {
    en_main_elem: 'CapsLk',
  },
  a: {
    en_main_elem: 'a',
    en_additional_elem: 'A',
  },
  s: {
    en_main_elem: 's',
    en_additional_elem: 'S',
  },
  d: {
    en_main_elem: 'd',
    en_additional_elem: 'D',
  },
  f: {
    en_main_elem: 'f',
    en_additional_elem: 'F',
  },
  g: {
    en_main_elem: 'g',
    en_additional_elem: 'G',
  },
  h: {
    en_main_elem: 'h',
    en_additional_elem: 'H',
  },
  j: {
    en_main_elem: 'j',
    en_additional_elem: 'J',
  },
  k: {
    en_main_elem: 'k',
    en_additional_elem: 'K',
  },
  l: {
    en_main_elem: 'l',
    en_additional_elem: 'L',
  },
  semicolon: {
    en_main_elem: ';',
    en_additional_elem: ':',
  },
  quote: {
    en_main_elem: '\'',
    en_additional_elem: '"',
  },
  enter: {
    en_main_elem: 'Enter',
  },
  left_shift: {
    en_main_elem: 'Shift',
  },
  z: {
    en_main_elem: 'z',
    en_additional_elem: 'Z',
  },
  x: {
    en_main_elem: 'x',
    en_additional_elem: 'X',
  },
  c: {
    en_main_elem: 'c',
    en_additional_elem: 'C',
  },
  v: {
    en_main_elem: 'v',
    en_additional_elem: 'V',
  },
  b: {
    en_main_elem: 'b',
    en_additional_elem: 'B',
  },
  n: {
    en_main_elem: 'n',
    en_additional_elem: 'N',
  },
  m: {
    en_main_elem: 'm',
    en_additional_elem: 'M',
  },
  dot: {
    en_main_elem: ',',
    en_additional_elem: '<',
  },
  comma: {
    en_main_elem: '.',
    en_additional_elem: '>',
  },
  right_right_slash: {
    en_main_elem: '/',
    en_additional_elem: '?',
  },
  up_arrow: {
    en_main_elem: '/\\',
  },
  right_shift: {
    en_main_elem: 'Shift',
  },
  left_ctrl: {
    en_main_elem: 'Ctrl',
  },
  win: {
    en_main_elem: 'Win',
  },
  left_alt: {
    en_main_elem: 'Alt',
  },
  space: {
    en_main_elem: ' ',
  },
  right_alt: {
    en_main_elem: 'Alt',
  },
  left_arrow: {
    en_main_elem: '<',
  },
  down_arrow: {
    en_main_elem: '\\/',
  },
  right_arrow: {
    en_main_elem: '>',
  },
  right_ctrl: {
    en_main_elem: 'Ctrl',
  },
};

const BODY = document.getElementsByTagName('body')[0];
const SHIFT_BUTTON = document.getElementsByClassName('left_shift');
const CHAR_BUTTONS = document.getElementsByClassName('char');

let keyboard;

const createDomTree = () => {
  keyboard = document.createElement('div');
  keyboard.id = 'keyboard';

  for (let i = 0; i < 5; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.id = `row_${i + 1}`;

    keyboard.append(rowDiv);
  }

  BODY.prepend(keyboard);
};

const createButton = (mainChar, additionalChar, buttonName) => {
  const button = document.createElement('div');
  button.classList.add('keyboard_button');

  const mainCharDiv = document.createElement('div');
  mainCharDiv.classList.add('main-char');

  if (additionalChar !== undefined) {
    const additionalCharDiv = document.createElement('div');
    additionalCharDiv.classList.add('additional-char');
    additionalCharDiv.classList.add('hidden');
    additionalCharDiv.innerText = additionalChar;

    button.prepend(additionalCharDiv);

    button.classList.add('char');
  } else {
    button.classList.add(buttonName);
  }

  mainCharDiv.innerText = mainChar;
  button.prepend(mainCharDiv);

  return button;
};

const addButtonsToThePage = () => {
  let newButton;
  let count = 0;
  let rowNumber = 1;
  for (key in CONFIG) {
    if (count === 14 || count === 29 || count === 42 || count === 55) rowNumber++;
    newButton = createButton(CONFIG[key].en_main_elem, CONFIG[key].en_additional_elem, key);
    document.getElementById(`row_${rowNumber}`).append(newButton);
    count++;
  }
};


createDomTree();
addButtonsToThePage();


SHIFT_BUTTON[0].addEventListener('click', () => {
  Array.from(CHAR_BUTTONS).forEach((el) => {
    el.getElementsByClassName('main-char')[0].classList.toggle('hidden');
    el.getElementsByClassName('additional-char')[0].classList.toggle('hidden');
  });
  SHIFT_BUTTON[0].classList.toggle('active');
});
