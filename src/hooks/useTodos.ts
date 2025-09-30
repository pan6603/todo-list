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
            const todo: Todo {
                id: crypto.randomUUID.() ?? String(Date.now()),
                title,
                completed: false,
                createdAt: Date.now(),
            }

        }
    }
} 