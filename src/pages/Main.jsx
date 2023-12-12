import { Button } from "@mui/material";
import { RecordModal, useRecordModalStatus } from "../components/RecordModal";
import useRecordsStatus from "../hooks";
import CountNumber from "../components/CountNumber";

function RecordAddModal ({ status }) {

    const recordsState = useRecordsStatus();

    
    const saveRecord = (recordCount) => {

    }
    
    return (
        <>
            <RecordModal
                msg="몇회 진행하셨나요?"
                status={status}
                saveRecord={saveRecord}
            />
        </>
    )
}



export default function Main() {

    const recordModalStatus = useRecordModalStatus()
    
    return (  
        <>
            <RecordAddModal
                status={recordModalStatus}
            />
            <div className="flex-1 flex items-center justify-center">
                <div>
                    <div className="text-[70px] text-[color:var(--mui-color-primary-main)] font-mono select-none">
                        <CountNumber
                            start={0}
                            end={100}
                            duration={3}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="contained" onClick={recordModalStatus.onOpen}>
                            스쿼트 횟수 기록하기
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}