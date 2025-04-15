function renderEntry(options, container) {
  const { version, date, summary, features = [], bugfixes = [], improvements = [] } = options;

  const versionContainer = document.createElement('div');
  versionContainer.className = 'version-container';

  const versionHeader = document.createElement('div');
  versionHeader.className = 'version-header';

  const versionNumber = document.createElement('div');
  versionNumber.className = 'version-number';
  versionNumber.textContent = version;

  const versionDate = document.createElement('div');
  versionDate.className = 'version-date';
  versionDate.textContent = date;

  versionHeader.appendChild(versionNumber);
  versionHeader.appendChild(versionDate);

  const versionContent = document.createElement('div');
  versionContent.className = 'version-content';

  if (summary) {
    const changeSummary = document.createElement('div');
    changeSummary.className = 'change-summary';
    changeSummary.textContent = summary;
    versionContent.appendChild(changeSummary);
  }

  const changeList = document.createElement('div');
  changeList.className = 'change-list';

  if (features.length > 0) {
    changeList.appendChild(createCategorySection('Features', features, 'features'));
  }

  if (bugfixes.length > 0) {
    changeList.appendChild(createCategorySection('Bug Fixes', bugfixes, 'bugfixes'));
  }

  if (improvements.length > 0) {
    changeList.appendChild(createCategorySection('Improvements', improvements, 'improvements'));
  }

  versionContent.appendChild(changeList);
  versionContainer.appendChild(versionHeader);
  versionContainer.appendChild(versionContent);
  container.appendChild(versionContainer);
}

function createCategorySection(title, items, className) {
  const section = document.createElement('div');
  section.className = `change-category ${className}`;

  const categoryTitle = document.createElement('div');
  categoryTitle.className = 'category-title';
  categoryTitle.textContent = title;
  section.appendChild(categoryTitle);

  const list = document.createElement('ul');

  items.forEach(item => {
    const listItem = document.createElement('li');
    if (typeof item === 'object' && item.text && item.tag) {
      listItem.textContent = item.text;

      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = item.tag;

      listItem.appendChild(tag);
    } else {
      listItem.textContent = item;
    }
    list.appendChild(listItem);
  });

  section.appendChild(list);
  return section;
}
