let checkboxContainer = document.getElementById("select_all");
let showSelectedData = document.getElementById("show_selected_data");

let valueArray = [];

let rows = [
  {
    name: "Maung Maung",
    email: "maungmaung@gmail.com",
  },
  {
    name: "Aung Aung",
    email: "aungaung@gmail.com",
  },
  {
    name: "Su Su",
    email: "susu@gmail.com",
  },
  {
    name: "Yu Yu",
    email: "yuyu@gmail.com",
  },
  {
    name: "U kyaw",
    email: "ukyaw0202@gmail.com",
  },
];
let tableBody = document.getElementById("table_body");

rows.forEach(function (row, index) {
  let html = `<tr>
                    <td>
                        <input type="checkbox" name="select_item" class="select_items" id="${
                          index + 1
                        }"/>
                    </td>
                    <td>${row.name}</td>
                    <td>${row.email}</td>
                </tr>`;

  tableBody.innerHTML += html;
});

let checkboxes = document.querySelectorAll(".select_items");

checkboxContainer.addEventListener("change", function (e) {
  valueArray = [];
  checkboxes.forEach((checkbox) => {
    checkbox.checked = e.target.checked;
    checkbox.checked
      ? valueArray.push(checkbox.id)
      : valueArray.pop(checkbox.id);
    showSelectedData.innerHTML = valueArray;
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function (e) {
    if (e.target.checked) {
      valueArray.push(e.target.id);
    } else {
      valueArray = valueArray.filter((value) => value != e.target.id);
    }

    showSelectedData.innerHTML = valueArray;
    checkboxContainer.checked = false;
  });
});

let carouselItems = document.querySelectorAll(".carousel_items");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let itemIndex = 0;
next.addEventListener("click", function () {
  let carouselLength = carouselItems.length;
  //   1 3
  itemIndex >= carouselLength ? (itemIndex = 1) : itemIndex++;

  carouselOperation();
});

prev.addEventListener("click", function () {
  let carouselLength = carouselItems.length;
  itemIndex <= carouselLength && itemIndex > 1 ?  itemIndex-- : (itemIndex = 3);

  console.log(itemIndex);

  carouselOperation();
});

function carouselOperation() {
  carouselItems.forEach(function (item, index) {
    if (itemIndex === index + 1) {
      item.textContent = "This div is active carousel";
    } else {
      item.textContent = "";
    }
  });
}

next.click();
