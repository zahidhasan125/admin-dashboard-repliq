import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='text-white bg-gradient-to-r from-gray-950 from-40% via-gray-700 to-60% to-gray-950 min-h-screen'>
      <RouterProvider router={router} ></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
