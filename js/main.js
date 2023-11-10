
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


let addButton = document.getElementById("addButton");
let deleteButton = document.getElementById("deleteButton");

// xử lý sự kiện add Button
addButton.addEventListener("click", function (event) {
    event.preventDefault();
    let nameField = document.getElementById("nameField");
    let artistField = document.getElementById("artistField");
    let priceField = document.getElementById("priceField");
    let typeField = document.getElementById("typeField");

    // Get the values from the input fields
    let nameValue = nameField.value;
    let artistValue = artistField.value;
    let priceValue = priceField.value;
    let typeValue = typeField.value;

    if (nameValue && artistValue && priceValue && typeValue) {
        // lưu danh sách vào table
        let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];

        books.push({
            nameValue: nameValue,
            artistValue: artistValue,
            priceValue: priceValue,
            typeValue: typeValue,
        });

        localStorage.setItem("books", JSON.stringify(books));
       renderListBook(); 
    }
});

function renderListBook() {
  let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
  console.log(books.length);
  if (books.length === 0) {
      document.getElementById("list-book").style.display = "none";
      return false;
  }
  document.getElementById("list-book").style.display = "block";

  let tableContent = `<tr>
      <td>#</td>
      <td>Name</td>
      <td>Artist</td>
      <td>Price</td>
      <td>Type</td>
      <td width="100">Hành động</td>
  </tr>`;

  books.forEach((book, index) => {
    let bookId = index;
      index++;
      tableContent += `<tr>
          <td>${index}</td>
          <td>${book.nameValue}</td>
          <td>${book.artistValue}</td>
          <td>${book.priceValue}</td>
          <td>${book.typeValue}</td>
          <td>
              <a href="#" onclick="editBook(${bookId})">Edit</a> | <a href="#" onclick="deleteBooks(${bookId})">Delete</a>
          </td>
      </tr>`;
  });

  document.getElementById("table-book").innerHTML = tableContent;
}

function deleteBooks(id){
  let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
   books.splice(id, 1);
   localStorage.setItem("books", JSON.stringify(books));
   renderListBook();

}

function editBook(id) {
  let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];

  // Lấy thông tin của cuốn sách cần chỉnh sửa
  let bookToEdit = books[id];

  // Điền thông tin vào các trường input
  document.getElementById("nameField").value = bookToEdit.nameValue;
  document.getElementById("artistField").value = bookToEdit.artistValue;
  document.getElementById("priceField").value = bookToEdit.priceValue;
  document.getElementById("typeField").value = bookToEdit.typeValue;

  // Thêm sự kiện cho nút "Save" để lưu các thay đổi
  let updateButton = document.getElementById("saveButton");
  updateButton.addEventListener("click", function (event) {
      event.preventDefault();

      // Cập nhật thông tin của cuốn sách trong mảng
      books[id] = {
          nameValue: document.getElementById("nameField").value,
          artistValue: document.getElementById("artistField").value,
          priceValue: document.getElementById("priceField").value,
          typeValue: document.getElementById("typeField").value,
      };

      // Lưu lại vào localStorage và render lại danh sách
      localStorage.setItem("books", JSON.stringify(books));
      renderListBook();
  });
}

let searchButton = document.getElementById("searchButton");
let listSearch = document.getElementById("list-search");
// sử lý sự kiện searchBooks
searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    
    let searchTerm = listSearch.value.toLowerCase(); // Lấy giá trị từ ô nhập liệu và chuyển thành chữ thường
    
    // Lấy danh sách các dòng trong bảng sách
    let rows = document.getElementById("table-book").getElementsByTagName("tr");

    // Duyệt qua từng dòng để tìm kiếm
    for (let i = 1; i < rows.length; i++) { // Bắt đầu từ 1 để tránh xử lý dòng tiêu đề
        let rowData = rows[i].innerText.toLowerCase(); // Chuyển dữ liệu trong dòng thành chữ thường để so sánh

        // Kiểm tra xem dòng có chứa từ khóa tìm kiếm không
        if (rowData.includes(searchTerm)) {
            // Nếu có, làm nổi bật dòng đó (ví dụ: thay đổi màu nền)
            rows[i].style.backgroundColor = "#FFFF99"; // Màu nền màu vàng
        } else {
            // Nếu không, trả lại màu nền mặc định
            rows[i].style.backgroundColor = "";
        }
    }
});



// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});