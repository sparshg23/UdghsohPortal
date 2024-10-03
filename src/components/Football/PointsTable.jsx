import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const PointsTable = () => {
  const [pointsTable, setPointsTable] = useState([]);
  const [error, setError] = useState(null);

  const firestore = getFirestore();
  const pointsTableDoc = doc(firestore, 'PointsTable', 'm8xDDa9OAnUf7uD44S0A'); // Ensure this ID is correct

  const fetchPointsTable = async () => {
    try {
      const docSnap = await getDoc(pointsTableDoc);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());  // Debug: Log document data
        const data = docSnap.data();
        const sortedPoints = Object.entries(data).sort(([, a], [, b]) => b - a); // Sort in descending order
        setPointsTable(sortedPoints);
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.error('Error fetching points table:', err);
      setError('Error fetching points table');
    }
  };

  useEffect(() => {
    fetchPointsTable();
  }, []);

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Points Table</h2>
      {pointsTable.length > 0 ? (
        <ul>
          {pointsTable.map(([team, points]) => (
            <li key={team} className="text-lg">
              {team}: {points} points
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">No data available</p>
      )}
    </div>
  );
};

export default PointsTable;
