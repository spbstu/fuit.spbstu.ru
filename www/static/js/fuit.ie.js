var a = ['section', 'article', 'nav', 'header', 'footer', 'aside', 'details', 'figcaption', 'figure', 'hgroup', 'menu'];

for (var i = 0, j = a.length; i < j; i++) {
    document.createElement(a[i]);
}