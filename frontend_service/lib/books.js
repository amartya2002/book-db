import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getAllBooks() {
  const response = await axios.get(`${apiUrl}/books`);
  return response.data;
}

export async function getBookById(id) {
  const response = await axios.get(`${apiUrl}/books/${id}`);
  return response.data;
}

