export default function History() {
    const goalCount = 10000;
    const doneCount = 0;
    const restCount = goalCount - doneCount;

    return ( 
        <div className="flex-1 flex-shrink-0 flex justify-center items-center">
            <div>
                <h1 className="font-bold text-xl">현황</h1>
                <div>남은 횟수{restCount}회</div>
                <div>수행 횟수{doneCount}회</div>
            </div>
            <div className="mt-5">
                <h1 className="font-bold text-xl">기록</h1>
                <div className="flex gap-2 items-center">
                    <span>40</span>
                    <button className="btn btn-primary">적용</button>
                    <button className="btn btn-primary">취소</button>
                </div>
                <div className="flex gap-2 items-center">
                    <button className="btn btn-primary">+ 10</button>
                    <button className="btn btn-primary">+ 1</button>
                    <button className="btn btn-primary">- 10</button>
                    <button className="btn btn-primary">- 1</button>
                </div>
            </div>

        </div>
        
     );
}

