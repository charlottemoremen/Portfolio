// Single source of truth for the sidebar (name, role, nav, LinkedIn, email)

(function () {
  var root = document.getElementById('sidebar');
  if (!root) return;

  var base = root.getAttribute('data-base') || '.';
  var current = root.getAttribute('data-current') || '';

  var pages = [
    { key: 'about', label: 'About', href: base + '/index.html' },
    { key: 'research', label: 'UX Research', href: base + '/research.html' },
    { key: 'design', label: 'Product &amp; Interaction Design', href: base + '/design.html' }
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
      '<p class="role"> UX Researcher, Product Designer, &amp; Frontend Developer</p>' +
      '<nav aria-label="Primary"><ul>' + navItems + '</ul></nav>' +
    '</div>' +
    '<div class="sidebar-bottom">' +
      '<a href="https://www.linkedin.com/in/charlotte-moremen/">LinkedIn</a><br />' +
      '<a href="mailto:charlottebmoremen@gmail.com">Email</a>' +
    '</div>';
})();
