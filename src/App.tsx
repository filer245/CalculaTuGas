
import GasForm from './components/gasForm';

function App() {

  

  return (
    <>
      <div className='w-dvw flex flex-col items-center justify-center px-10'>
        <p className="xl:text-6xl font-bold md:mb-50 mb-10 text-xl">
          Calcula tu gasto en Gasolina
        </p>
        <div className='flex flex-row justify-between items-center md:px-50 w-dvw'>
          <img src="gas.png" alt="Gasolina" className='md:w-96 w-0 h-auto'/>

          <GasForm />

          <img src="gas.png" alt="Gasolina" className='md:w-96 w-0 h-auto'/>
        </div>
      </div>
    </>
  )
}

export default App
