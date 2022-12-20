import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const handleClick = e => {
    setResult(result.concat(e.target.value));
  }

  const clear = () => {
    setResult("");
  }
  const backSpace = () => {
    setResult(result.slice(0, - 1))
  }
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <div className="App">
      <div className='max-w-sm mx-auto mt-20 border border-gray-500 bg-slate-900 rounded-lg'>


        <div className='px-4'>
          <input type="text" name="" id="" className='w-full h-20 mt-4 px-3 rounded disabled select-disabled bg-transparent border border-cyan-900 text-end text-3xl tracking-wide font-semibold' value={result} />
        </div>

        <div className='grid grid-cols-2 gap-5 m-6'>
          <button className="btn hover:bg-cyan-600 hover:border-none bg-cyan-700 text-black"
            value={'9'}
            onClick={clear}
          >Clear
          </button>
          <button className="btn bg-cyan-700 hover:bg-cyan-600 hover:border-none text-black"
            value={'9'}
            onClick={backSpace}
          >BackSpace
          </button>
        </div>

        <div className='grid grid-cols-4 gap-5 m-6'>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'9'}
            onClick={handleClick}
          >9
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'8'}
            onClick={handleClick}
          >8
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'7'}
            onClick={handleClick}
          >7
          </button>
          <button className="btn bg-cyan-700 hover:bg-cyan-600 hover:border-none text-black"
            value={'/'}
            onClick={handleClick}
          >/
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'6'}
            onClick={handleClick}
          >6
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'5'}
            onClick={handleClick}
          >5
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'4'}
            onClick={handleClick}
          >4
          </button>
          <button className="btn bg-cyan-700 hover:bg-cyan-600 hover:border-none text-black"
            value={'*'}
            onClick={handleClick}
          >x
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'3'}
            onClick={handleClick}
          >3
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'2'}
            onClick={handleClick}
          >2
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'1'}
            onClick={handleClick}
          >1
          </button>
          <button className="btn bg-cyan-700 hover:bg-cyan-600 hover:border-none text-black"
            value={'-'}
            onClick={handleClick}
          >-
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'0'}
            onClick={handleClick}
          >0
          </button>
          <button className="btn btn-outline hover:bg-cyan-600 hover:border-none"
            value={'.'}
            onClick={handleClick}
          >.
          </button>
          <button className="btn bg-cyan-700 hover:bg-cyan-600 hover:border-none text-black"
            value={'='}
            onClick={calculate}
          >=
          </button>
          <button className="btn bg-cyan-700 hover:bg-cyan-600 hover:border-none text-black"
            value={'+'}
            onClick={handleClick}
          >+
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
