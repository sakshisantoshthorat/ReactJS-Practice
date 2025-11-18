import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const UserList = React.lazy(() => import('./UserList'));
const HomePage = () => (
  <div>
    <h2>Welcome to the Home Page</h2>
    <Link to="/users">Go to User List</Link>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
