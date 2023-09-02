const text = document.querySelector("#text")
const listitems = document.querySelector("#box")
const ultag = document.querySelector(".box")

text.addEventListener(
    "keyup",
    function (list) {
        if (list.key == "Enter") {
            lists(text.value);
            text.value = "";
        }
    }
)

const lists = (text) => {
    const items = document.createElement("li");
    items.innerHTML = `
    ${text}`;

    items.addEventListener(
        "click",
        function () {
            items.classList.toggle("click")
        }
    )

    items.addEventListener(
        "dblclick",
        function () {
            items.remove();
        }
    )
    listitems.appendChild(items)
}