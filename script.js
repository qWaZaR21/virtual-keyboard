const CONFIG = {
  backquote: {
    en_main_elem: '`',
    en_additional_elem: '~',
    ru_main_elem: 'ё',
    ru_additional_elem: 'Ё',
  },
  digit1: {
    en_main_elem: '1',
    en_additional_elem: '!',
    ru_main_elem: '1',
    ru_additional_elem: '!',
  },
  digit2: {
    en_main_elem: '2',
    en_additional_elem: '@',
    ru_main_elem: '2',
    ru_additional_elem: '"',
  },
  digit3: {
    en_main_elem: '3',
    en_additional_elem: '#',
    ru_main_elem: '3',
    ru_additional_elem: '№',
  },
  digit4: {
    en_main_elem: '4',
    en_additional_elem: '$',
    ru_main_elem: '4',
    ru_additional_elem: ';',
  },
  digit5: {
    en_main_elem: '5',
    en_additional_elem: '%',
    ru_main_elem: '5',
    ru_additional_elem: '%',
  },
  digit6: {
    en_main_elem: '6',
    en_additional_elem: '^',
    ru_main_elem: '6',
    ru_additional_elem: ':',
  },
  digit7: {
    en_main_elem: '7',
    en_additional_elem: '&',
    ru_main_elem: '7',
    ru_additional_elem: '?',
  },
  digit8: {
    en_main_elem: '8',
    en_additional_elem: '*',
    ru_main_elem: '8',
    ru_additional_elem: '*',
  },
  digit9: {
    en_main_elem: '9',
    en_additional_elem: '(',
    ru_main_elem: '9',
    ru_additional_elem: '(',
  },
  digit0: {
    en_main_elem: '0',
    en_additional_elem: ')',
    ru_main_elem: '0',
    ru_additional_elem: ')',
  },
  minus: {
    en_main_elem: '-',
    en_additional_elem: '_',
    ru_main_elem: '-',
    ru_additional_elem: '_',
  },
  equal: {
    en_main_elem: '=',
    en_additional_elem: '+',
    ru_main_elem: '=',
    ru_additional_elem: '+',
  },
  backspace: {
    en_main_elem: 'Backspace',
    ru_main_elem: 'Backspace',
  },
  tab: {
    en_main_elem: 'Tab',
    ru_main_elem: 'Tab',
  },
  keyQ: {
    en_main_elem: 'q',
    en_additional_elem: 'Q',
    ru_main_elem: 'й',
    ru_additional_elem: 'Й',
  },
  keyW: {
    en_main_elem: 'w',
    en_additional_elem: 'W',
    ru_main_elem: 'ц',
    ru_additional_elem: 'Ц',
  },
  keyE: {
    en_main_elem: 'e',
    en_additional_elem: 'E',
    ru_main_elem: 'у',
    ru_additional_elem: 'У',
  },
  keyR: {
    en_main_elem: 'r',
    en_additional_elem: 'R',
    ru_main_elem: 'к',
    ru_additional_elem: 'К',
  },
  keyT: {
    en_main_elem: 't',
    en_additional_elem: 'T',
    ru_main_elem: 'е',
    ru_additional_elem: 'Е',
  },
  keyY: {
    en_main_elem: 'y',
    en_additional_elem: 'Y',
    ru_main_elem: 'н',
    ru_additional_elem: 'Н',
  },
  keyU: {
    en_main_elem: 'u',
    en_additional_elem: 'U',
    ru_main_elem: 'г',
    ru_additional_elem: 'Г',
  },
  keyI: {
    en_main_elem: 'i',
    en_additional_elem: 'I',
    ru_main_elem: 'ш',
    ru_additional_elem: 'Ш',
  },
  keyO: {
    en_main_elem: 'o',
    en_additional_elem: 'O',
    ru_main_elem: 'щ',
    ru_additional_elem: 'Щ',
  },
  keyP: {
    en_main_elem: 'p',
    en_additional_elem: 'P',
    ru_main_elem: 'з',
    ru_additional_elem: 'З',
  },
  bracketLeft: {
    en_main_elem: '[',
    en_additional_elem: '{',
    ru_main_elem: 'х',
    ru_additional_elem: 'Х',
  },
  bracketRight: {
    en_main_elem: ']',
    en_additional_elem: '}',
    ru_main_elem: 'ъ',
    ru_additional_elem: 'Ъ',
  },
  backSlash: {
    en_main_elem: '\\',
    en_additional_elem: '|',
    ru_main_elem: '\\',
    ru_additional_elem: '/',
  },
  delete: {
    en_main_elem: 'Del',
    ru_main_elem: 'Del',
  },
  capsLock: {
    en_main_elem: 'CapsLk',
    ru_main_elem: 'CapsLk',
  },
  keyA: {
    en_main_elem: 'a',
    en_additional_elem: 'A',
    ru_main_elem: 'ф',
    ru_additional_elem: 'Ф',
  },
  keyS: {
    en_main_elem: 's',
    en_additional_elem: 'S',
    ru_main_elem: 'ы',
    ru_additional_elem: 'Ы',
  },
  keyD: {
    en_main_elem: 'd',
    en_additional_elem: 'D',
    ru_main_elem: 'в',
    ru_additional_elem: 'В',
  },
  keyF: {
    en_main_elem: 'f',
    en_additional_elem: 'F',
    ru_main_elem: 'а',
    ru_additional_elem: 'А',
  },
  keyG: {
    en_main_elem: 'g',
    en_additional_elem: 'G',
    ru_main_elem: 'п',
    ru_additional_elem: 'П',
  },
  keyH: {
    en_main_elem: 'h',
    en_additional_elem: 'H',
    ru_main_elem: 'р',
    ru_additional_elem: 'Р',
  },
  keyJ: {
    en_main_elem: 'j',
    en_additional_elem: 'J',
    ru_main_elem: 'о',
    ru_additional_elem: 'О',
  },
  keyK: {
    en_main_elem: 'k',
    en_additional_elem: 'K',
    ru_main_elem: 'л',
    ru_additional_elem: 'Л',
  },
  keyL: {
    en_main_elem: 'l',
    en_additional_elem: 'L',
    ru_main_elem: 'д',
    ru_additional_elem: 'Д',
  },
  semicolon: {
    en_main_elem: ';',
    en_additional_elem: ':',
    ru_main_elem: 'ж',
    ru_additional_elem: 'Ж',
  },
  quote: {
    en_main_elem: '\'',
    en_additional_elem: '"',
    ru_main_elem: 'э',
    ru_additional_elem: 'Э',
  },
  enter: {
    en_main_elem: 'Enter',
    ru_main_elem: 'Enter',
  },
  shiftLeft: {
    en_main_elem: 'Shift',
    ru_main_elem: 'Shift',
  },
  keyZ: {
    en_main_elem: 'z',
    en_additional_elem: 'Z',
    ru_main_elem: 'я',
    ru_additional_elem: 'Я',
  },
  keyX: {
    en_main_elem: 'x',
    en_additional_elem: 'X',
    ru_main_elem: 'ч',
    ru_additional_elem: 'Ч',
  },
  keyC: {
    en_main_elem: 'c',
    en_additional_elem: 'C',
    ru_main_elem: 'с',
    ru_additional_elem: 'С',
  },
  keyV: {
    en_main_elem: 'v',
    en_additional_elem: 'V',
    ru_main_elem: 'м',
    ru_additional_elem: 'М',
  },
  keyB: {
    en_main_elem: 'b',
    en_additional_elem: 'B',
    ru_main_elem: 'и',
    ru_additional_elem: 'И',
  },
  keyN: {
    en_main_elem: 'n',
    en_additional_elem: 'N',
    ru_main_elem: 'т',
    ru_additional_elem: 'Т',
  },
  keyM: {
    en_main_elem: 'm',
    en_additional_elem: 'M',
    ru_main_elem: 'ь',
    ru_additional_elem: 'Ь',
  },
  comma: {
    en_main_elem: ',',
    en_additional_elem: '<',
    ru_main_elem: 'б',
    ru_additional_elem: 'Б',
  },
  period: {
    en_main_elem: '.',
    en_additional_elem: '>',
    ru_main_elem: 'ю',
    ru_additional_elem: 'Ю',
  },
  slash: {
    en_main_elem: '/',
    en_additional_elem: '?',
    ru_main_elem: '.',
    ru_additional_elem: ',',
  },
  arrowUp: {
    en_main_elem: '/\\',
    ru_main_elem: '/\\',
  },
  shiftRight: {
    en_main_elem: 'Shift',
    ru_main_elem: 'Shift',
  },
  controlLeft: {
    en_main_elem: 'Ctrl',
    ru_main_elem: 'Ctrl',
  },
  metaLeft: {
    en_main_elem: 'Win',
    ru_main_elem: 'Win',
  },
  altLeft: {
    en_main_elem: 'Alt',
    ru_main_elem: 'Alt',
  },
  space: {
    en_main_elem: ' ',
    ru_main_elem: ' ',
    // en_additional_elem: ' ',
  },
  altRight: {
    en_main_elem: 'Alt',
    ru_main_elem: 'Alt',
  },
  arrowLeft: {
    en_main_elem: '<',
    ru_main_elem: '<',
  },
  arrowDown: {
    en_main_elem: '\\/',
    ru_main_elem: '\\/',
  },
  arrowRight: {
    en_main_elem: '>',
    ru_main_elem: '>',
  },
  controlRight: {
    en_main_elem: 'Ctrl',
    ru_main_elem: 'Ctrl',
  },
};

