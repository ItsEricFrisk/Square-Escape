import { useEffect, useRef } from "react";
import { startGame } from "./Canvas";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const levelStatusRef = useRef<HTMLSpanElement>(null);
  const goalModalRef = useRef<HTMLDivElement>(null);
  const restartBtnRef = useRef<HTMLButtonElement>(null);
  const replayBtnRef = useRef<HTMLButtonElement>(null);
  const attemptsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (
      canvasRef.current &&
      levelStatusRef.current &&
      goalModalRef.current &&
      restartBtnRef.current &&
      replayBtnRef.current && 
      attemptsRef.current
    ) {
      startGame(
        canvasRef.current,
        levelStatusRef.current,
        goalModalRef.current,
        restartBtnRef.current,
        replayBtnRef.current,
        attemptsRef.current
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        id="canvas"
        width="500"
        height="300"
        className="bg-white border-4 border-black"
      />
      <div className="flex w-[500px] items-center justify-between">
        <span ref={attemptsRef} id="attempts" className="text-lg font-bold">
          0
        </span>
        <span ref={levelStatusRef} id="levels" className="text-lg font-bold">
          1 / 4
        </span>
      </div>
      <button
        ref={restartBtnRef}
        id="restartBtn"
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Restart
      </button>

      <div
        ref={goalModalRef}
        id="goalModal"
        style={{ display: "none" }}
        className="absolute w-screen inset-0 bg-white flex items-center justify-center"
      >
        <div className="h-1/2 w-1/2 rounded shadow-lg border border-slate-100 text-center flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Congratulations!</h2>
          <p>You won!</p>
        </div>
        <button  ref={replayBtnRef} className="py-1 px-2 bg-black text-white rounded-sm cursor-pointer">Play again</button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
