export const Instructions = () => {
    return (
        <div className="grid grid-rows-2 grid-cols-3 gap-1 select-none">
            <div className="w-10 h-10 border rounded-md flex items-center justify-center col-span-1 row-start-2 shadow-md">
                <span>←</span>
            </div>
            <div className="w-10 h-10 border rounded-md flex items-center justify-center col-start-2 row-span-1 shadow-md">
                <span>↑</span>
            </div>
            <div className="w-10 h-10 border rounded-md flex items-center justify-center col-span-1 row-start-2 shadow-md">
                <span>↓</span>
            </div>
            <div className="w-10 h-10 border rounded-md flex items-center justify-center col-span-1 row-start-2 shadow-md">
                <span>→</span>
            </div>
        </div>
    );
};
