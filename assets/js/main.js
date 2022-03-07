const changeTab = (event) => {
  const targetTab = event.currentTarget;
  const targetId = targetTab.id.replace(/tab-/, '');
  const targetContent = document.getElementById(`content-${targetId}`);
  const oldActiveTab = document.querySelector('.tab.active');
  const oldActiveContent = document.querySelector('.content.active');

  // PREVIOUS TAB/CONTENT
  // Remove the active class from the tab and the content
  oldActiveTab.classList.remove('active');
  oldActiveContent.classList.remove('active');
  // Change the icon
  oldActiveTab.querySelector('i').classList.remove('fa-arrow-circle-up');
  oldActiveTab.querySelector('i').classList.add('fa-plus-circle');

  // SELECTED TAB/CONTENT
  // Add the active class from the tab and the content
  targetTab.classList.add('active');
  targetContent.classList.add('active');
  // Change the icon
  targetTab.querySelector('i').classList.remove('fa-plus-circle');
  targetTab.querySelector('i').classList.add('fa-arrow-circle-up');
}

const tabs = document.querySelectorAll('.tab')
tabs.forEach((tab) => {
  tab.addEventListener('click', changeTab);
})
