var options = [];

function getFolders() {
   $.get('https://api.github.com/repos/stratio/egeo-web/contents/?ref=gh-pages', function (data) {
      data.forEach(function (element) {
         if (element.type === "dir") {
            options.push(element.name);
         }
      }, this);
      window.location.replace('http://stratio.github.io/egeo-web/' + option[option.length -1] + '/');
   });
}

$(document).ready(function () {
   getFolders();
});