const BODY = document.getElementsByTagName('body')[0];
const FIRST_ROW_NAME_EN_BUTTONS = ['backquote', 'digit1', 'digit2', 'digit3', 'digit4', 'digit5', 'digit6', 'digit7', 'digit8', 'digit9', 'digit0', 'minus', 'equal', 'backspace'];
const FIRST_ROW_NAME_RU_BUTTONS = ['digit1', 'digit2', 'digit3', 'digit4', 'digit5', 'digit6', 'digit7', 'digit8', 'digit9', 'digit0', 'minus', 'equal', 'backspace'];

let firstRowNameButtons;
let keyboard;

if (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'en');

const createDomTree = () => {
  const textArea = document.createElement('textarea');
  textArea.autofocus = true;
  textArea.id = 'display';

  textArea.addEventListener('blur', () => {
    textArea.focus();
  });

  keyboard = document.createElement('div');
  keyboard.id = 'keyboard';

  BODY.append(textArea);

  for (let i = 0; i < 5; i += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.id = `row_${i + 1}`;

    keyboard.append(rowDiv);
  }

  BODY.append(keyboard);

  const message = document.createElement('div');
  message.id = 'message';
  message.innerText = 'CTRL + SHIFT - переключение языка';

  BODY.append(message);
};

const clearKeyboardRow = () => {
  for (let i = 0; i < 5; i += 1) {
    document.getElementById(`row_${i + 1}`).innerHTML = '';
  }
};

