import { COLORS } from "@/constants";
import Chart from "react-apexcharts";
import moment from "moment"; // Не забудь импортировать

type Props = {
  series: number[][]; // [[timestamp, value], ...]
};

const options = {
  chart: {
    toolbar: { show: false },
    type: 'line',
    zoom: { enabled: false }
  },
  stroke: {
    curve: 'smooth',
    width: 3,
    lineCap: 'round',
    colors: COLORS.primary
  },
  grid: { show: false },
  yaxis: {
    labels: {
      offsetX: -10,
      style: { colors: '#777' },
      formatter: (value: number) => '$' + value.toLocaleString(),
    }
  },
  xaxis: {
    type: 'datetime', // <--- Вот тут!
    axisTicks: { color: '#777' },
    axisBorder: { color: '#777' },
    labels: {
      style: { colors: '#777' },
      formatter: (value: number) => moment(value).format('YYYY-MM-DD'),
    }
  }
};

function MarketChart({ series }: Props) {
  // Если приходят timestamp в секундах, переводим в миллисекунды:
  const data = series.map(([x, y]) => [x * 1000, y]);
  return (
    <div>
      <Chart
        options={options}
        width={500}
        height={450}
        series={[{ data }]}
        type="line" // <- обязательно!
      />
    </div>
  );
}

export default MarketChart;
