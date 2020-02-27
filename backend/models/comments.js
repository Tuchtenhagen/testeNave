function Comments(author, title, text) {
  this.author = author;
  this.title = title; 
  this.text = text; 
}
 
Comments.prototype.get = function(){
  return {author, title, text};
}
