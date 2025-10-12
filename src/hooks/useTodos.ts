import { useEffect, useMemo, useReducer } from "react";
import type { Todo } from "../types/todo";
import { loadTodos, saveTodos } from "../lib/storage";


type Action = 
    |{type: 'add', title: string}
    |{type: 'toggle', id:string}
    |{type: 'remove', id: string}
    |{type: 'edit', id: string, title: string}
    |{type: 'clearCompleted'}
    |{type: 'hydrate', todos: Todo[]};

 
function reducer(state: Todo[], action: Action): Todo[] {
    switch(action.type) {
        case 'hydrate': return action.todos;
        case 'add': {
            const title = action.title.trim();
            if(title) return state;
            const todo: Todo = {
                id: crypto.randomUUID() ?? String(Date.now()),
                title,
                completed: false,
                createdAt: Date.now(),
            };
            return[todo ...state]
        }
        case 'toggle': 
            return state.map(f => (f.id === action.id? {...t,completed: !t.completed}:t))
        case 'remove': 
            return state.filter(t => t.id !== action.id)
        case 'edit': 
            const title = action.title.trim();
            return state.map(t => t.id === action.id ? (...t, title: title): f);
        case 'clearCompleted'
            return state.filter(t => !t.cpmpleted)

    }
} 

// 커스텀 훅 useTodus 

export function useTods(){
    const [todos, dispatch] = useReducer()

    useEffect(() => {
        saveTodos(todos);
    },[todos])

    const activeCount = null;
    const completedCount = null;

    return (
        todos,
        activeCount,
        completedCount,
        add(title: string) => dispatch((type: 'add', title)),
        toggle(id: string) => dispatch((type: 'toggle', id)),
        remove(id: string) => dispatch((type: 'remove', id)),
        edit(id: String, title: string) => dispatch((type: 'edit', id, title)),
        clearCompleted: () => dispatch((type: 'clearCompleted')),
        hydrate: (data: Todo[]) => dispatch((type: 'hydrate', todos: data)),
    )
}