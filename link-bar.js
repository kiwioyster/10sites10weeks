document.addEventListener("DOMContentLoaded", function () {
      const div = document.createElement('div');
      div.className = 'row';
      div.innerHTML = `
      <style>
      .proj-bar {position: fixed; left: 50%; bottom: 0; transform: translate(-50%, -50%); width: 540px; height: 52px; background-color: #232528; border-radius: 26px; box-shadow: 2px 2px 4px black; border: 3px solid #fdca6b; display: flex; align-items: center; padding: 6px 18px 6px 24px; box-sizing: border-box; color: #edf7f8;font-size: 15px;font-family: 'Barlow', cursive;cursor: pointer;text-decoration: none;transition: all 0.6s linear; opacity: 1; visibility: visible; z-index: 99; justify-content: space-between;}
      .proj-bar div {display: flex; align-items: center;}
      .proj-bar:visited { color: #edf7f8;}
      .proj-bar--hidden {opacity: 0;}
      #proj-bar-close-btn {background-color: transparent; border-radius: 50%; border: none; width: 24px; height: 24px; color: #edf7f8; display: flex; cursor: pointer;}
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:ital@1&display=swap" rel="stylesheet">
      <a id="10p10w-bar" href="https://design-dictionary-docs.web.app/" target="_blank"
      class="proj-bar">
      <div>
      <svg style="width: 18px;height: 18px;margin-right:12px" aria-hidden="true" focusable="false" data-prefix="fas"
        data-icon="info-circle" class="svg-inline--fa fa-info-circle fa-w-16" role="img"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor"
          d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
        </path>
      </svg>
      Part of the 10 sites in 10 weeks project. Click here to find out more.
      </div>
      <button id="proj-bar-close-btn">
        <svg style="width: 14px;height: 14px;" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
      </button>
      </a>
      `;
      div.addEventListener("mouseover", () => {
        clearTimeout(deleteBarTimeout);
        clearTimeout(hideBarTimeout);
        document.getElementById('10p10w-bar').classList.remove('proj-bar--hidden');
      });
      div.addEventListener("mouseleave", () => {
        hideBarTimeout = setTimeout(() => {
          document.getElementById('10p10w-bar').classList.add('proj-bar--hidden');
        }, 600);
        deleteBarTimeout = setTimeout(() => {
          document.getElementById('10p10w-bar').setAttribute('style', 'display: none');
        }, 3000);
      });
      document.body.appendChild(div);
      document.getElementById('proj-bar-close-btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('10p10w-bar').setAttribute('style', 'display: none');
      })
      let hideBarTimeout = setTimeout(() => {
        document.getElementById('10p10w-bar').classList.add('proj-bar--hidden');
      }, 6000);
      let deleteBarTimeout = setTimeout(() => {
        document.getElementById('10p10w-bar').setAttribute('style', 'display: none');
      }, 10000);
    });
