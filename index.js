const colorSchemeSelect = document.getElementById('color-scheme-select');

colorSchemeSelect.addEventListener('change', (event) => {
  const colorScheme = event.target.value;
  document.body.className = `color-scheme-${colorScheme}`;
});
