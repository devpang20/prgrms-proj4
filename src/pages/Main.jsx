import RecordModal from "../components/RecordModal";

function RecordAddModal () {
    const status = {opend: true}
    return (
        <>
            <RecordModal
                msg="몇회 진행하셨나요?"
                status={status}
            />
        </>
    )
}



export default function Main() {
    
    return (  
        <>
            <RecordAddModal />
            <div className="flex-1 flex items-center justify-center">
                <div className="text-[70px] text-[color:gray] select-none">
                    <span>10</span>
                </div>
                <div className="flex justify-center">
                    <button className="btn btn-accent" variant="contained" onClick="{}">
                        스쿼트 횟수 기록하기
                    </button>
                </div>
            </div>
        </>
    );
}