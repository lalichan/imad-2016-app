var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 

var articles= {
    'article-one': {
    title:"Article One! Mathew Thomas",
    heading:"Article One",
    date:"Sept 16 2016",
    content:
            `<p>
                This is my content for First article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,
            </p>
             <p>
                This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,
            </p>
             <p>
                This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,
            </p>`
},
    'article-two': { 
    title:"Article Two! Mathew Thomas",
    heading:"Article Two",
    date:"Sept 20 2016",
    content:
            `<p>
                This is my content for Second article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,
            </p>
             <p>
                This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,
            </p>
             <p>
                This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,
            </p>`
        
    },
    'article-three': { 
    title:"Article Three! Mathew Thomas",
    heading:"Article Three",
    date:"Sept 25 2016",
    content:
            `<p>
                This is my content for Third article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,
            </p>
             <p>
                This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,
            </p>
             <p>
                This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,This is my content for first article,
            </p>`
        
    },
};
function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content=data.content;
    
var htmlTemplate=`
<head>
<html>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <o href="/" >Home</o>
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
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
   	res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });
 var counter = 0;
 app.get('/counter',function(req,res){
 counter = counter + 1;
 res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:articleName', function (req, res) {
    //articleName == article-one
    //articles[articleName] == {} content object for article-one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles(articleName)));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