createDomTree();

const TEXT_AREA = document.querySelector('#display');

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

    if (localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === null) {
      firstRowNameButtons = FIRST_ROW_NAME_EN_BUTTONS;
    } else {
      firstRowNameButtons = FIRST_ROW_NAME_RU_BUTTONS;
    }

    if (firstRowNameButtons.find((elem) => elem === buttonName)) {
      button.classList.add('specific-char');
    } else {
      button.classList.add('char');
    }
  }

  mainCharDiv.innerText = mainChar;
  button.prepend(mainCharDiv);

  button.id = buttonName;

  return button;
};

const addButtonsToThePage = () => {
  const lang = localStorage.getItem('lang');
  let newButton;
  let count = 0;
  let rowNumber = 1;

  Object.keys(CONFIG).forEach((key) => {
    if (count === 14 || count === 29 || count === 42 || count === 55) rowNumber += 1;

    newButton = createButton(CONFIG[key][`${lang}_main_elem`], CONFIG[key][`${lang}_additional_elem`], key);
    document.getElementById(`row_${rowNumber}`).append(newButton);
    count += 1;
  });
};

addButtonsToThePage();

const firstLetterToLowetCase = (string) => string[0].toLowerCase() + string.slice(1, string.length);

const addListenerToButtons = () => {
  const KEYBOARD = document.getElementById('keyboard');
  const CHAR_BUTTONS = document.querySelectorAll('.char');
  const SPECIFIC_CHAR_BUTTONS = document.querySelectorAll('.specific-char');
  const SHIFT_LEFT_BUTTON = document.getElementById('shiftLeft');
  const SHIFT_RIGHT_BUTTON = document.getElementById('shiftRight');
  const CAPS_LOCK_BUTTON = document.getElementById('capsLock');
  const CTRL_LEFT_BUTTON = document.getElementById('controlLeft');
  const CTRL_RIGHT_BUTTON = document.getElementById('controlRight');
  const ALT_LEFT_BUTTON = document.getElementById('altLeft');
  const ALT_RIGHT_BUTTON = document.getElementById('altRight');
  const SPACE_BUTTON = document.getElementById('space');
  const ARROW_UP_BUTTON = document.getElementById('arrowUp');
  const ARROW_LEFT_BUTTON = document.getElementById('arrowLeft');
  const ARROW_RIGHT_BUTTON = document.getElementById('arrowRight');
  const ARROW_DOWN_BUTTON = document.getElementById('arrowDown');
  const ENTER_BUTTON = document.getElementById('enter');
  const BACKSPACE_BUTTON = document.getElementById('backspace');
  const DELETE_BUTTON = document.getElementById('delete');

  const deactivCtrlAltButtons = () => {
    CTRL_LEFT_BUTTON.classList.remove('active-ctrl');
    CTRL_RIGHT_BUTTON.classList.remove('active-ctrl');
    ALT_LEFT_BUTTON.classList.remove('active-alt');
    ALT_RIGHT_BUTTON.classList.remove('active-alt');
  };

  SHIFT_LEFT_BUTTON.addEventListener('click', (event) => {
    if (document.getElementsByClassName('active-ctrl').length > 0) {
      if (localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === null) {
        localStorage.setItem('lang', 'ru');
      } else {
        localStorage.setItem('lang', 'en');
      }

      SHIFT_LEFT_BUTTON.classList.add('press');
      setTimeout(() => SHIFT_LEFT_BUTTON.classList.remove('press'), 200);
      deactivCtrlAltButtons();
      clearKeyboardRow();
      addButtonsToThePage();
      addListenerToButtons();

      return;
    }

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
    if (document.getElementsByClassName('active-ctrl').length > 0) {
      if (localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === null) {
        localStorage.setItem('lang', 'ru');
      } else {
        localStorage.setItem('lang', 'en');
      }

      SHIFT_LEFT_BUTTON.classList.add('press');
      setTimeout(() => SHIFT_LEFT_BUTTON.classList.remove('press'), 200);
      deactivCtrlAltButtons();
      clearKeyboardRow();
      addButtonsToThePage();
      addListenerToButtons();
      return;
    }

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
    if (!(firstLetterToLowetCase(event.code) in CONFIG)) return;
    document.getElementById(firstLetterToLowetCase(event.code)).classList.add('press');
  });

  // обработка физ. клавиатуры
  document.addEventListener('keyup', (event) => {
    if (!(firstLetterToLowetCase(event.code) in CONFIG)) return;
    document.getElementById(firstLetterToLowetCase(event.code)).classList.remove('press');
  });

  CTRL_LEFT_BUTTON.addEventListener('click', () => {
    CTRL_LEFT_BUTTON.classList.toggle('active-ctrl');
    CTRL_RIGHT_BUTTON.classList.toggle('active-ctrl');
  });

  CTRL_RIGHT_BUTTON.addEventListener('click', () => {
    CTRL_LEFT_BUTTON.classList.toggle('active-ctrl');
    CTRL_RIGHT_BUTTON.classList.toggle('active-ctrl');
  });

  ALT_LEFT_BUTTON.addEventListener('click', () => {
    ALT_LEFT_BUTTON.classList.toggle('active-alt');
    ALT_RIGHT_BUTTON.classList.toggle('active-alt');
  });

  ALT_RIGHT_BUTTON.addEventListener('click', () => {
    ALT_LEFT_BUTTON.classList.toggle('active-alt');
    ALT_RIGHT_BUTTON.classList.toggle('active-alt');
  });

  SPACE_BUTTON.addEventListener('click', () => {
    TEXT_AREA.setRangeText(
      SPACE_BUTTON.firstChild.innerHTML,
      TEXT_AREA.selectionStart,
      TEXT_AREA.selectionEnd,
    );
    TEXT_AREA.selectionEnd += 1;
    TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd;
  });

  ARROW_LEFT_BUTTON.addEventListener('click', () => {
    TEXT_AREA.selectionEnd -= 1;
    TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd;
  });

  ARROW_RIGHT_BUTTON.addEventListener('click', () => {
    TEXT_AREA.selectionEnd += 1;
    TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd;
  });

  ARROW_UP_BUTTON.addEventListener('click', () => {
    TEXT_AREA.selectionEnd = 0;
    TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd;
  });

  ARROW_DOWN_BUTTON.addEventListener('click', () => {
    TEXT_AREA.selectionEnd = TEXT_AREA.value.length;
    TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd;
  });

  ENTER_BUTTON.addEventListener('click', () => {
    TEXT_AREA.setRangeText('\n', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd);
    TEXT_AREA.selectionEnd += 1;
    TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd;
  });

  BACKSPACE_BUTTON.addEventListener('click', () => {
    TEXT_AREA.setRangeText('', TEXT_AREA.selectionStart - 1, TEXT_AREA.selectionEnd);
  });

  DELETE_BUTTON.addEventListener('click', () => {
    TEXT_AREA.setRangeText('', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd + 1);
  });

  const addEventListenerToCharButton = (el) => {
    el.addEventListener('click', () => {
      el.classList.add('press');
      setTimeout(() => el.classList.remove('press'), 301);

      if (document.getElementsByClassName('active-ctrl').length >= 1 || document.getElementsByClassName('active-alt').length >= 1) deactivCtrlAltButtons();

      if (el.firstChild.classList.contains('hidden')) {
        TEXT_AREA.setRangeText(
          el.lastChild.innerText,
          TEXT_AREA.selectionStart,
          TEXT_AREA.selectionEnd,
        );
      } else {
        TEXT_AREA.setRangeText(
          el.firstChild.innerText,
          TEXT_AREA.selectionStart,
          TEXT_AREA.selectionEnd,
        );
      }
      TEXT_AREA.selectionEnd += 1;
      TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd;
    });
  };

  CHAR_BUTTONS.forEach(addEventListenerToCharButton);

  SPECIFIC_CHAR_BUTTONS.forEach(addEventListenerToCharButton);
};

addListenerToButtons();
