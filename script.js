class Typewriter {
  constructor(element, words, wait = 3000) {
    this.element = element;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.txt = '';
    this.wordIndex = 0;
    this.isDeleting = false;
    this.type()
  }

  // type function
  type() {
    const currWord = this.wordIndex % this.words.length;
    const fullTxt = this.words[currWord];

    this.isDeleting ?
    this.txt = fullTxt.substring(0, this.txt.length - 1):
    this.txt = fullTxt.substring(0, this.txt.length + 1);

    this.element.textContent = this.txt;

    let typeSpeed = 300;

    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
  }

}

// initialize typing
const init = () => {
  const elem = document.querySelector('.typing');
  const words = ["...",
    "handsome",
    "genius",
    "Bean",
    "Asistio",
    "Wick"];
  const wait = 3000;

  new Typewriter(elem, words, wait);
}

// type on load
document.addEventListener('DOMContentLoaded', init)