import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler,
} from "chart.js"
import { Bar, Line } from "react-chartjs-2"
import { useMemo } from "react";
import { useCounterStore } from '../store/useCounterStore'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler,
)

/* Chart.js' own defaults are heavy for a dashboard card: boxed legend swatches,
   a grid on both axes, a tooltip that only fires when the cursor lands exactly
   on a point, and raw unformatted numbers up the axis. Everything below is the
   chart's chrome — the datasets themselves (colours, gradients, point styling)
   still come from whichever screen renders the chart. */

const GRID_LINE = 'rgba(17, 24, 39, 0.06)';
const TICK_TEXT = '#9ca3af';
const LEGEND_TEXT = '#4b5563';

/*
  A flat 340px was too tall for a phone: the card took most of the screen while
  the plot still had to squeeze a month of dates into 340px of width. The
  height steps up with the viewport instead, and `height` is still honoured
  when a caller passes an explicit number.
*/
const HEIGHT_CLASSES = "h-56 sm:h-72 lg:h-[340px]";

export default function ChartComponent({ chartData, height }) {

  /* Both screens that use this chart plot money, so values read like the KPI
     cards do: grouped to two decimals, with the store's symbol on the side
     `currencyPosition` asks for. */
  const { currencySymbole, currencyPosition, privacyMode } = useCounterStore()

  /* The data used to be mirrored into state through an effect, so the first
     paint showed the placeholder "Dataset 1 / Dataset 2" series at 500 and 300
     before the real numbers arrived. Reading the prop directly drops that. */
  var labels = chartData?.labels ?? [];
  var datasets = chartData?.datasets ?? [];
  var data = { labels: labels, datasets: datasets };

  var hasData = labels.length > 0 && datasets.length > 0;

  const options = useMemo(() => {

    function formatValue(value, compact) {

      var amount = Number(value);

      if (!isFinite(amount)) {
        return '';
      }

      var text = compact
        ? new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 1 }).format(amount)
        : amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      return currencyPosition == 'before' ? `${currencySymbole}${text}` : `${text} ${currencySymbole}`;
    }

    return {
      responsive: true,

      /* Height comes from the wrapper instead of being derived from the width.
         The default 2:1 aspect ratio made the chart around 450px tall in a
         wide card and cramped it in a narrow one. */
      maintainAspectRatio: false,

      /* Hovering anywhere over the plot now reports every series for that date
         at once, rather than needing a hit on each individual point. */
      interaction: { mode: 'index', intersect: false },

      layout: { padding: { top: 4, right: 8 } },

      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 8,
            boxHeight: 8,
            padding: 16,
            color: LEGEND_TEXT,
            font: { size: 12, weight: '500' },
          },
        },

        /* The old options carried `title: { display: true, text: '' }`, which
           reserved a strip of empty space above the plot. */

        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: '#ffffff',
          titleColor: '#111827',
          titleFont: { size: 12, weight: '600' },
          bodyColor: LEGEND_TEXT,
          bodyFont: { size: 12 },
          borderColor: 'rgba(17, 24, 39, 0.1)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 10,
          usePointStyle: true,
          boxPadding: 6,
          callbacks: {
            label: (context) => ` ${context.dataset?.label ?? ''}: ${formatValue(context.parsed?.y)}`,
          },
        },
      },

      scales: {
        x: {
          border: { display: false },
          grid: { display: false },
          ticks: {
            color: TICK_TEXT,
            font: { size: 11 },
            maxRotation: 0,
            autoSkip: true,
            autoSkipPadding: 12,
          },
        },
        y: {
          beginAtZero: true,
          border: { display: false },
          grid: { color: GRID_LINE, drawTicks: false },
          ticks: {
            color: TICK_TEXT,
            font: { size: 11 },
            padding: 8,
            maxTicksLimit: 6,
            callback: (value) => formatValue(value, true),
          },
        },
      },
    };
  }, [currencySymbole, currencyPosition]);

  return (
    <div className="w-full ">

      {/* An empty range used to render a bare grid with no explanation. */}
      {!hasData && (
        <div
          className={`flex flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-gray-200 bg-gray-50/60 px-4 text-center ${height ? "" : HEIGHT_CLASSES}`}
          style={height ? { minHeight: height } : undefined}>
          <div className="text-sm font-medium text-gray-500">{("No chart data")}</div>
          <div className="text-xs text-gray-400">{("Nothing was recorded for the selected range.")}</div>
        </div>
      )}

      {hasData && (
        /* Privacy mode blurs the money on the stat cards, but the chart plotted
           the same figures in the clear, so it follows the toggle too. */
        <div
          className={`relative w-full ${height ? "" : HEIGHT_CLASSES} ${privacyMode ? "blur-[3px]" : ""}`}
          style={height ? { height: height } : undefined}>

          {/* <Bar options={options} data={data} /> */}
          <Line options={options} data={data} />

        </div>
      )}

    </div>
  )
}
