var html = "<table border='1|1'>";
for (var i = 0; i < a.length; i++) {
  html += "<tr>";
  html += "<td>" + a[i].name + "</td>";
  html += "<td>" + a[i].age + "</td>";

  html += "</tr>";
}
html += "</table>";
//document.getElementById("divid").innerHTML = html;
