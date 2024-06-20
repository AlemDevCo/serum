const presets = [
    { name: 'Martin Garrix Type Lead', file: 'presets/Martin_Garrix_Type_Lead.fxp', tags: ['leads'] },
    // Add more presets here with tags
];

const tags = [...new Set(presets.flatMap(preset => preset.tags))];

document.addEventListener('DOMContentLoaded', () => {
    const presetList = document.getElementById('presetList');
    const tagFilters = document.getElementById('tagFilters');

    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag';
        tagElement.innerText = tag;
        tagElement.onclick = () => filterByTag(tag);
        tagFilters.appendChild(tagElement);
    });

    presets.forEach(preset => {
        const presetItem = document.createElement('div');
        presetItem.className = 'preset-item';
        presetItem.innerHTML = `<a href="${preset.file}" download>${preset.name}</a>
                                <div class="tags">${preset.tags.map(tag => `<span class="tag-label">${tag}</span>`).join('')}</div>`;
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

function filterByTag(tag) {
    const tagElements = document.getElementsByClassName('tag');
    const presetItems = document.getElementsByClassName('preset-item');

    Array.from(tagElements).forEach(element => {
        element.classList.remove('selected');
    });

    const selectedTagElement = Array.from(tagElements).find(element => element.innerText === tag);
    selectedTagElement.classList.add('selected');

    Array.from(presetItems).forEach(item => {
        const tags = Array.from(item.getElementsByClassName('tag-label')).map(label => label.innerText);
        if (tags.includes(tag)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
