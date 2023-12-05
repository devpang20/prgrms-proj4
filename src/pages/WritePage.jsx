import { useRecoilState } from "recoil";
import { todosAtom } from "../states";

function WritePage() {
    const [todos, setTodos] = useRecoilState(todosAtom)
    
    return (  
        <>
            <h1>작성페이지</h1>
            <div>현재 글 개수 : {todos.length}</div>
            <form>
                <input type="text" placeholder="할일을 입력해주세요." />
            </form>
        </> 
    );
}

export default WritePage;