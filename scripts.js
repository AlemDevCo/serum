const presets = [
    { name: 'Example Preset', file: 'presets/example-preset.fxp' },
    // Add more presets here
];

document.addEventListener('DOMContentLoaded', () => {
    const presetList = document.getElementById('presetList');
    presets.forEach(preset => {
        const presetItem = document.createElement('div');
        presetItem.className = 'preset-item';
        presetItem.innerHTML = `<a href="${preset.file}" download>${preset.name}</a>`;
        presetList.appendChild(presetItem);
    });
});

function searchPresets() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const presetItems = document.getElementsByClassName('preset-item');

    Array.from(presetItems).forEach(item => {
        const text = item.textContent || item.innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
