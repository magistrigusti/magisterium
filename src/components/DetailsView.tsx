import { Button, ButtonGroup } from "@heroui/button";

type Props = {};

function DetailsView({}: Props) {
  return (
    <>
      {/* Filters */}
        <div className="flex-gap-5 justify-end">
          <ButtonGroup variant='bordered' color="primary" className="my-auto">
            <Button onPress={() => {}}>1d</Button>

            <Button onPress={() => {}}>3d</Button>

            <Button onPress={() => {}}>7d</Button>

            <Button onPress={() => {}}>30d</Button>

            <Button onPress={() => {}}>1y</Button>
          </ButtonGroup>

          <div className="my-auto text-white font-bold">Bitcoin</div>
          <div className="my-auto text-white font-bold">Ethereum</div>
          <div className="my-auto text-white font-bold">Toncoin</div>
        </div>
      {/* Chart */}
      <div className="mx-auto w-full min-h-96">
        
      </div>

      {/* Details */}
    </>
  )
}

export default DetailsView;