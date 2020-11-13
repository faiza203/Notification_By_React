import {initNotification} from './service/firebase-service'
function App() {
  return (
    <div className="App">
  <h1>Notifications from Firebase</h1>
  <button onClick={initNotification} className="btn btn-outline-danger">Take Notification</button>
    </div>
  );
}

export default App;
