import DefaultLayout from "@/layouts/default";
// Для будущего подключения данных и графика:
import { useState } from "react";

export default function IndexPage() {
  // Заглушка выбранной монеты (потом подставишь из API)
  const [selectedToken, setSelectedToken] = useState({
    symbol: "TON",
    name: "Toncoin",
    price: "5.22",
    holders: "579,000",
    supply: "5,000,000,000",
  });

  // Здесь будет твой график
  // Например, компонент <TonPriceChart />

  return (
    <DefaultLayout>
      <section className="w-full max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Верхняя панель выбранной монеты */}
        <div className="w-full flex items-center justify-between bg-slate-800 rounded-2xl p-4">
          <div>
            <div className="text-lg font-bold text-white">{selectedToken.name}</div>
            <div className="text-sm text-slate-400">{selectedToken.symbol}</div>
          </div>
          <div className="text-3xl font-mono font-bold text-emerald-300">
            ${selectedToken.price}
          </div>
        </div>

        {/* График цены */}
        <div className="w-full bg-slate-900 rounded-2xl p-4 min-h-[400px] flex items-center justify-center">
          {/* Здесь будет твой график, например: */}
          {/* <TonPriceChart /> */}
          <span className="text-slate-500">[График будет здесь]</span>
        </div>

        {/* Детали монеты и блоки снизу */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-4 flex flex-col">
            <span className="text-slate-400 text-sm mb-1">Holders</span>
            <span className="text-white font-semibold">{selectedToken.holders}</span>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 flex flex-col">
            <span className="text-slate-400 text-sm mb-1">Total Supply</span>
            <span className="text-white font-semibold">{selectedToken.supply}</span>
          </div>
          {/* Здесь будут еще детали — добавь любые, например TVL, MarketCap и т.д. */}
          <div className="bg-slate-800 rounded-xl p-4 flex flex-col">
            <span className="text-slate-400 text-sm mb-1">Market Cap</span>
            <span className="text-white font-semibold">$15,000,000,000</span>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
