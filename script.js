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
		--cards-bg-color: #202020;
		--text-color: white;
		--text-hover-color: #6493ff;
		--titles-color: #c7d8ff;
	}

	body {
		color: var(--text-color);
		background: linear-gradient(90deg, #000000 0%, #2f2f2f 100%);
		background-size: 400% 400%;
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

	body div.card-body,
	body .card,
	body #region-main {
		background-color: var(--cards-bg-color) !important;
		color: var(--text-color) !important;
	}

	body#page-my-index #page #topofscroll .list-group-item {
		background-color: var(--cards-bg-color);
	}

	body#page-my-index #page #topofscroll .row {
		align-items: center;
	}

	body #page button.btn,
	body #page .btn.btn-outline-secondary {
		background-color: var(--cards-bg-color) !important;
		color: var(--text-color) !important;
	}

	body #page button.btn:hover,
	body #page .btn.btn-outline-secondary:hover {
		color: var(--text-hover-color) !important;
	}

	body#page-my-index #page [role="menu"],
	body#page-my-index #page .dropdown-menu {
		background-color: var(--cards-bg-color) !important;
	}

	a.page-link,
	.page-item.disabled a.page-link {
		background-color: var(--cards-bg-color);
		border: none;
	}

	body#page-my-index #page #topofscroll input[type="text"],
	body#page-my-index #page #topofscroll select {
		background-color: var(--bg-color);
	}

	body#page-my-index #page #topofscroll input[type="text"]:focus {
		background-color: var(--cards-bg-color);
	}

	body#page-my-index #page #topofscroll .text-muted,
	body#page-my-index #page #topofscroll span.categoryname {
		color: var(--text-color) !important;
	}

	body #page .course-card-view {
		background-color: #151515 !important;
	}

	body .activity-item:not(.activityinline) {
		border: 1px solid rgb(6, 41, 61) !important;
	}

	/* Icons */
	body .icon-no-margin {
		color: var(--text-color) !important;
		background-color: var(--bg-color);
	}

	body .course-section-header .icon-no-margin {
		color: var(--titles-color) !important;
		background-color: var(--cards-bg-color) !important;
	}

	body .activityiconcontainer .activityicon {
		filter: invert(1) !important;
	}

	/* Navbar */
	body div#page-wrapper nav.navbar {
		background-color: var(--bg-color) !important;
		color: var(--text-color);
		border-bottom: #2ea5d7 1px solid;
	}

	body div#page-wrapper nav.navigation,
	body div#page-wrapper .moremenu .nav-tabs {
		background-color: var(--bg-color) !important;
		color: var(--text-color);
	}

	body div#page-wrapper nav.navbar a.nav-link {
		color: var(--text-color) !important;
	}

	body div#page-wrapper nav.navbar a.nav-link:hover {
		color: var(--text-hover-color) !important;
	}

	body div#page-wrapper nav.navbar a.navbar-brand {
		color: var(--titles-color) !important;
	}

	/* Modal Content */
	body .modal-content {
		background-color: var(--bg-color) !important;
	}
	`;

	const append_css = (css) => {
		const style_tag = document.createElement('style');

		style_tag.innerHTML = css;

		document.head.appendChild(style_tag);
	};

	const add_dark_mode_copyrigth = (copyrigth_msg) => {
		const obs = new MutationObserver((_mutations) => {
			const el_copyrigth = document.querySelector('.copyleft');

			if (el_copyrigth) {
				el_copyrigth.innerHTML += copyrigth_msg;
				obs.disconnect();
			}
		});

		obs.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}

	append_css(new_css);
	add_dark_mode_copyrigth(' | Dark Mode by <strong><a href="https://github.com/Equiel-1703" target="_blank">Henrique G. Rodrigues Barraz</a></strong>');
})();