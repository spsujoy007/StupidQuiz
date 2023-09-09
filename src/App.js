import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    // <div className="bg-[#deefff] h-screen mainwork">
    <div className=" min-h-[100vh] mainwork bg-[#0f172a]">
      <div className=''>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
