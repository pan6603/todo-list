import styled from "styled-components";

const List = styled.div`
    width: 520px;
    height: 545px;
    background-color: red;
    margin: 0px auto;
` 


function TodoItem() {
    return (
        <>
            <List>Hello, TodoItem</List>
        </>
    )
}

export default TodoItem;