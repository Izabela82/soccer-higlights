const pg = require('./knex')

function getAll(){
  return pg('post').select().orderBy('votes', 'desc')
}

function add(obj){
  return pg('post').insert(obj)
}

function upvote(id){
  return pg('post')
  .where('id', id)
  .increment('votes', 1)
}

function downvote(id){
  return pg('post')
  .where('id', id)
  .decrement('votes', 1)
}

function getVotes(id){
  return pg('post')
  .select()
  .where('id', id)
}

function getComments(id){
  return pg('post')
  .join('comments', 'post.id', '=', 'comments.post_id')
  .select().where('post_id', id)
}

function newComment(body){
  return pg('comments')
  .insert(body)
}

function getPost(id){
  return pg('post').select().where('id', id)
}


module.exports = {
  getAll,
  add,
  upvote,
  downvote,
  getVotes,
  getComments,
  newComment,
  getPost

}
