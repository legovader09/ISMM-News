const changelogEntries = [];

function addChangelogEntry(options) {
  changelogEntries.push(options);
}

function renderChangelog() {
  const changelogContainer = document.getElementById('changelog');
  changelogContainer.innerHTML = '';
  changelogEntries.sort(function (a, b) {
    return compareVersions(b.version, a.version);
  });
  changelogEntries.forEach(function (entry) {
    renderEntry(entry, changelogContainer);
  });
}

function compareVersions(a, b) {
  const v1parts = a.split('.');
  const v2parts = b.split('.');

  for (let i = 0; i < v1parts.length; ++i) {
    if (v2parts.length === i) return 1;
    if (v1parts[i] === v2parts[i]) continue;
    return parseInt(v1parts[i], 10) > parseInt(v2parts[i], 10) ? 1 : -1;
  }

  return v1parts.length !== v2parts.length ? -1 : 0;
}
