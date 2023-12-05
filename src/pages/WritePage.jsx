import { useRecoilState } from "recoil";
import { todosAtom } from "../states";

function WritePage() {
    const [todos, setTodos] = useRecoilState(todosAtom)
    
    return (  
        <div className="flex-1 flex-shrink-0 flex justify-center items-center">
            <h1>작성페이지</h1>
            <div>현재 글 개수 : {todos.length}</div>
            <form>
                <input type="text" placeholder="할일을 입력해주세요." />
                <input type="sumbit" value="작성" />
            </form>
        </div> 
    );
}

export default WritePage;