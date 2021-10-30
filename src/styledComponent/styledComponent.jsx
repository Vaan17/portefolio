import styled from "styled-components"

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
`
export const PageContent = styled.div`
    padding: 3em 16em;
    height: calc(100vh - 14em) !important;
`
export const TinyText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 18px;
`
export const BoldText = styled.div`
    font-weight: bold;
`
export const Title = styled.div`
    font-size: 28px;
    font-weight: 600 !important;
    color: rgb(21, 24, 153);
    width: 100%;
    padding-bottom: 1em;
`
export const Spacing = styled.div`
    padding-bottom: ${(props) => props.spacing};
`