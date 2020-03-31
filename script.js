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
    en_additional_elem: ' ',
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
// const FUNCTION_BUTTONS_NAME_ARRAY = ['capsLock', 'shiftLeft', 'shiftRight', 'controlLeft', 'altLeft', 'altRight', 'controlRight'];
const FIRST_ROW_NAME_BUTTONS = ['backquote', 'digit1', 'digit2', 'digit3', 'digit4', 'digit5', 'digit6', 'digit7', 'digit8', 'digit9', 'digit0', 'minus', 'equal', 'backspace'];

let keyboard;
let stringResult = '';

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

    if (FIRST_ROW_NAME_BUTTONS.find((elem) => elem === buttonName)) {
      button.classList.add('specific-char');
    } else {
      button.classList.add('char');
    }
  }

  mainCharDiv.innerText = mainChar;
  button.prepend(mainCharDiv);

  button.id = buttonName;

  if (button.classList.contains('char')) {
    button.addEventListener('mousedown', () => {
      button.classList.add('press');
      stringResult += button.firstChild.firstChild.nodeValue;
    });

    button.addEventListener('mouseup', () => {
      button.classList.remove('press');
    });
  }

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
const CHAR_BUTTONS = document.querySelectorAll('.char');
const SPECIFIC_CHAR_BUTTONS = document.querySelectorAll('.specific-char');
const SHIFT_LEFT_BUTTON = document.getElementById('shiftLeft');
const SHIFT_RIGHT_BUTTON = document.getElementById('shiftRight');
const CAPS_LOCK_BUTTON = document.getElementById('capsLock');

const firstLetterToLowetCase = (string) => string[0].toLowerCase() + string.slice(1, string.length);

SHIFT_LEFT_BUTTON.addEventListener('click', (event) => {
  if (!SHIFT_RIGHT_BUTTON.classList.contains('active')) {
    CHAR_BUTTONS.forEach((el) => {
      el.querySelector('.main-char').classList.toggle('hidden');
      el.querySelector('.additional-char').classList.toggle('hidden');
    });
    SPECIFIC_CHAR_BUTTONS.forEach((el) => {
      el.querySelector('.main-char').classList.toggle('hidden');
      el.querySelector('.additional-char').classList.toggle('hidden');
    });
  }
  event.currentTarget.classList.toggle('active');
});

SHIFT_RIGHT_BUTTON.addEventListener('click', (event) => {
  if (!SHIFT_LEFT_BUTTON.classList.contains('active')) {
    CHAR_BUTTONS.forEach((el) => {
      el.querySelector('.main-char').classList.toggle('hidden');
      el.querySelector('.additional-char').classList.toggle('hidden');
    });
    SPECIFIC_CHAR_BUTTONS.forEach((el) => {
      el.querySelector('.main-char').classList.toggle('hidden');
      el.querySelector('.additional-char').classList.toggle('hidden');
    });
  }
  event.currentTarget.classList.toggle('active');
});

CAPS_LOCK_BUTTON.addEventListener('click', (event) => {
  CHAR_BUTTONS.forEach((el) => {
    el.querySelector('.main-char').classList.toggle('hidden');
    el.querySelector('.additional-char').classList.toggle('hidden');
  });
  event.currentTarget.classList.toggle('active');
});

// отключение выделения текста
KEYBOARD.addEventListener('selectstart', (event) => {
  event.preventDefault();
  return false;
});

// обработка физ. клавиатуры
document.addEventListener('keydown', (event) => {
  document.getElementById(firstLetterToLowetCase(event.code)).classList.add('press');
  setTimeout(() => document.getElementById(firstLetterToLowetCase(event.code)).classList.remove('press'), 200);
});

const activateCtrlAltButtons = (event) => {
  
};