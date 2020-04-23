(() => {const div = document.createElement('div');

  div.className = 'row';

  div.innerHTML = `
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
  <a href="https://design-dictionary-docs.web.app/" target="_blank"
    style="position: fixed; left: 50%; bottom: 0; transform: translate(-50%, -50%); width: 540px; height: 52px; background-color: #232528; border-radius: 26px; box-shadow: 2px 2px 4px black; border: 3px solid #fdca6b; display: flex; align-items: center; padding: 6px 24px; box-sizing: border-box; color: #edf7f8;font-size: 19px;font-family: 'Caveat', cursive;cursor: pointer;text-decoration: none;">
    <svg style="width: 18px;height: 18px;margin-right:18px" aria-hidden="true" focusable="false" data-prefix="fas"
      data-icon="info-circle" class="svg-inline--fa fa-info-circle fa-w-16" role="img"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor"
        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
      </path>
    </svg>
    Part of the 10 sites in 10 weeks project. Click here to find out more.</a>
  `;

  document.body.appendChild(div);
       })();

