import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs,deleteDoc,doc } from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';
import { db } from '../../config/Firebase'; 

const UltimateFrishbee = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

//   // Initialize Firebase only if it hasn't been initialized yet
//   if (!getApps().length) {
//     initializeApp(firebaseConfig);
//   }

  const firestore = getFirestore();
  const scheduleRef = collection(firestore, 'Ultimate-Frishbee');

  // Fetch match data
  const getMatchesList = async () => {
    try {
      const data = await getDocs(scheduleRef);
      if (!data.empty) {
        const matchesData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMatches(matchesData);
      } else {
        console.log('No matches found');
      }
    } catch (err) {
      console.error('Error fetching matches:', err);
      setError('Error fetching matches');
    }
  };

  useEffect(() => {
    getMatchesList();
  }, []);

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  const deleteMatch = async (id) => {
    try {
      const matchDoc = doc(db, "Ultimate-Frishbee", id); // Get document reference by id
      await deleteDoc(matchDoc); // Delete document from Firestore

      // Immediately update the state to reflect the deletion
      setMatches((prevMatches) => prevMatches.filter((match) => match.id !== id));
    } catch (err) {
      console.error('Error deleting match:', err);
    }
  };

  return (
    <>
    <div className="backgroundImage">
          <img className="w-[100%] h-[100%] " src="commonbg.webp" alt="" />
      </div>
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-center text-2xl font-bold mb-6 text-amber-700">Ultimate-Frishbee Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.length > 0 ? (
          matches.map((match) => (
            <div
              key={match.id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105 transform duration-300 ease-in-out mb-6"
            >
              {/* Match Date, Day, and Time */}
              <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                <span className="font-medium">Date: {match.Date}</span>
                {/* <span className="font-medium">Day: {match.Day}</span> */}
                <span className="italic text-gray-500">Time: {match.Timings}</span>
              </div>
          
              {/* Teams vs Display */}
              <div className="text-2xl font-bold text-center mb-2">
                <span className="text-blue-600">{match.Team1}</span> 
                <span className="text-gray-600"> vs </span>
                <span className="text-red-600">{match.Team2}</span>
              </div>
          
              {/* Venue */}
              <div className="text-center text-gray-500 text-sm mb-4">
                Venue: <span className="font-semibold text-gray-700">{match.Venue}</span>
              </div>
          
              {/* Winner */}
              {match.Winner && (
                <div className="text-center text-lg font-semibold text-green-600">
                  Winner: <span>{match.Winner}</span>
                </div>
              )}

<div className='rounded'>
                <button 
                  onClick={() => deleteMatch(match.id)} 
                  className="bg-red-500 text-white p-2 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-amber-700">No matches scheduled.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default UltimateFrishbee;
