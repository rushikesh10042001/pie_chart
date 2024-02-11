import { Chart } from 'chart.js/auto';

export interface PieChartData {
  label: string;
  value: number;
}

export function createPieChart(container: HTMLCanvasElement, data: PieChartData[]): void {
  const labels = data.map(item => item.label);
  const values = data.map(item => item.value);

  const ctx = container.getContext('2d');
  if (!ctx) {
    console.error('Failed to get canvas context');
    return;
  }

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Pie Chart'
        }
      }
    }
  });
}
