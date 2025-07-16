import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🚗 EVCharge Finder Test</h1>
      <p>Eğer bunu görüyorsanız, React uygulaması çalışıyor!</p>
      <button onClick={() => alert('Tıklama çalışıyor!')}>
        Test Butonu
      </button>
    </div>
  );
}

export default App;