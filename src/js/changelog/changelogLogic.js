const changelogEntries = [];

/**
 * Creates and adds a changelog entry to the page
 * @param {Object} options - Configuration for the changelog entry
 * @param {string} options.version - Version number (e.g., "v1.2.0")
 * @param {string} options.date - Release date (e.g., "June 15, 2024")
 * @param {string} options.summary - Brief summary of the changes
 * @param {Array} [options.features] - List of new features
 * @param {Array} [options.bugfixes] - List of bug fixes
 * @param {Array} [options.improvements] - List of improvements
 */
function addChangelogEntry(options) {
  changelogEntries.push(options);
}

/**
 * Renders all changelog entries in sorted order
 */
function renderChangelog() {
  const changelogContainer = document.getElementById('changelog');
  changelogContainer.innerHTML = '';
  changelogEntries.sort(function(a, b) {
    return compareVersions(b.version, a.version);
  });
  changelogEntries.forEach(function(entry) {
    renderEntry(entry, changelogContainer);
  });
}

/**
 * Compares two version strings (e.g., "v1.2.0", "v1.10.1")
 * @param {string} a - First version string
 * @param {string} b - Second version string
 * @returns {number} - Negative if a < b, positive if a > b, 0 if equal
 */
function compareVersions(a, b) {
  const v1parts = a.split('.');
  const v2parts = b.split('.');

  for (let i = 0; i < v1parts.length; ++i) {
    if (v2parts.length === i) {
      return 1;
    }

    if (v1parts[i] === v2parts[i]) {
      continue;
    }

    return parseInt(v1parts[i], 10) > parseInt(v2parts[i], 10) ? 1 : -1;
  }

  if (v1parts.length !== v2parts.length) {
    return -1;
  }

  return 0;
}
