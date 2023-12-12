import { Button, Modal } from "@mui/material"
import { useEffect, useState } from "react"
import { myConfetti } from "../utill"


export function useRecordModalStatus () {
    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => setIsOpen(false)
    const onOpen = () => setIsOpen(true)

    return {
        isOpen,
        onClose,
        onOpen,
    }
}

export function RecordModal ({
    status,
    msg,
    initialQuantity = 0,
    // saveRecord: _saveRecord,
    // cancelRecord: _saveRecord
}) {
    const [recordCount, setRecordCount] = useState(initialQuantity)

    useEffect(() => {
        setRecordCount(initialQuantity)
    }, [initialQuantity])


    const changeRecordCount = (count) => {
        if (count > 0) {
            myConfetti({
                particleCount: count * 10,
                spreed: 160,
            })
        }
    }

    const saveRecord = () => {
        setRecordCount(0)
        status.onClose()
    }
 
    const cancelRecord = () => {
        setRecordCount(0)
        status.onClose()
    }

    return ( 
        <>
            <Modal
                className="flex justify-center items-center"
                open={status.isOpen}
                onClose={cancelRecord}
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
                        <Button variant="contained" onClick={saveRecord}>
                            적용
                        </Button>
                        <Button variant="outlined"  onClick={cancelRecord}>
                            취소
                        </Button>
                    </div>

                </div>
                
            </Modal>
        </>
    )
}