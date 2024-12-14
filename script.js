// ==UserScript==
// @name         e-Aula Dark Mode
// @namespace    https://github.com/Equiel-1703
// @version      1.0
// @description  Habilita dark mode na plataforma e-aula da UFPel.
// @author       Henrique Rodrigues Barraz
// @license      MIT
// @match        https://e-aula.ufpel.edu.br/*
// @icon         https://raw.githubusercontent.com/Equiel-1703/e-aula-dark-mode/refs/heads/main/icon/e-aula-dm-icon.ico
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	const new_css = `
	:root {
	--bg-color: black;
	--cards-bg-color: #333;
	--text-color: white;
	--titles-color: #e6e8ff;
	}

	body {
		background-color: var(--bg-color);
		color: var(--text-color);
	}

	body #page div#topofscroll.main-inner {
		background-color: var(--bg-color);
		color: var(--text-color);
	}

	body #page h1,
	body #page h2,
	body #page h3,
	body #page h4,
	body #page h5,
	body #page h6 {
		color: var(--titles-color);
	}

	body#page-my-index #page #topofscroll div.card-body,
	body#page-my-index #page #topofscroll .card,
	body#page-site-index #page #page-content #region-main {
		background-color: var(--cards-bg-color);
		color: var(--text-color);
	}
	`;

	const append_css = (css) => {
		const style_tag = document.createElement('style');

		style_tag.innerHTML = css;

		document.head.appendChild(style_tag);
	};

	append_css(new_css);
})();