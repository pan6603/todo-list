import styled from "styled-components";

const Container = styled.div`
    width: 1440px;
    height: 710px;
`

const Main = styled.div`
    width: 750px;
    height: 710px;
    margin: 0px auto;
`

const Head = styled.div`
    width: 750px;
    height: 135px;
    background-color: blue;
`

const Body = styled.div`
    width: 750px;
    height: 575px;
    background-color: red;
`


function TodoList() {
    return (
        <Container>
            <Main>
                <Head></Head>
                <Body>

                </Body>
            </Main>
        </Container>
    )
}

export default TodoList;