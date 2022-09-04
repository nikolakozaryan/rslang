import React, { useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, ChartOptions, ChartData, ChartArea, Color } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { ru } from 'date-fns/locale';

interface IChartProps {
  wordCount: { x: string; y: number }[];
}

const titleFont = {
  family: 'Gilroy',
  style: 'normal' as const,
  weight: '500',
  size: 18,
  lineHeight: '22px',
};

const titleSettings = {
  display: true,
  color: '#082143',
  font: titleFont,
  padding: 20,
};

const ticksFont = {
  family: 'Gilroy',
  size: 18,
  lineHeight: '22px',
};

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxis: {
      adapters: {
        date: {
          locale: ru,
        },
      },
      type: 'time',
      time: {
        unit: 'day',
      },
      title: {
        text: 'Период изучения',
        ...titleSettings,
      },
      ticks: {
        color: '#A4A4A4',
        font: ticksFont,
      },
    },
    yAxis: {
      title: {
        text: 'Количество слов',
        ...titleSettings,
      },
      ticks: {
        color: '#A4A4A4',
        font: ticksFont,
      },
    },
  },
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = 'rgba(255, 207, 11, 0)';
  const colorEnd = '#FFCF0B';

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0.0179, colorStart);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

const Chart: React.FC<IChartProps> = ({ wordCount }) => {
  const chartRef = useRef<ChartJS<'line', IChartProps['wordCount']>>(null);
  const [gradient, setGradient] = useState<Color>('rgba(255, 207, 11, 0)');

  useEffect(() => {
    if (chartRef.current) {
      setGradient(createGradient(chartRef.current.ctx, chartRef.current.chartArea));
    }
  }, []);

  const data: ChartData<'line', IChartProps['wordCount']> = {
    datasets: [
      {
        fill: true,
        data: wordCount,
        borderColor: '#FFCF0B',
        backgroundColor: gradient,
      },
    ],
  };

  return <Line ref={chartRef} options={options} data={data} />;
};

export default Chart;
