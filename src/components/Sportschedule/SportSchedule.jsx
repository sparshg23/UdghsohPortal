import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/Firebase'; // Ensure Firebase config is imported

const SportSchedule = () => {
  const { sport } = useParams(); // Get sport from the route parameter
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  // Reference to Firestore collection based on sport
  const scheduleRef = collection(db, sport);

  // Fetch match data in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(scheduleRef, (snapshot) => {
      if (!snapshot.empty) {
        const matchesData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMatches(matchesData);
      } else {
        console.log('No matches found for', sport);
        setMatches([]); // Reset the matches state if no matches found
      }
    }, (err) => {
      console.error('Error fetching matches:', err);
      setError('Error fetching matches');
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [sport]);

  // Handle match deletion
  const deleteMatch = async (id) => {
    try {
      const matchDoc = doc(db, sport, id); // Reference to the document by sport and id
      await deleteDoc(matchDoc); // Delete document from Firestore

      // Update state to reflect deletion
      setMatches((prevMatches) => prevMatches.filter((match) => match.id !== id));
    } catch (err) {
      console.error('Error deleting match:', err);
    }
  };

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-center text-2xl font-bold mb-6">{sport} Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.length > 0 ? (
          matches.map((match) => (
            <div
              key={match.id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105 transform duration-300 ease-in-out mb-6"
            >
              <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                <span className="font-medium">Date: {match.Date}</span>
                <span className="italic text-gray-500">Time: {match.Timings}</span>
              </div>
              <div className="text-2xl font-bold text-center mb-2">
                <span className="text-blue-600">{match.Team1}</span> 
                <span className="text-gray-600"> vs </span>
                <span className="text-red-600">{match.Team2}</span>
              </div>
              <div className="text-center text-gray-500 text-sm mb-4">
                Venue: <span className="font-semibold text-gray-700">{match.Venue}</span>
              </div>
              {match.Winner && (
                <div className="text-center text-lg font-semibold text-green-600">
                  Winner: <span>{match.Winner}</span>
                </div>
              )}
              <div className="rounded">
                <button 
                  onClick={() => deleteMatch(match.id)} 
                  className="bg-red-500 text-white p-2 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No matches scheduled for {sport}.</p>
        )}
      </div>
    </div>
  );
};

export default SportSchedule;
