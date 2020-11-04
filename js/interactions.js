

function ani() {
  document.getElementById("plane").className = "animation";
}
function anitwo() {
  document.getElementById("bg").className = "animation2";
}


new Vue({
  el: '#blog',
  data: { 
      hello: 'Hello World!',
      blogs: [
          {name: 'Introduction to Python', url: 'blog.html/'},
          {name: 'Think as a Python (not the snake)', url:'python.html/'},
          {name: 'Variables What are they?', url:'var.html/'},
          {name: 'The magic of Pythons dictionary', url: 'dictionaries-py.html/'},
          {name: 'Face Recognition (Is it really a dog)', url: 'ai.html/'},
          {name: 'What is Testing?', url:'importance-of-testion/'}
      ]
  }
})
