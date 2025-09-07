 let lists = [];
        let index = null;

        function add(event) {
            event.preventDefault(); 

            let task = document.getElementById("task").value.trim();

            if (!task) {
                alert("Please enter your task first!");
                return;
            }

            let list = { task: task };

            if (index === null) {
                lists.push(list);
            } else {
                lists[index] = list;
                index = null;
                document.getElementById("send").value = "Add Task";
            }

            document.getElementById("task").value = "";
            display();
        }

        function display() {
            let element = document.getElementById("element");
            element.innerHTML = "";

            lists.forEach((list, i) => {
                element.innerHTML += `
                    <li>
                        ${list.task}
                        
                        <button onclick="deleteTask(${i})">Delete</button>
                    </li>
                `;
            });
        }

        function deleteTask(i) {
            lists.splice(i, 1);
            display();
        }
