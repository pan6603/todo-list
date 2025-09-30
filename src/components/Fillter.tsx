

// 글 등록
// 글 수정
// 글 삭제 


export interface Todo {
    id:string,
    title:string,
    cpmpleted: boolean, // 완료여부
    createdAt: string, // 생성날짜
}

export type Filter = 'all'|'active'|'completed';