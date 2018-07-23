var options = [];
var tokens = [100, 10, 1];

function getFolders() {
   $.get('https://api.github.com/repos/stratio/egeo-web/contents/?ref=gh-pages', function (data) {
      data.forEach(function (element) {
         if (element.type === "dir") {
            options.push(element.name);
         }
      }, this);
      options = options.sort(function(version1, version2) {
         var versionNum1 = version1.split('.').reduce(generateVersionNumber);
         var versionNum2 = version2.split('.').reduce(generateVersionNumber);
         return versionNum1 - versionNum2;
      });
      window.location.replace('http://stratio.github.io/egeo-web/' + options[options.length -1] + '/');
   });
}

function generateVersionNumber(prev, current, i) {
      return (prev  * tokens[i - 1]) +  (current * tokens[i]);
}

$(document).ready(function () {
   getFolders();
});