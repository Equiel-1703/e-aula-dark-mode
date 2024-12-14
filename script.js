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

(function() {
    'use strict';

	const css_link = 'https://raw.githubusercontent.com/Equiel-1703/e-aula-dark-mode/refs/heads/main/style.css';
	const fetch_css = (url) => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				return response.text();
			})
			.then((css) => {
				append_css(css);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

    const new_css = fetch_css(css_link);

	const append_css = (css) => {
		const style_tag = document.createElement('style');

		style_tag.innerHTML = css;

		document.head.appendChild(style_tag);
	};

	append_css(new_css);
})();