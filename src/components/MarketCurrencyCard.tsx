import { Button } from "@heroui/button";
import PriceChange24h from "./PriceChange24h";
import { IoPulse } from "react-icons/io5";

type Props = {
  id: string,
  image: string,
  name: string,
  currentPrice: number,
  changeIn24h: number,
  chardData: { x: number; y: number}[],
};

function MarketCurrencyCard({
  id, image, name, currentPrice, changeIn24h, chardData
}: Props) {
  return (
    <div className="bg-indigo-900 bg-opacity-10 w-full p-5 rounded-2xl flex flex-col h-80 text-indigo-300">
      {/* Image and Name */}
      <div className="flex gap-3">
        <div>
          <img className="rounded-full w-12 h-12"
            src={image}
            alt={name}
          />
        </div>

        <div className="font-bold my-auto text-white text-xl">{name}</div>
      </div>

      {/* Chart */}
      <div className="ml-auto">
        {/* <CardChart /> */}
      </div>

      {/* Price Change */}
      <div className="flex justify-between">
        <div className="mt-auto h-fit">
          <PriceChange24h changePrice={32} />

          <div className="text-white text-xl lg:text-4xl">
            ${currentPrice.toLocaleString()}
          </div>
        </div>

        <Button className="mt-auto"
          variant="faded"
          onPress={() => {}}
        >
          <IoPulse />Details
        </Button>
      </div>
    </div>
  )
}

export default MarketCurrencyCard;