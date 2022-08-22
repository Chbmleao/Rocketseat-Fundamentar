// EXERCÍCIO 3 - Buscando e contando dados em Arrays

/*

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

    - Contar o número de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - Mostrar livros do autor Auguto Cury
    - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

function countCategoriesAndBooks() {
    console.log(`O Array possui ${booksByCategory.length} categorias.`)
    for(category of booksByCategory) {
        console.log(`A categoria ${category.category} possui ${category.books.length} livros.`)
    }
}

function countWriters() {
    let authors = []

    for(category of booksByCategory) {
        for(book of category.books) {
            if(!authors.includes(book.author))
                authors.push(book.author)
        }
    }

    console.log(`O Array possui ${authors.length} autores.`)
}

function booksOfAuthor(searchedAuthor) {
    let books = []

    for(category of booksByCategory) {
        for(book of category.books) {
            if(book.author == searchedAuthor)
                books.push(book.title)
        }
    }

    console.log(`Livros de ${searchedAuthor}: ${books.join(", ")}`)
}


countCategoriesAndBooks()
countWriters()
booksOfAuthor("Stephen R. Covey")