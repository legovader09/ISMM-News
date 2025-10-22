/**
 * Renders a single changelog entry to the DOM
 * @param {Object} options - The changelog entry data
 * @param {HTMLElement} container - The container to append to
 */
function renderEntry(options, container) {
  const version = options.version;
  const date = options.date;
  const summary = options.summary;
  const features = options.features || [];
  const bugfixes = options.bugfixes || [];
  const improvements = options.improvements || [];

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
    changeSummary.innerHTML = summary;
    versionContent.appendChild(changeSummary);
  }

  const changeList = document.createElement('div');
  changeList.className = 'change-list';

  if (features.length > 0) {
    const featuresSection = createCategorySection('Features', features, 'features');
    changeList.appendChild(featuresSection);
  }

  if (bugfixes.length > 0) {
    const bugfixesSection = createCategorySection('Bug Fixes', bugfixes, 'bugfixes');
    changeList.appendChild(bugfixesSection);
  }

  if (improvements.length > 0) {
    const improvementsSection = createCategorySection('Improvements', improvements, 'improvements');
    changeList.appendChild(improvementsSection);
  }

  versionContent.appendChild(changeList);

  versionContainer.appendChild(versionHeader);
  versionContainer.appendChild(versionContent);
  
  container.appendChild(versionContainer);
}

/**
 * Creates a category section (features, bugfixes, improvements)
 * @param {string} title - The category title
 * @param {Array} items - List of changes in this category
 * @param {string} className - CSS class for the category
 * @returns {HTMLElement} - The category section element
 */
function createCategorySection(title, items, className) {
  const section = document.createElement('div');
  section.className = "change-category " + className;

  const categoryTitle = document.createElement('div');
  categoryTitle.className = 'category-title';
  categoryTitle.textContent = title;
  section.appendChild(categoryTitle);

  const list = document.createElement('ul');

  items.forEach(function(item) {
    const listItem = document.createElement('li');
    if (typeof item === 'object' && item.text && item.tag) {
      listItem.textContent = item.text;

      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = item.tag;

      listItem.appendChild(tag);
    } else {
      listItem.innerHTML = item;
    }

    list.appendChild(listItem);
  });

  section.appendChild(list);
  return section;
}
