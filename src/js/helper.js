import { DatabaseClass } from 'lmdb';

export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    //   `${API_URL}/${id}`
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}(${res.status})`);
    return data;
  } catch (err) {
    console.err(`${err} generated error`);
  }
};
