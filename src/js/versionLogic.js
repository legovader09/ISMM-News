document.addEventListener('DOMContentLoaded', () => {
  const versionElement = document.getElementById('versionText');
  const betaVersionElement = document.getElementById('betaVersionText');
  
  fetch('ismm-data.json')
    .then(response => response.json())
    .then(data => {
      versionElement.textContent = data.latest_version;
      betaVersionElement.textContent = data.latest_version_beta === data.latest_version ? 'Currently Unavailable' : data.latest_version_beta;
    })
    .catch(error => {
      console.error('Error fetching version data:', error);
      versionElement.textContent = 'N/A';
    });
});
