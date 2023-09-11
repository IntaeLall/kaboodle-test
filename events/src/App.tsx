import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CreateEventPage from './pages/CreateEventPage';
import EventListPage from './pages/EventListPage';
import EventPage from './pages/EventPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEventPage />} />
          <Route path="/events/:eventId" element={<EventPage/>} /> 
          <Route path="/events" element={<EventListPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
