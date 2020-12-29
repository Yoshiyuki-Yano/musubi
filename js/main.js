'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const mask = document.getElementById('mask');
  const instagram = document.getElementById('overlay-instagram');
  const Course = document.getElementById('overlay-Course');
  const About = document.getElementById('overlay-About');
  const ClassRoom = document.getElementById('overlay-ClassRoom');
  const Price = document.getElementById('overlay-Price');
  const Form = document.getElementById('overlay-Form');

  function overlayClose(link) {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    }); 
  };

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  overlayClose(close);
  overlayClose(mask);
  overlayClose(instagram);
  overlayClose(Course);
  overlayClose(About);
  overlayClose(ClassRoom);
  overlayClose(Price);
  overlayClose(Form);
}