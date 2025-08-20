
const lines = ["Website", "Developer"];
const element = document.querySelector('.typing-multiline');
const typingSpeed = 100;
const linePause = 1000;
const eraseSpeed = 50;
const finishPause = 2000;

let lineIndex = 0;
let charIndex = 0;
let isTyping = true;
let isErasing = false;

function type() {
    const currentLine = lines[lineIndex];
    
    if (isTyping) {
        element.textContent = 
            lines.slice(0, lineIndex).join('\n') + 
            (lineIndex > 0 ? '\n' : '') + 
            currentLine.substring(0, charIndex + 1);
      
      charIndex++;
      
    if (charIndex === currentLine.length) {
        if (lineIndex < lines.length - 1) {
            lineIndex++;
            charIndex = 0;
            setTimeout(type, linePause);
        } else {
            isTyping = false;
            setTimeout(type, finishPause);
          }
    } else {
          setTimeout(type, typingSpeed);
      }
    } else if (isErasing) {
          const currentContent = element.innerHTML;
          element.innerHTML = currentContent.substring(0, currentContent.length - 1);
      
      if (element.innerHTML.endsWith('<br>')) {
          element.innerHTML = element.innerHTML.slice(0, -4);
          lineIndex--;
          charIndex = lines[lineIndex].length;
      }
      
      if (element.innerHTML === '') {
          isErasing = false;
          isTyping = true;
          lineIndex = 0;
          charIndex = 0;
          setTimeout(type, typingSpeed);
      } else {
          setTimeout(type, eraseSpeed);
      }
      } else {
          isErasing = true;
          setTimeout(type, eraseSpeed);
        }
}

type();

const firstSkill = document.querySelector('.first-skill');
firstSkill.addEventListener('mouseenter', () => {
    firstSkill.style.transition = '0.5s';
    firstSkill.style.top = '25px';
});
firstSkill.addEventListener('mouseleave', () => {
    firstSkill.style.transition = '0.5s';
    firstSkill.style.top = '40px';
});

const secondSkill = document.querySelector('.second-skill');
secondSkill.addEventListener('mouseenter', () => {
    secondSkill.style.transition = '0.5s';
    secondSkill.style.top = '85px';
});
secondSkill.addEventListener('mouseleave', () => {
    secondSkill.style.transition = '0.5s';
    secondSkill.style.top = '100px';
});

const thirdSkill = document.querySelector('.third-skill');
thirdSkill.addEventListener('mouseenter', () => {
    thirdSkill.style.transition = '0.5s';
    thirdSkill.style.top = '145px';
});
thirdSkill.addEventListener('mouseleave', () => {
    thirdSkill.style.transition = '0.5s';
    thirdSkill.style.top = '160px';
});

const aboutSection = document.querySelector('.about_section');
aboutSection.addEventListener('mouseleave', () => {
    aboutSection.style.transition = '0.5s';
    aboutSection.style.filter = '';
    aboutSection.style.transform = '';
});

