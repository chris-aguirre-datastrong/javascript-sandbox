var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>On this page:</h2>" +
    "<ul>";

var newLine, el, title, link;

var articleHeaders = document.querySelectorAll('article h3');
console.dir(articleHeaders);

var allQuestionsDiv = document.querySelector('.all-questions');
console.dir(allQuestionsDiv);


for(var i = 0; i < articleHeaders.length; i++) {
  el = articleHeaders[i];
  title = el.outerText;
  link = "#" + el.id;

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;
}

//
// articleHeaders.each(function() {
//
//   el = $(this);
//   title = el.text();
//   link = "#" + el.attr("id");
//
//   newLine =
//     "<li>" +
//       "<a href='" + link + "'>" +
//         title +
//       "</a>" +
//     "</li>";
//
//   ToC += newLine;
//
// });

ToC +=
   "</ul>" +
  "</nav>";

console.log(ToC);

elChild = document.createElement("div");
elChild.innerHTML = 'This is prepended into the element.';

var template = document.createElement('template');
html = ToC.trim(); // Never return a text node of whitespace as the result
template.innerHTML = html;

console.dir(template);


allQuestionsDiv.insertBefore(template.content, allQuestionsDiv.firstChild);

// $(".all-questions").prepend(ToC);
