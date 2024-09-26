import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const Forecasting = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [forecastedEggs, setForecastedEggs] = useState(null);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('csvData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('csvData', JSON.stringify(data));
    }
  }, [data]);

  // Handle file upload
  const handleFileUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
          setError('');
        },
        error: () => {
          setError('Error parsing CSV file');
        },
      });
    }
  };

  // Handle drag and drop file
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
          setError('');
        },
        error: () => {
          setError('Error parsing CSV file');
        },
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle editing of the data
  const handleEdit = (rowIndex, colKey, value) => {
    const updatedData = data.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, [colKey]: value };
      }
      return row;
    });
    setData(updatedData);
  };

  // Simulate forecasting (this is a placeholder, replace with actual forecast logic)
  const forecastEggs = () => {
    const totalEggs = data.reduce((sum, row) => sum + (parseInt(row['Number of Eggs'], 10) || 0), 0);
    setForecastedEggs(totalEggs + Math.floor(Math.random() * 100)); // Simulate forecast
  };

  // Remove the uploaded data and clear from localStorage
  const handleRemoveData = () => {
    setData([]);
    setForecastedEggs(null);
    localStorage.removeItem('csvData');
  };

  return (
    <div className="p-8 h-full">
      <h2 className="text-2xl mb-4">Forecasting</h2>
      <div
        className="border-dashed border-4 border-gray-300 p-8 rounded-lg mb-4 cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="hidden"
          id="csv-upload"
        />
        <label htmlFor="csv-upload" className="flex flex-col items-center cursor-pointer">
          <span className="text-gray-600 mb-2">Drag and drop your CSV file here</span>
          <span className="text-blue-500">or click to upload</span>
        </label>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {data.length > 0 && (
        <>
          <div className="mb-4 h-60 overflow-y-auto">
            <h3 className="text-xl mb-2">Uploaded Data:</h3>
            <div className="overflow-y-auto border border-gray-300 rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {data[0] && Object.keys(data[0]).map((key) => (
                      <th key={key} className="border border-gray-300 p-2 bg-gray-100">{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.entries(row).map(([colKey, value], idx) => (
                        <td
                          key={idx}
                          className="border border-gray-300 p-2"
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => handleEdit(rowIndex, colKey, e.target.textContent)}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button
            className="bg-green-500 text-white p-2 rounded mr-2"
            onClick={forecastEggs}
          >
            Forecast Duck Eggs
          </button>

          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={handleRemoveData}
          >
            Remove Data
          </button>

          {forecastedEggs !== null && (
            <div className="mt-4">
              <h3 className="text-lg text-blue-600">Forecasted Total Number of Duck Eggs: {forecastedEggs}</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Forecasting;
