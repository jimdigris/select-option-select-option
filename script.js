'use strict';

(function () {
    const SELECT_COUNTRY = document.querySelector('#country');
    const SELECT_COUNTRY_OPTIONS = SELECT_COUNTRY.options;
    const SELECT_CITY = document.querySelector('#city');

    const SITIES = {
        Россия: [
            'Москва',
            'Санкт-Петербург',
            'Воронеж',
        ],

        Америка: [
            'Калифорния',
            'Техас',
        ]
    }

    // --

    SELECT_COUNTRY.addEventListener('change', onSelectCountryClick);

    // --

    function onSelectCountryClick() {
        let selectedIndex = SELECT_COUNTRY.selectedIndex;
        let selectedCountry = SELECT_COUNTRY_OPTIONS[selectedIndex].value;

        fillCities(selectedCountry);
    }

    function fillCities(country) {
        let selectSityOptions = SELECT_CITY.options;

        if (selectSityOptions.length > 0) {
            while (SELECT_CITY.firstChild) {
                SELECT_CITY.removeChild(SELECT_CITY.firstChild);
            }
        }

        for (let key in SITIES) {
            if (country === key) {
                for (let i = 0; i < SITIES[key].length; i++) {
                    let sity = SITIES[key][i];
                    let option = '<option value=" ">' + sity + '</option>';
                    SELECT_CITY.insertAdjacentHTML("beforeend", option);
                }
            }
        }
    }
})();