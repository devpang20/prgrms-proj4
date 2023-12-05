import { numberFormat } from "../util/numberFormat";

function ListPage() {
    const goalCount = 10000;
    const doneCount = 0;
    const restCount = goalCount - doneCount;

    return ( 
        <div className="flex-1 flex-shrink-0 flex justify-center items-center">
            <div>
                <div>남은 횟수{numberFormat(restCount)}회</div>
                <div>수행 횟수{numberFormat(doneCount)}회</div>
            </div>

            <button className="btn btn-primary">button</button>

        </div>
     );
}

export default ListPage;