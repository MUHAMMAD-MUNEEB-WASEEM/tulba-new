import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className='bg-red-100 m-8 p-8 rounded-lg shadow-md'>
        <div className='text-red-800 text-4xl font-extrabold p-4'>Welcome to</div>
        <div className='text-lg pb-4 uppercase'>My Metrimony</div>
      </div>
      <div className='bg-red-100 m-8 p-8 rounded-lg shadow-md height-full text-left'>
        <h1 className='text-xl font-bold pb-4'>Hello from the App!</h1>
        <ol className='text-lg'>
          <li>1. Both Backend and front-end stubs created</li>
          <li>2. Backend logging (during development) in place</li>
          <li>3. Body Parser Configured</li>
          <li>4. Cookie Parser Configured</li>
          <li>5. CORS configured</li>
          <li>6. API request rate configured (20K requests allowed per hour)</li>
          <li>7. XSS attacks (Security) taken care of</li>
          <li>8. Request size (Compression) taken care of</li>
          <li>9. Dev DB Configured</li>
          <li>10. Deployment DB can be passed anytime through heroku enviroment variables</li>
          <li>11. Repo Created and push to Github</li>
          <li>12. Granted you access to git repo!</li>
          <li>13. App deployed to heroku</li>
          <li>14. Welcome page displayed live.</li>
          <li>15. Centralized Error Handling taken care of</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
