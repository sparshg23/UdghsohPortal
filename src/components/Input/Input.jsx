import React, { useState, useEffect } from 'react';
import { db } from "../../config/Firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const Input = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // Success notification state

  const [sport, setSport] = useState(""); // State for selected sport
  const [Team1, setTeam1] = useState("");
  const [Team2, setTeam2] = useState("");
  const [Date, setDate] = useState("");
  const [Winner, setWinner] = useState("");
  const [Timings, setTimings] = useState("");
  const [Venue, setVenue] = useState("");

  const getMatchesList = async () => {
    if (!sport) return; // Prevent fetching if no sport is selected
    try {
      const sportCollectionRef = collection(db, sport); // Use selected sport for collection
      const data = await getDocs(sportCollectionRef);
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
    getMatchesList(); // Fetch matches whenever sport changes
  }, [sport]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    if (!sport) {
      alert('Please select a sport');
      return;
    }
    try {
      const sportCollectionRef = collection(db, sport); // Use selected sport for collection
      await addDoc(sportCollectionRef, {
        Team1: Team1,
        Team2: Team2,
        Date: Date,
        Timings: Timings,
        Venue: Venue,
        Winner: Winner,
      });
      getMatchesList(); // Refresh the match list after adding

      // Show success notification
      setSuccess(true);
      
      // Hide the success notification after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      
    } catch (err) {
      console.error('Error adding match:', err);
    }
  };

  return (
    <div className="relative">
      {/* Success notification */}
      {success && (
        <div className="absolute top-0 left-0 right-0 mx-auto mt-4 w-72 bg-green-500 text-white p-4 rounded-lg shadow-lg text-center z-50">
          Match added successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-lg mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
        {/* Dropdown for sport selection */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Select Sport:</label>
          <select 
            onChange={(e) => setSport(e.target.value)} 
            value={sport} 
            className="p-2 border rounded-md bg-white">
            <option value="" disabled>Select Sport</option>
            <option value="Football">Football</option>
<option value="Cricket">Cricket</option>
<option value="Basketball">Basketball</option>
<option value="Volleyball">Volleyball</option>
<option value="Hockey">Hockey</option>
<option value="Chess">Chess</option>
<option value="Badminton">Badminton</option>
<option value="Kabaddi">Kabaddi</option>
<option value="Lawn-Tennis">Lawn-Tennis</option>
<option value="Ultimate-Frishbee">Ultimate-Frishbee</option>
<option value="Kho-Kho">Kho-Kho</option>
<option value="Squash">Squash</option>
<option value="Table-Tennis">Table-Tennis</option>

            
          </select>
        </div>

        {/* Team Inputs */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-lg font-medium">Team 1:</label>
            <input
              type='text'
              placeholder='Team 1'
              onChange={(e) => setTeam1(e.target.value)}
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-lg font-medium">Team 2:</label>
            <input
              type='text'
              placeholder='Team 2'
              onChange={(e) => setTeam2(e.target.value)}
              className="p-2 border rounded-md"
            />
          </div>
        </div>

        {/* Date, Timings, Venue */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Date:</label>
          <input
            type='text'
            placeholder='Date'
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Timings:</label>
          <input
            type='text'
            placeholder='Timings'
            onChange={(e) => setTimings(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Venue:</label>
          <input
            type='text'
            placeholder='Venue'
            onChange={(e) => setVenue(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        {/* Winner */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Winner:</label>
          <input
            type='text'
            placeholder='Winner'
            onChange={(e) => setWinner(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        <button 
          type='submit' 
          className="bg-amber-400 text-white py-2 rounded-md shadow-lg hover:bg-amber-500">
          Submit Match
        </button>
      </form>
    </div>
  );
};

export default Input;
