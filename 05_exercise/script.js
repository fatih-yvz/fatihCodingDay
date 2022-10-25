let books = [
    {
        title:'Why Nations Fail',
        author:'James A. Robinson',
        stock:'in stock',
        price:'$20'
    },
    {
        title:'Where the Crawdads Sing',
        author:'Delia Owens',
        stock:'sold out',
        price: '$15'
    },
    {
        title:'The Vanishing Half',
        author:'Britt Benett',
        stock: 'in stock',
        price: '$25'
    }
]

const booksElement = document.getElementById('books');

function createElements(){
    const section = document.createElement('section');
    const ul = document.createElement('ul');
    const title = document.createElement('li');
    const author = document.createElement('li');
    const stock = document.createElement('li');
    const price = document.createElement('li');

    ul.appendChild(title);
    ul.appendChild(author);
    ul.appendChild(stock);
    ul.appendChild(price);
    section.appendChild(ul);

    return {section,ul,title,author,stock,price};
}

function loadBooks(){
    

    for(let i=0;i<books.length;i++){
        let {section,ul,title,author,stock,price} = createElements();
        title.innerText = `Title: ${books[i].title}`;
        author.innerText = `Author: ${books[i].author}`;
        stock.innerText = `Stock: ${books[i].stock}`;
        price.innerText = `Price: ${books[i].price}`;

        booksElement.appendChild(section);
        
    }
}


function addBook(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let stock = document.getElementById('stock').value;
    let price = document.getElementById('price').value;
    
    let obj = {
        title:title,
        author:author,
        stock:stock,
        price:price
    }

    books.push(obj);
    booksElement.innerHTML ="";
    loadBooks();

}
