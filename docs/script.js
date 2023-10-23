function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  function loadXMLComponent(position,postId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(position).innerHTML =this.responseText;
      }
    };
    xhttp.open("GET", postId, true);
    xhttp.send();
  }

window.addEventListener("hashchange", function(e) {
    if(e.oldURL.length > e.newURL.length)
        alert("want to back?")
});

class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}

const back = new Stack();

function loadXMLContent(position,postId) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(position).innerHTML =this.responseText;
      if(back.isEmpty()){back.push(postId)}else{document.getElementById('back-btn').innerHTML = `<button class="solid-button" onclick="back.pop(); loadXMLContent('post','`+back.peek()+`'); back.pop();">&#8619;</button>`;
       back.push(postId);}
    }
  };
  xhttp.open("GET", postId, true);
  xhttp.send();
}

loadXMLComponent("theme","docs/components/t.xml");
loadXMLComponent("H-title","docs/components/H-title.xml");
loadXMLComponent("h-title","docs/components/h-title.xml");
loadXMLComponent("list-D-H","docs/components/list-D-H.xml");
loadXMLComponent("list-M-H","docs/components/list-M-H.xml");
loadXMLComponent("list-Mobile","option.xml");
loadXMLComponent("list-Desktop","option.xml");

loadXMLContent('post','home.html');