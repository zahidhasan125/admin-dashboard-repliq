import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';

function App() {
  return (
    <div className='text-white bg-gradient-to-bl from-cyan-900 via-sky-900 to-blue-900 min-h-screen'>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
