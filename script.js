document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#fruit');
    const suggestions = document.querySelector('.suggestions ul');

    const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

    function search(str) {
        str = str.toLowerCase(); // Turns input into lowercase for case-insensitive matching
        return fruit.filter(item => item.toLowerCase().includes(str));
    }

    function searchHandler(e) {
        const inputVal = e.target.value.trim();
        const results = search(inputVal);
        
        showSuggestions(results, inputVal);
    }

    function showSuggestions(results, inputVal) {
        suggestions.innerHTML = ''; // This clears previous suggestions
        
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            suggestions.appendChild(li);
        });
        
        if (inputVal === '') {
            suggestions.style.display = 'none'; // This hides suggestions if the input is empty
        }
        else {
            suggestions.style.display = 'block'; // This shows the suggestions
        }
    }

    function useSuggestion(e) {
        if (e.target.tagName === 'LI') {
            input.value = e.target.textContent;
            suggestions.style.display = 'none'; // This will hide suggestions after you select one
        }
    }

    input.addEventListener('input', searchHandler);
    suggestions.addEventListener('click', useSuggestion);
});