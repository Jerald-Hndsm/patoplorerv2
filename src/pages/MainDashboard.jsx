import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // This will import all necessary components for Chart.js

const MainDashboard = () => {
  const [forecastingData, setForecastingData] = useState(() => {
    // Load data from localStorage or initialize as an empty array
    const savedData = localStorage.getItem('forecastingData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Number of Eggs',
      data: [],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: 2,
      fill: true,
    }],
  });

  useEffect(() => {
    // Process data for the chart
    const dates = forecastingData.map(row => row.date);
    const numberOfEggs = forecastingData.map(row => parseInt(row.numberOfEggs, 10));

    setChartData({
      labels: dates,
      datasets: [{
        label: 'Number of Eggs',
        data: numberOfEggs,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderWidth: 2,
        fill: true,
      }],
    });
  }, [forecastingData]);

  const latestData = forecastingData[forecastingData.length - 1] || {};

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium">Number of Eggs</h3>
          <p className="text-2xl font-bold">{latestData.numberOfEggs || 'N/A'}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium">Number of Ducks</h3>
          <p className="text-2xl font-bold">{latestData.numberOfDucks || 'N/A'}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium">Date</h3>
          <p className="text-2xl font-bold">{latestData.date || 'N/A'}</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-medium mb-4">Forecasting Graph</h3>
        <div className="h-80">
          <Line
            data={chartData}
            options={{
              scales: {
                x: {
                  ticks: {
                    stepSize: 100,
                    max: 1500,
                  },
                },
                y: {
                  type: 'linear',
                  position: 'left',
                  ticks: {
                    callback: (value) => `${value}`,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;