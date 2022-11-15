import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"
import bannerImg from "../src/assets/img/banner-1.jpg"
import Favorites from "../src/components/Favorites"
import { useState } from "react"

const HomePage = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <Header />
                <Timeline searchValue={searchValue} playlists={config.playlists} />
                <Favorites />
            </div>
        </>
    )
}

const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1};

    .banner-image {
        background-image: url(${({ bannerSrc }) => bannerSrc});
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 230px;
        margin-top: 50px;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .user-info > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;

const Header = () => {
    return (
        <StyledHeader bannerSrc={bannerImg.src}>
            <div className="banner-image" />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

const Timeline = ({ playlists, searchValue, ...props }) => {
    const playlistNames = Object.keys(playlists);

    // O react não gosta de Statements dentro do JSX
    // É preferível usar retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map(playlistName => {
                const videos = playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter(video => {
                                    return video.title
                                        .toLowerCase()
                                        .includes(
                                            searchValue.toLowerCase()
                                        );
                                })
                                .map(video => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} alt="thumbnail do vídeo" />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

export default HomePage