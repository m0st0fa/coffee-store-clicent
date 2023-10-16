import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const Loadedcoffees = useLoaderData();
  const[coffees, setCoffees] = useState(Loadedcoffees)


  return (
    <div className=' max-w-5xl mx-auto'>
      <h1 className=' text-4xl text-center my-4 text-rose-900'>Hot hot coffee:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-3'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
