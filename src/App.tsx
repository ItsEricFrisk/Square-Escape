import Canvas from "./components/canvas/Canvas.tsx"
import { Instructions } from "./components/instructions/Instructions.tsx"
function App() {

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <Instructions />
      <Canvas />
    </main>
  )
}

export default App
