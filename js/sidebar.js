// Single source of truth for the sidebar (name, role, nav, LinkedIn) so it
// isn't hand-copied into every page. 

(function () {
  var root = document.getElementById('sidebar');
  if (!root) return;

  var base = root.getAttribute('data-base') || '.';
  var current = root.getAttribute('data-current') || '';

  var pages = [
    { key: 'about', label: 'About', href: base + '/index.html' },
    { key: 'research', label: 'Research', href: base + '/research.html' },
    { key: 'design', label: 'Design', href: base + '/design.html' }
  ];

  var navItems = pages
    .map(function (p) {
      var isCurrent = p.key === current;
      var attr = isCurrent ? ' aria-current="page"' : '';
      return '<li><a href="' + p.href + '"' + attr + '>' + p.label + '</a></li>';
    })
    .join('');

  root.innerHTML =
    '<div class="sidebar-top">' +
      '<p class="name">Charlotte<br />Moremen</p>' +
      '<p class="role">User experience &amp; interaction researcher</p>' +
      '<nav aria-label="Primary"><ul>' + navItems + '</ul></nav>' +
    '</div>' +
    '<div class="sidebar-bottom">' +
      '<a href="https://www.linkedin.com/in/charlotte-moremen/">LinkedIn</a>' +
    '</div>';
})();
