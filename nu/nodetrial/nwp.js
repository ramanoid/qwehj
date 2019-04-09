const a = require('express');
const ahb= require('express-handlebars');
a.engine("handlebars",ahb(defaultLayout='mainp'))
a.set('viewengine','handlebars');
a.use(express.static('views/static'));
a.use(express.static ('views/layouts'));
a.get('/',(req,res)=>{
    res.render('home');
})
a.get('/home',(req,res)=>{
    res.render('home');
})
a.get('/about',(req,res)=>{
    releaseEvents.render('about');
})
a.get('/contact us',(req,res)=>{
    res.render("indexo")
}) .listen(7854);


