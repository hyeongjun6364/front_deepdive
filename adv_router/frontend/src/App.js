import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetailPage';
import NewEventPage, {action as newEventAction} from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';
import EventRootsLayout from './pages/EventRoot';
import ErrorPage from './pages/Error';
const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    { path: '/', element: <HomePage /> },
    {
      path: '/events', element: <EventRootsLayout />,
      children: [
        { path: '/events', element: <EventsPage />, loader: eventsLoader },
        {
          path: '/events/:eventId',
          id: 'event-detail',
          loader: eventDetailLoader,
          children:
          [
            {
              index: true,
              element: <EventDetailPage />,
              
            },
            { path: '/events/:eventId/edit', element: <EditEventPage /> }
          ],
          
        },
        { path: '/events/new', element: <NewEventPage />, action: newEventAction},
      ]
    },

  ],
}])

function App() {
  return <RouterProvider router={router} />
}

export default App;
