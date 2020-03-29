const CONFIG = {
  backquote: {
    en_main_elem: '`',
    en_additional_elem: '~',
  },
  digit1: {
    en_main_elem: '1',
    en_additional_elem: '!',
  },
  digit2: {
    en_main_elem: '2',
    en_additional_elem: '@',
  },
  digit3: {
    en_main_elem: '3',
    en_additional_elem: '#',
  },
  digit4: {
    en_main_elem: '4',
    en_additional_elem: '$',
  },
  digit5: {
    en_main_elem: '5',
    en_additional_elem: '%',
  },
  digit6: {
    en_main_elem: '6',
    en_additional_elem: '^',
  },
  digit7: {
    en_main_elem: '7',
    en_additional_elem: '&',
  },
  digit8: {
    en_main_elem: '8',
    en_additional_elem: '*',
  },
  digit9: {
    en_main_elem: '9',
    en_additional_elem: '(',
  },
  digit0: {
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
  keyQ: {
    en_main_elem: 'q',
    en_additional_elem: 'Q',
  },
  keyW: {
    en_main_elem: 'w',
    en_additional_elem: 'W',
  },
  keyE: {
    en_main_elem: 'e',
    en_additional_elem: 'E',
  },
  keyR: {
    en_main_elem: 'r',
    en_additional_elem: 'R',
  },
  keyT: {
    en_main_elem: 't',
    en_additional_elem: 'T',
  },
  keyY: {
    en_main_elem: 'y',
    en_additional_elem: 'Y',
  },
  keyU: {
    en_main_elem: 'u',
    en_additional_elem: 'U',
  },
  keyI: {
    en_main_elem: 'i',
    en_additional_elem: 'I',
  },
  keyO: {
    en_main_elem: 'o',
    en_additional_elem: 'O',
  },
  keyP: {
    en_main_elem: 'p',
    en_additional_elem: 'P',
  },
  bracketLeft: {
    en_main_elem: '[',
    en_additional_elem: '{',
  },
  bracketRight: {
    en_main_elem: ']',
    en_additional_elem: '}',
  },
  backSlash: {
    en_main_elem: '\\',
    en_additional_elem: '|',
  },
  delete: {
    en_main_elem: 'Del',
  },
  capsLock: {
    en_main_elem: 'CapsLk',
  },
  keyA: {
    en_main_elem: 'a',
    en_additional_elem: 'A',
  },
  keyS: {
    en_main_elem: 's',
    en_additional_elem: 'S',
  },
  keyD: {
    en_main_elem: 'd',
    en_additional_elem: 'D',
  },
  keyF: {
    en_main_elem: 'f',
    en_additional_elem: 'F',
  },
  keyG: {
    en_main_elem: 'g',
    en_additional_elem: 'G',
  },
  keyH: {
    en_main_elem: 'h',
    en_additional_elem: 'H',
  },
  keyJ: {
    en_main_elem: 'j',
    en_additional_elem: 'J',
  },
  keyK: {
    en_main_elem: 'k',
    en_additional_elem: 'K',
  },
  keyL: {
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
  shiftLeft: {
    en_main_elem: 'Shift',
  },
  keyZ: {
    en_main_elem: 'z',
    en_additional_elem: 'Z',
  },
  keyX: {
    en_main_elem: 'x',
    en_additional_elem: 'X',
  },
  keyC: {
    en_main_elem: 'c',
    en_additional_elem: 'C',
  },
  keyV: {
    en_main_elem: 'v',
    en_additional_elem: 'V',
  },
  keyB: {
    en_main_elem: 'b',
    en_additional_elem: 'B',
  },
  keyN: {
    en_main_elem: 'n',
    en_additional_elem: 'N',
  },
  keyM: {
    en_main_elem: 'm',
    en_additional_elem: 'M',
  },
  comma: {
    en_main_elem: ',',
    en_additional_elem: '<',
  },
  period: {
    en_main_elem: '.',
    en_additional_elem: '>',
  },
  slash: {
    en_main_elem: '/',
    en_additional_elem: '?',
  },
  arrowUp: {
    en_main_elem: '/\\',
  },
  shiftRight: {
    en_main_elem: 'Shift',
  },
  controlLeft: {
    en_main_elem: 'Ctrl',
  },
  metaLeft: {
    en_main_elem: 'Win',
  },
  altLeft: {
    en_main_elem: 'Alt',
  },
  space: {
    en_main_elem: ' ',
  },
  altRight: {
    en_main_elem: 'Alt',
  },
  arrowLeft: {
    en_main_elem: '<',
  },
  arrowDown: {
    en_main_elem: '\\/',
  },
  arrowRight: {
    en_main_elem: '>',
  },
  controlRight: {
    en_main_elem: 'Ctrl',
  },
};

const BODY = document.getElementsByTagName('body')[0];
// const BUTTONS = Array.from(document.getElementsByClassName('keyboard_button'));

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
  }

  mainCharDiv.innerText = mainChar;
  button.prepend(mainCharDiv);

  button.id = buttonName;

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

const KEYBOARD = document.getElementById('keyboard');
const CHAR_BUTTONS = document.getElementsByClassName('char');
const SHIFT_BUTTON = document.getElementById('shiftLeft');

SHIFT_BUTTON.addEventListener('click', () => {
  Array.from(CHAR_BUTTONS).forEach((el) => {
    el.getElementsByClassName('main-char')[0].classList.toggle('hidden');
    el.getElementsByClassName('additional-char')[0].classList.toggle('hidden');
  });
  SHIFT_BUTTON.classList.toggle('active');
});

KEYBOARD.addEventListener('click', (event) => {
  if (event.target.classList.contains('keyboard_button')) {
    event.target.classList.add('press');
    setTimeout(() => event.target.classList.remove('press'), 200);
  }
  if (event.target.parentNode.classList.contains('keyboard_button') || event.target.classList.contains('additional-char')) {
    event.target.parentNode.classList.add('press');
    setTimeout(() => event.target.parentNode.classList.remove('press'), 200);
  }
});

KEYBOARD.addEventListener('selectstart', (event) => {
  event.preventDefault();
  return false;
});

const firstLetterToLowetCase = (string) => string[0].toLowerCase() + string.slice(1, string.length);

document.addEventListener('keydown', (event) => {
  document.getElementById(firstLetterToLowetCase(event.code)).classList.add('press');
  setTimeout(() => document.getElementById(firstLetterToLowetCase(event.code)).classList.remove('press'), 200);
});
