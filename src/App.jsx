import { useState, useEffect } from "react";

export default function App() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  // Write a function that fetches data from the API 
  // API : https://uselessfacts.jsph.pl/random.json?language=en
  // use fetch (), .then(res => res.json()), .then(data => ...)
  const fetchFact = () => {
    // TODO: write fetch logic here
  };

  useEffect(() => {
    // TODO : call fetchFact()

  }, []);

  return (<div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h2>🧠 Random Fact Generator</h2>
      {loading ? <p>Loading...</p> : <p>{fact}</p>}
      <button
        onClick={fetchFact}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          background: "#4e89ff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Get Another Fact
      </button>
    </div>
  );
    
  
}
