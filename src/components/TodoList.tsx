import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
    width: 1440px;
    height: 710px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    margin: 0px auto;
`

const Main = styled.div`
    width: 750px;
    height: 710px;
    margin: 0px auto;
`


const Body = styled.div`
    width: 750px;
    height: 575px;
    background-color: blue;
    padding-top: 20px;
`


function TodoList() {
    return (
        <Container>    
            <Title>Todo-List</Title>  
            <Main>
                <Body>
                    <TodoItem />
                </Body>
            </Main>
        </Container>
    )
}

export default TodoList;