const dashboard = document.getElementById("dashboard");
fetch('https://github.com/dashboard-feed')
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const mainContent = doc.querySelector('main');

    if (dashboard && mainContent) {
      dashboard.innerHTML = mainContent.innerHTML;
    }
  })
  .catch(error => {
    console.error('Error fetching the dashboard feed:', error);
  });
