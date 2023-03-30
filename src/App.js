import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='text-white bg-gradient-to-tl from-gray-950 via-gray-800 to-gray-950 min-h-screen'>
      <RouterProvider router={router} ></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
