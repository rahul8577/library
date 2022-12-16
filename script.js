const arr = [];
let tr = document.getElementById("tbody");

//const ter = "<tr>"


function makeRow() {
    var roww = "";
    let sn = 0;
    for (ai in arr) {
        // roww+=createTr(arr[ai]);
        var row = "<tr>"
        row += `<td> ${++sn} </td>`;
        row += `<td> ${arr[ai].author} </td>`;
        row += `<td> ${arr[ai].title} </td>`;
        row += `<td> ${arr[ai].pages} </td>`;
        row += `<td> ${arr[ai].read} </td>`;
        row += `<td><input data-person=${ai} type="button" value="delete" class="delete-btn"></td>`;

        row += "<tr>"
        roww += row;
        //console.log(arr[ai]);
    }
    tr.innerHTML = roww;
}




const btn = document.getElementById("submitbtn");

btn.addEventListener('click', function fun(e) {
    // console.log(e);
    var author = document.getElementById("author").value;
    var title = document.getElementById("title").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").value;

    var obj = {
        author: author,
        title: title,
        pages: pages,
        read: read
    }

    arr.push(obj);
    //console.log(arr);
    makeRow();
    e.preventDefault();

});