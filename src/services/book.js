import api from '../plugins/axios';

function fetchBook() {
  return api.get('/books');
}

function createBook(data) {
  return api.post('/books', data);
}

function updateBook(id, data) {
  return api.post(`/books/${id}`, data);
}

function deleteBook(id) {
  return api.delete(`/books/delete/${id}`);
}

export default { fetchBook, createBook, updateBook, deleteBook };
