const todoList = document.querySelector(".todo-list");
const todoLi = document.querySelector(".todo");
const a2=document.getElementById("#2")

render();
function render(params) {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const BASE_URL1 = "https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos?p=1&l=10";

    (async () => {
      const res = await fetch(BASE_URL1, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      data.forEach((item) => {
        const LI = document.createElement("li");

        LI.classList = "todo";

        const content = `
        <div id="${item.id}">
        <input onchange="handelCheck(${item.id})" type="checkbox" name="check" class="check" />
        ${item.title}
        <span class="date">${item.dueDate}</span>
        <i onclick="handelEdit(${item.id})" class="fas fa-edit"></i>
        <i onclick="handelDelete(${item.id})" class="fas fa-trash"></i>
      </div>
      <span class="desc">
      ${item.description}
      </span>
      `;

        LI.innerHTML = content;

        todoList.appendChild(LI);
      });
    })();
  });
}

function handelDelete(id) {
  const BASE_URL = `https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/${id}`;

  fetch(BASE_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(deleteLI(id));
  console.log(id);
}

function deleteLI(id) {
  const LI = document.getElementById(id);

  LI.parentElement.remove();
}

function handelEdit(id) {
  window.location.href = `http://127.0.0.1:5500/index.html?${id}`;

  console.log(id);
}

// a2.addEventListener("click",()=>{
//   const BASE_URL1 = "https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos?p=1&l=10";

//     (async () => {
//       const res = await fetch(BASE_URL1, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       console.log(data);

//       data.forEach((item) => {
//         const LI = document.createElement("li");

//         LI.classList = "todo";

//         const content = `
//         <div id="${item.id}">
//         <input onchange="handelCheck(${item.id})" type="checkbox" name="check" class="check" />
//         ${item.title}
//         <span class="date">${item.dueDate}</span>
//         <i onclick="handelEdit(${item.id})" class="fas fa-edit"></i>
//         <i onclick="handelDelete(${item.id})" class="fas fa-trash"></i>
//       </div>
//       <span class="desc">
//       ${item.description}
//       </span>
//       `;

//         LI.innerHTML = content;

//         todoList.appendChild(LI);
//       });
//     })();
  
function handelCheck(id) {
  fetch(`https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/${id}`,{

    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body:{
      checked:true
    }


  })
  
}


