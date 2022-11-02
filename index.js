const li = document.getElementById('keyboard');
const screen = document.getElementById('write');
const screenText = [];


li.addEventListener('mousedown', write);
document.addEventListener('keydown',writeKey);

function write() {
  const id = event.target.id;

  event.preventDefault();

  if (id == "Backspace") {
    screenText.splice(-1, 2);
    return screen.textContent = screenText.join('');
  }
  if (id == "CapsLock") {
    screenText.slice(-1, 0);
    const color = document.getElementById(id);

    li.addEventListener('mouseup', (event) => {
      color.style.backgroundColor = '#6C6B6B';
    });
    li.removeEventListener('mousedown', write);
    li.addEventListener('mousedown',caps);
  }
  else{
    const color = document.getElementById(id);

    color.style.backgroundColor = '#6C6B6B';
    screenText.push(id);
    screen.textContent = screenText.join('');
    li.addEventListener('mouseup', (event) => {
      color.style.backgroundColor = null;
    });
  }

}

function caps() {
  event.preventDefault();
  const id = event.target.id;

  if (id == "Backspace") {
    screenText.splice(-1, 2);
    return screen.textContent = screenText.join('');
  }
  if (id == "CapsLock") {
    const color = document.getElementById(id);

    color.style.backgroundColor = '#6C6B6B';
    li.addEventListener('mouseup', (event) => {
      color.style.backgroundColor = '#6C6B6B';
    });
  }
  if (id == "CapsLock") {
    li.removeEventListener('mousedown', caps);
    li.addEventListener('mousedown',write);
    const color = document.getElementById(id);

    li.addEventListener('mouseup', (event) => {
      color.style.backgroundColor = null;
    });
  }
  else{
    let upid = id.toUpperCase();
    const color = document.getElementById(id);

    color.style.backgroundColor = '#6C6B6B';
    screenText.push(upid);
    screen.textContent = screenText.join('');
    li.addEventListener('mouseup', (event) => {
      color.style.backgroundColor = null;
    });
  }
}

function writeKey(event) {
  event.preventDefault();

  const id = event.key;

  if (id === "backspace" || id === "Backspace") {
    let id2 = id.charAt(0).toUpperCase() + id.slice(1);
    const color = document.getElementById(id2);

    color.style.backgroundColor = '#6C6B6B';

    document.addEventListener('keyup',(event)=>{
      let id2 = id.charAt(0).toUpperCase() + id.slice(1);
      const color = document.getElementById(id2);

      color.style.backgroundColor = null;
    });

    screenText.splice(-1, 2);
    return screen.textContent = screenText.join('');
  }
  if (id === 'CapsLock') {
    const colorCaps = document.getElementById('CapsLock');

    colorCaps.style.backgroundColor = '#6C6B6B';
    document.removeEventListener('keydown', writeKey);
    document.addEventListener('keydown', capsKey);
  }
  else{
    const colorCaps = document.getElementById('CapsLock');

    colorCaps.style.backgroundColor = null;

    const colorDelete = document.getElementById('Backspace');

    colorDelete.style.backgroundColor = null;

    const colorK = document.getElementById(id);

    colorK.style.backgroundColor = '#6C6B6B';
    screenText.push(id);
    screen.textContent = screenText.join('');
    document.addEventListener('keyup',(event)=>{
      const colorK = document.getElementById(id);
      const colorCaps = document.getElementById('CapsLock');
      const colorDelete = document.getElementById('Backspace');

      colorDelete.style.backgroundColor = null;
      colorCaps.style.backgroundColor = null;
      colorK.style.backgroundColor = null;
    });
  }
}

function capsKey(event) {
  event.preventDefault();
  if (event.getModifierState("CapsLock") === true) {
    let id;

    if (event.key === 'CapsLock') {
      id = event.key;
    }
    if (event.key === 'Backspace') {
      id = event.key;
    }
    else{
      id = event.key.toLowerCase();
    }
    let upid = event.key.toUpperCase();

    const colorK = document.getElementById(id);

    colorK.style.backgroundColor = '#6C6B6B';

    screenText.push(upid);
    screen.textContent = screenText.join('');

    document.addEventListener('keyup',(event)=>{
      const colorK = document.getElementById(id);
      const color = document.getElementById('CapsLock');

      color.style.backgroundColor = '#6C6B6B';
      colorK.style.backgroundColor = null;
    });

    if (id === "Backspace") {
      screenText.splice(-2, 2);
      screen.textContent = screenText.join('');
    }
  }
  else{
    document.removeEventListener('keydown', capsKey);
    document.addEventListener('keydown', writeKey);
  }
}
