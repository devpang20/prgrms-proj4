import { useEffect, useRef } from "react"
import  { CountUp } from "countup.js"


export default function CountNumber({ start = 0, end = 1000, duration = 2 }) {
    const spanRef = useRef(null)
    const countUpRef = useRef(null)

    useEffect(() => {
        if (countUpRef.current == null) {
            countUpRef.current = new CountUp(spanRef.current, end, {
                startValue: start,
                duration: duration,
                formattingFn: (num) => String(num).padStart(5, "0")
            })
            countUpRef.current.start()
        } else {
            countUpRef.current.update(end)
        }
    }, [start, end, duration])
    
    
    return ( 
        <span ref={spanRef}></span>
     );
}
