
var myArray = [
    {'title':'Rich dad poor dad', 'author':'Robert Kiyosaki', 'date':'1997'},
    {'title':'The habbit of winning', 'author':'Prakash Iyer', 'date':'1989'},
    {'title':'Influencer', 'author':'David Maxfield', 'date':'2003'},
    {'title':'Harry Potter', 'author':'Rowling', 'date':'2001'},
    {'title':'Ponniyin Selvan', 'author':'Kalki', 'date':'1957'},
    {'title':'Theroy of Relativity', 'Einstein':'24', 'date':'1970'},
]

buildTable(myArray)



function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].title}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].date}</td>
                  </tr>`
        table.innerHTML += row


    }
}

// var myObject = [{
//     author: "Jane",
//     title: "Doe",
//     date: "jdoe@email.com",
//     url: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
// }, {
//     author: "Jane",
//     title: "Doe",
//     date: "jdoe@email.com",
//     url: "https://kbimages1-a.akamaihd.net/bd02da79-b80a-42ef-a788-168ae2f20393/1200/1200/False/harry-potter-and-the-deathly-hallows-4.jpg"
// }, {
//     author: "Jane",
//     title: "Doe",
//     date: "jdoe@email.com",
//     url: "https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg"
// }];

// builddiv(myObject);
// function builddiv(data){
//     var desc = document.getElementsByClassName("description");

//     for(var i=0; i<data.length; i++){
//         var row = <p>${data[i].author}</p>
//         desc.innerHtml += row;
//     }
// }

// myObject.forEach((e,i,a)=>{
//     document.getElementById("imgs").src = e.url;
// });

// function filterobj(c){
//     var x,i;
//     x = document.getElementsByClassName("fil");
//     if(x == "Author"){

//     }else if(x == "Title"){

//     }else if(x == "Date"){

//     }
// }
