import axios from "axios";

export const FETCH_LIVROS = "FETCH_LIVROS";

const ROOT_WS_URL = 'http://localhost:3000';

export function fetchLivros() {
  const url = `${ROOT_WS_URL}/livros.json`;
  const request = axios.get(url);

  return {
    type: FETCH_LIVROS,
    payload: request
  };
}