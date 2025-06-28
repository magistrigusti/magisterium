// src/components/TokenDashboard.tsx
import React, { useEffect, useState } from "react";
import { getJettonsList, getJettonData } from "../../api/tonapi";

export default function TokenDashboard() {
  const [jettons, setJettons] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    getJettonsList().then((data) => setJettons(data.jettons || []));
  }, []);

  useEffect(() => {
    if (selected) {
      getJettonData(selected).then((data) => setDetails(data));
    }
  }, [selected]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Выбор монеты */}
      <select
        className="p-2 rounded mb-6 bg-gray-900 text-white"
        value={selected || ""}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Выбери монету</option>
        {jettons.map((j) => (
          <option key={j.address} value={j.address}>
            {j.symbol} — {j.name}
          </option>
        ))}
      </select>

      {/* Данные по монете */}
      {details && (
        <div className="bg-indigo-900/20 rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <div className="font-bold text-xl mb-1">{details.name} ({details.symbol})</div>
              <div className="mb-2 opacity-60">{details.address}</div>
              <div>Циркуляция: <b>{details.total_supply / 10 ** details.decimals}</b></div>
              <div>Десятичные: {details.decimals}</div>
            </div>
            <div>
              <div>Холдеры: <b>{details.holders_count}</b></div>
              <div>Оборот: <b>{details.total_transactions}</b></div>
              {/* Добавь остальные поля, что TonAPI даёт */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
