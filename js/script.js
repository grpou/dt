const input = document.getElementById('items');
const suggestions = document.getElementById('suggestions');

const suggestionList = [];

input.addEventListener('input', () => {
  const inputText = input.value.toLowerCase();
  const filteredSuggestions = suggestionList.filter(item =>
    item.toLowerCase().includes(inputText.toLowerCase())
  );

  // Display suggestions
  if (inputText) {
    suggestions.innerHTML = '';
    filteredSuggestions.forEach(suggestion => {
      const suggestionElement = document.createElement('div');
      suggestionElement.textContent = suggestion;

      suggestionElement.addEventListener('mouseover', () => {
        suggestionElement.style.backgroundColor = '#3b3836';
      });
      suggestionElement.addEventListener('mouseout', () => {
        suggestionElement.style.backgroundColor = '';
      });

      suggestionElement.addEventListener('click', () => {
        input.value = suggestion;
        suggestions.style.display = 'none';
      });

      suggestions.appendChild(suggestionElement);
    });
    suggestions.style.display = 'block';
  } else {
    suggestions.style.display = 'none'; // Hide suggestions if input is empty
  }
});

// Hide suggestions when clicking outside the input
document.addEventListener('click', event => {
  if (!input.contains(event.target)) {
    suggestions.style.display = 'none';
  }
});
