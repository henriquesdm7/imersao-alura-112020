import styled from "styled-components";

const StyledIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`

const VideoPage = (props) => {

    console.log(props)

    return (
        <StyledIframe
            width="1040"
            height="585"
            src="https://www.youtube.com/embed/-iWn67h8kKI"
            title="Aula 03 - Imersão React"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></StyledIframe>
    )
}

export default VideoPage;