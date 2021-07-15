const portfolioData = [
  {
    title : "Cryptfolio",
    imgData : {
      source : [
        './assets/images/cryptfolio-400w.jpeg',
        './assets/images/cryptfolio-800w.jpeg'
      ],
      alt : "screenshot of Cryptfolio"
    },
    tags : [
      'Html',
      'CSS',
      'Javascript',
      'Bulma'
    ],
    link : "https://lallender.github.io/Cryptfolio/",
    codeLink : "https://github.com/LAllender/Cryptfolio"
  },
  {
    title : "Weather Dashboard",
    imgData : {
      source : [
        './assets/images/weather-dashboard-400w.png',
        './assets/images/weather-dashboard-800w.png',
      ],
      alt : "screenshot of Weather Dashboard"
    },
    tags : [
      'Html',
      'CSS',
      'Javascript',
    ],
    link : "https://supasiti.github.io/06-weather-dashboard/",
    codeLink : "https://github.com/Supasiti/06-weather-dashboard"
  },
  {
    title : "Code Quiz",
    imgData : {
      source : [
        './assets/images/code-quiz-400w.gif',
        './assets/images/code-quiz-800w.gif',
      ],
      alt : "screenshot of Code Quiz"
    },
    tags : [
      'Html',
      'CSS',
      'Javascript',
    ],
    link : "https://supasiti.github.io/04-code-quiz/",
    codeLink : "https://github.com/Supasiti/04-code-quiz"
  }
];

// open menu on mobile view port
const connectOpenMenuOnMobile = () => {
  document.addEventListener('click', event => {
    const navBarEl = document.querySelector('#main-menu');
    const divEl = event.target.closest('div');
    if (divEl && divEl.id === 'open-menu-sm'){
      navBarEl.style.width ='240px';
      navBarEl.style.zIndex = 1020;
      document.addEventListener('click', closeMenuOnMobile)
    };
  });
};

// conditions when mouse is clicked to close the menu
const isMouseClickedToClose = event => {
  const el = event.target;
  if (el.id === 'main-menu') {
    return false;
  }
  if (el.closest('li') && el.closest('li').classList.contains('bg-pink')){ 
    return false;
  }
  return true;
}; 

// close menu on mobile view port
const closeMenuOnMobile = event => {
  if (window.innerWidth < 768){ // mobile window
    const navBarEl = document.querySelector('#main-menu');

    if (isMouseClickedToClose(event)){
      navBarEl.style.width ='0px';
      document.removeEventListener('click', closeMenuOnMobile)
      setTimeout(()=> {navBarEl.style.zIndex = 10}, 500); 
    };
  };
};




displayPortfolio(portfolioData);
connectOpenMenuOnMobile();


