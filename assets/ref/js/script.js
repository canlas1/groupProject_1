$(document).ready(function () {
    console.log("ready!");

/* This is what controls the card toggles
_______________________________________________________________*/
    
    $(".flip-toggle").on("click", function () {
        console.log(this);
        this.classList.toggle('hover');
        console.log(this.classList);
    })



});


/* This is what controls the search field
_______________________________________________________________*/

;(function(window) {

	'use strict';

	var closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		inputSearch = searchContainer.querySelector('.search__input');

	function init() {
		initEvents();	
	}

	function initEvents() {
		inputSearch.addEventListener('focus', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

	function openSearch() {
		searchContainer.classList.add('search--open');
		inputSearch.focus();
	}

	function closeSearch() {
		searchContainer.classList.remove('search--open');
		inputSearch.blur();
		inputSearch.value = '';
	}

	init();

})(window);

