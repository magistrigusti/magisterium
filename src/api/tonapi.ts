// src/api/tonapi.ts

const API_KEY = import.meta.env.VITE_TON_API_KEY; // ключ из .env
const BASE_URL = "https://tonapi.io/v2";

export async function getJettonsList() {
  const res = await fetch(`${BASE_URL}/jettons`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res.json();
}

export async function getJettonData(address: string) {
  const res = await fetch(`${BASE_URL}/jettons/${address}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res.json();
}
