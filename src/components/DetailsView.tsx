import { Button, ButtonGroup } from "@heroui/button";
import MarketChart from "./MarketChart";

type Props = {};

function DetailsView({ }: Props) {
  return (
    <>
      {/* Filters */}
      <div className="flex gap-5 justify-end">
        <ButtonGroup variant='bordered' color="primary" className="my-auto">
          <Button onPress={() => { }}>1d</Button>

          <Button onPress={() => { }}>3d</Button>

          <Button onPress={() => { }}>7d</Button>

          <Button onPress={() => { }}>30d</Button>

          <Button onPress={() => { }}>1y</Button>
        </ButtonGroup>

        <div className="my-auto text-white font-bold">Bitcoin</div>
        {/* <div className="my-auto text-white font-bold">Ethereum</div>
          <div className="my-auto text-white font-bold">Toncoin</div> */}
      </div>
      {/* Chart */}
      <div className="mx-auto w-full min-h-96">
        <MarketChart series={[
          [1704887002, 12000],
          [1704888702, 11200],
          [1704889702, 11500],
          [1704890702, 12500],
          [1704891702, 11000],
        ]} />

      </div>

      {/* Details */}
      <div className="flex flex-col md:flex-row flex-wrap gap-2 flex-grow mx-auto">
        <div className="bg-indigo-900 bg-opacity-10 w-full md:w-52 p-3 space-y-4 
          rounded-2xl h-fit text-indigo-300"
        >
          <div className="opacity-70">Current Price</div>

          <div className="flex w-full justify-between">
            <div className="text-white">
              102000$
            </div>

            {/* <PriceChange24h /> */}
          </div>
        </div>

        <div className="bg-indigo-900 bg-opacity-10 w-full md:w-52 p-3 space-y-4
          rounded-2xl h-fit text-indigo-300"
        >
          <div className="opacity-70">
            Low 24hr
          </div>

          <div className="flex w-full justify-between">
            <div className="text-white">100000$</div>
          </div>
        </div>

        <div className="bg-indigo-900 bg-opacity-10 w-full md:w-52 p-3 space-y-4
          rounded-2xl h-fit text-indigo-300"
        >
          <div className="opacity-70">
            Hight 24hr
          </div>

          <div className="flex w-full justify-between">
            <div className="text-white">120000$</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsView;