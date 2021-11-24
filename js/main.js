const todoTitle = document.querySelector(".title");
const todoDesc = document.querySelector(".desc");
const todoSubmit = document.querySelector(".submit");
const todoTime = document.querySelector(".date");
const todoList = document.querySelector(".todo-list");
const Edit = document.querySelector("#EDIT");
const Alert=document.querySelector("#alert")
const idtitle =document.getElementById("#title")

const todoData = {
  title: todoTitle.value,
  description: todoDesc.value,
  createdAt: Date.now(),
  updateAt: Date.now(),
  dueDate: todoTime.value,
  checked: false,
  id: 10000,
};

todoSubmit.addEventListener("click", addTodo);

const BASE_URL = "https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/";

const resp = fetch(BASE_URL).then((response) => {
  response
    .json()
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
});

function addTodo(e) {
  e.preventDefault();

  if(todoTitle.value==null || todoTitle.value==""){
    todoTitle.style.border="2px solid red"
    Alert.style.display="block"
  }else{


    const todoData = {
      title: todoTitle.value,
      description: todoDesc.value,
      createdAt: Date.now(),
      updateAt: Date.now(),
      dueDate: Date.now().toLocaleString,
      checked: false,
    };
  
    const BASE_URL = "https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/";
  
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });
  }

}

function launch_toast() {
  var x = document.getElementById("toast");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.href.includes("?")) {
    document.querySelector("#EDIT").style.display = "block";
    document.querySelector("#submit").style.display = "none";
    let id = window.location.href.split("?")[1];
    console.log(id);

    (async () => {
      const res = await fetch(
        `https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/${id}`
      );
      const data = await res.json();
      console.log(data);
      console.log(data.dueDate);

      var timestamp = data.dueDate;
      var date_not_formatted = new Date(timestamp);

      var formatted_string = date_not_formatted.getFullYear() + "-";

      if (date_not_formatted.getMonth() < 9) {
        formatted_string += "0";
      }
      formatted_string += date_not_formatted.getMonth() + 1;
      formatted_string += "-";

      if (date_not_formatted.getDate() < 10) {
        formatted_string += "0";
      }
      formatted_string += date_not_formatted.getDate();

      console.log(formatted_string);

      todoTitle.value = data.title;
      todoDesc.value = data.description;
      todoTime.value = formatted_string;
    })();
  }
});

const PUTDATA = {
  title: todoTitle.value,
  description: todoDesc.value,
  createdAt: Date.now(),
  updateAt: Date.now(),
  dueDate: todoTime.value.toLocaleDateString("en"),
  checked: false,
};
let id = window.location.href.split("?")[1];
async function Editt(id) {

  alert("yoyo")
  const res = await fetch(`https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(PUTDATA)

  })
  alert("yoyo")

}

function oninput(e) {
  console.log("object");
  
  // console.log(e.target.value);
  
}

// idtitle.oniput=function(){
//   console.log("result");
// }
