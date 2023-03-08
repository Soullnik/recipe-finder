import './switch-button.scss';

const getSwitchButton = () => {
  const divToggle = document.createElement('div');

  divToggle.classList.add('toggle');
  const divToggleBtn = document.createElement('div');
  divToggleBtn.classList.add('toggle-button');
  const divOk: HTMLDivElement = document.createElement('div');
  divOk.classList.add('ok');
  divToggleBtn.append(divOk);

  divToggle.append(divToggleBtn);


  divToggle.addEventListener('click', () => {
    divToggle.classList.toggle('active');
  });
  return divToggle;
};

export default getSwitchButton;
