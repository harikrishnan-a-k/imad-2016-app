var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
            
        'html':{
                    title: 'ARTICLE-HTML',
                    heading:'article-html',
                    date:'sep 1 2016 ',
                    button:'html',
                    content:`<p>
                      HyperText Markup Language (HTML) is the standard markup language for creating web pages and web application.
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
        'css':{
                    title: 'ARTICLE-CSS',
                    heading:'article-CSS',
                    date:'sep 12 2016 ',
                    button:'css',
                    content:`<p>
                      Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
                    </p>
                    <p>
                      CSS is designed primarily to enable the separation of document content from document presentation, including aspects such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.
                    </p> `
              
            },
        'javascript':{
                    title: 'ARTICLE-JAVASCRIPT',
                    heading:'article-JAVASCRIPT',
                    date:'sep 15 2016 ',
                    button:'js',
                    content:`<p>
                      JavaScript  is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.
                    </p>
                    <p>
                      JavaScript is also used in environments that are not Web-based, such as PDF documents, site-specific browsers, and desktop widgets. Newer and faster JavaScript virtual machines (VMs) and platforms built upon them have also increased the popularity of JavaScript for server-side Web applications. On the client side, JavaScript has been traditionally implemented as an interpreted language, but more recent browsers perform just-in-time compilation. It is also used in game development, the creation of desktop and mobile applications, and server-side network programming with run-time environments such as Node.js.
                    </p> `
              
            },
        'php':{
                    title: 'ARTICLE-PHP',
                    heading:'article-PHP',
                    date:'sep 20 2016 ',
                    button:'php',
                    content:`<p>
                      PHP is a server-side scripting language designed primarily for web development but is also used as a general-purpose programming language. Originally created by Rasmus Lerdorf in 1994, the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive acronym PHP: Hypertext Preprocessor.
                    </p>
                    <p>
                      PHP code may be embedded into HTML code, or it can be used in combination with various web template systems, web content management systems and web frameworks. PHP code is usually processed by a PHP interpreter implemented as a module in the web server or as a Common Gateway Interface (CGI) executable. The web server combines the results of the interpreted and executed PHP code, which may be any type of data, including images, with the generated web page. PHP code may also be executed with a command-line interface (CLI) and can be used to implement standalone graphical applications.
                    </p> `
                }
                
    
};

function createHtmlTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var button=data.button;
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
            <hr/>
            <div class="comments">
            <h3> Add your comments below...</h3>
            your name.. <input type="text" id="username" style="border-width:thick; background-color:#D5AAFF" /> 
            <br/>
            your comment..
            <br/>
            <textarea id="commet" rows="4" cols="50" style="border-width:thick; background-color:#D5AAFF">
            </textarea>
            <br/>
            <input type="submit" id="html" value="${button}" >
            <br/>
            <h2> User comments in this topic are</h2>
            <dl id="allcoments">
            </dl>
            <p id="com">
            </p>
            </div>
            </div>
            <script type="text/javascript" src="/ui/main.js"> </script>
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

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createHtmlTemplate(articles[articleName]));
});

/*app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});*/
/*app.get('/ui/m.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'm.jpg'));
}); */

app.use(express.static(path.join(__dirname, 'ui')));
app.get('/ui/main.js', function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});
var names= [];
app.get('/send/:name',function(req,res){
    var name=req.params.name;
    names.push(name);
    
    res.send(JSON.stringify(names));
    
    
});
var html={};
var css={};
var js={};
var php={};




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
