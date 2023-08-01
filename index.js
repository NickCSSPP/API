const express = require('express');
const app = express();

app.use(express.json());

// Array for Book Database
const books = [{
    id: 1,
    book: 'The Great Gatsby'
},
{
    id: 2,
    book: '1984'
},
{
    id: 3,
    book: 'Pride and Prejudice'
},
{
    id: 4,
    book: 'The Hobbit'
},
{
    id: 5,
    book: 'The Lord of the Rings: The Fellowship of the Ring'
},
{
    id: 6,
    book: 'Brave New World'
},
{
    id: 7,
    book: 'The Metamorphosis'
},
{
    id: 8,
    book: 'Do Androids Dream of Electric Sheep?'
},
{
    id: 9,
    book: 'Faust'
},
{
    id: 10,
    book: 'The Odyssey'
}];

// Get all books
app.get('/api/books', (req, res)=> {
    res.send(books);
});
// Configuration
const port = process.env.port || 6001;
app.listen(port,()=> console.log('Listening on port ${port}'));