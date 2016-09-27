var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    
html:{
            title: 'ARTICLE-HTML',
            heading:'article-html',
            date:'sep 1 2016 ',
            content:`<p>
              HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.
              With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.
              Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. 
              HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
            </p>
            <p>
              HTML elements are the building blocks of HTML pages.
              With HTML constructs, images and other objects, such as interactive forms may be embedded into the rendered page.
              It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items.
              HTML elements are delineated by tags, written using angle brackets. 
            </p> `
        },
css:{
            title: 'ARTICLE-CSS',
            heading:'article-CSS',
            date:'sep 12 2016 ',
            content:`<p>
              Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
            </p>
            <p>
              CSS is designed primarily to enable the separation of document content from document presentation, including aspects such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.
            </p> `
      
    }
        
    
};

function createHtmlTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=
        `
        <html>
          <head>
            <title>  ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet">
          </head>
          <body>
            <div class="container">
            <div>  
              <a href="/"> home </a>
            </div>
            <hr/>
            <h3>
             ${heading}
            </h3>
            <div>
             ${date}
            </div>
            <div>
              ${content}
            </div>
            </div>
          </body>
          
        </html> `;  

  return htmlTemplate;
    
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/html', function (req, res) {
    /*var articleName=req.params.articleName;*/
  res.send(createHtmlTemplate(articles[html]));
});

/*app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});*/
app.get('/ui/m.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'm.jpg'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
