import init, {
  add
} from '../wasm/pkg/wasm_prototype.js'

import { useState } from 'react'

await init()

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div className="bg-slate-900 h-screen text-slate-200 px-2 text-center pt-64">

      <h1 className="font-bold text-4xl mb-2">WASM Sandbox</h1>
      <section className="flex gap-1">
        <div className="bg-slate-800 p-2 rounded my-4 mx-8 flex-1">
          <p className='text-xs font-bold'>Count 1</p>
          <button className='text-lg font-bold' onClick={() => setCount1((count1) => count1 + 1)}>
            {count1}
          </button>
        </div>
        <div className="bg-slate-800 p-2 rounded my-4 mx-8 flex-1">
          <p className='text-xs font-bold'>Count 2</p>
          <button className='text-lg font-bold' onClick={() => setCount2((count2) => count2 + 1)}>
            {count2}
          </button>
        </div>
      </section>
      
      <div className="bg-slate-800 p-2 rounded my-4 mx-8">
        <h2 className='text-lg font-bold'>WASM Add function</h2>
        <p className='text-xs font-light mb-1'>Count 1 + count 2</p>
        <strong className="font-bold text-4xl mb-4 block">
          {add(count1, count2)}
        </strong>
      </div>
      <p className="font-light text-xs px-8 text-slate-400">
        This output is generated by a funtion built with RUST and compiled to a WASM module
      </p>
    </div>
  )
}

export default App
