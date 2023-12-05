import { atom } from "recoil";

export const todosAtom = atom({
    key: "app/todosAtom",
    default: [
        {
            id: 1,
            content: "운동"
        },
        {
            id: 2,
            content: "달리기"
        },
        {
            id: 3,
            content: "스트레칭"
        }
    ]
})