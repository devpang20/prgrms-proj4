import { Button, Modal } from "@mui/material"
import { useEffect, useState } from "react"
import { myConfetti } from "../utill"

export default function RecordModal ({
    status,
    msg,
    initialQuantity = 0,
}) {
    const [recordCount, setRecordCount] = useState(initialQuantity)

    useEffect(() => {
        setRecordCount(initialQuantity)
    }, [initialQuantity])


    const changeRecordCount = (count) => {
        if (count > 0) {
            myConfetti({
                particleCount: count * 100,
                spreed: 160,
            })
        }
        setRecordCount(count)
    }

    return ( 
        <>
            <Modal
                className="flex justify-center items-center"
                open={true}
                // onClose={cancelRecord}
            >
                <div className="bg-white rounded-[20px] p-7 w-full max-w-lg">
                    <div className="text-center select-none">{msg}</div>
                    <div className="text-center">
                    <span className="text-[70px] text-[color:var(--mui-color-primary-main)] font-mono select-none">
                            {recordCount}
                        </span>
                    </div>
                    <div className="flex justify-center gap-2">
                        <Button variant="contained" onClick={() => changeRecordCount(5)}>+ 5</Button>
                        <Button variant="contained" onClick={() => changeRecordCount(1)}>+ 1</Button>
                        <Button variant="contained" onClick={() => changeRecordCount(-1)}>- 1</Button>
                        <Button variant="contained" onClick={() => changeRecordCount(-5)}>- 5</Button>
                    </div>
                    <div className="mt-10 flex justify-center gap-2">
                        <Button variant="contained">
                            적용
                        </Button>
                        <Button variant="outlined">
                            취소
                        </Button>
                    </div>

                </div>
                
            </Modal>
        </>
    )
}