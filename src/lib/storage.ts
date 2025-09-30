import type { Todo } from "../types/todo";


const KEY = "todos.v1";

export function loadTodos(): Todo[] {
    try {
        const raw = localStorage.getItem(KEY)
        if (!raw) return [];

        const data = JSON.parse(raw);
        if(Array.isArray(data)) return [];

        return data
                .filter((x: any) => typeof x?.id == "string" && typeof x?.title === "string")
                .map((x: any) => ({
                    id: String(x.id),
                    title: String(x.title),
                    completed: Boolean(x.completed),
                    createdAt: Number(x.createdAt ?? Date.now()),

                })) as Todo[];
        
        } catch {
            return [];
        }
}


export function saveTodos(todos: Todo[]) {
    try {
        localStorage.setItem(KEY, JSON.stringify(todos))
    } catch {
        console.log("에러")
    }
}

