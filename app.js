const express = require('express')
const linkQuery = require('./db/link-query')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set ('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res)=>{
  linkQuery.getAll()
  .then((data)=>{
  res.render('index', {data})
  })
})

app.get('/upvote/:id', (req, res)=>{
  linkQuery.upvote(req.params.id)
  .then(()=>{
  linkQuery.getVotes(req.params.id)
  .then((data)=>{
    res.redirect('/')
    })
  })
})

app.get('/downvote/:id', (req, res)=>{
  linkQuery.downvote(req.params.id)
  .then(()=>{
  linkQuery.getVotes(req.params.id)
  .then((data)=>{
    res.redirect('/')
    })
  })
})

app.get('/getComments/:id',(req, res)=>{
  linkQuery.getComments(req.params.id)
  .then((comments)=>{
  linkQuery.getPost(req.params.id)
  .then((post)=>{
    res.render('comments', {comments, post})
   })
  })
})

app.post('/newComment', (req, res)=>{
  console.log(req.body);
  linkQuery.newComment(req.body)
  .then(()=>{
    res.redirect('/getComments/' + req.body.post_id)
  })
})

app.post('/add-post', (req, res)=>{
  linkQuery.add(req.body)
  .then(() => {
    res.redirect('/')

  })
})

app.listen (port, ()=>{
  console.log('Soccer listen on port' + port);
})
