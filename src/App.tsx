import { useEffect, useState } from "react";
import Canvas from "./components/canvas/Canvas.tsx";
import { Instructions } from "./components/instructions/Instructions.tsx";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      {isDesktop ? (
        <main className="w-screen h-screen flex flex-col items-center justify-center gap-10">
          <Instructions />
          <Canvas />
        </main>
      ) : (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 px-10">
          <h1 className="text-2xl font-bold">Sorry!</h1>
          <p className="text-lg text-center">This game is optimized for larger screens. Please switch to a bigger device.</p>
        </div>
      )}
    </>
  );
}

export default App;
