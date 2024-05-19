function showTab(tabIndex) {
  // Hide all tabs
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  });

  // Deactivate all tab nav items
  var tabNavItems = document.querySelectorAll('.tab-nav-item');
  tabNavItems.forEach(function(item) {
    item.classList.remove('active');
  });

  // Show the selected tab
  tabs[tabIndex].classList.add('active');

  // Activate the selected tab nav item
  tabNavItems[tabIndex].classList.add('active');
}

