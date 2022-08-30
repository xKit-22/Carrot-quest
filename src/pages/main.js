import star from "../images/star.svg";
import rocket from "../images/rocket.svg";
import yandex from "../images/yandex_music.svg";
import spotify from "../images/spotify.svg";
import radio from "../images/radio.svg";
import vk from "../images/vk.svg";
import youtube from "../images/youtube.svg";
import woman from "../images/woman_blue.svg";
import manOrange from "../images/man_orange.svg";
import manPink from "../images/man_pink.svg";
import video from "../images/video.svg";
import play from "../images/play.svg";
import circlePink from "../images/circle_pink.svg";
import circlePurple from "../images/circle_purple.svg";
import circleYellow from "../images/circle_yellow.svg";
import telegram from "../images/telegram.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import * as React from "react";
import {useEffect} from "react";
import VideoComponent from "./videoComponent";


const Main = () => {
    useEffect(() => {
        document.getElementById("play").addEventListener("click", () => {
            document.getElementById("video").style.display = "initial";
            document.getElementById("preview").style.display = "none";
            document.getElementById("play").style.display = "none";
        })
    }, []);
    return (
        <main className="main">
            <div className="header">
                <div className="header_title">
                    <img className="header-title_star" src = {star} alt={star}/>
                    <div className="header-title_left">Бизнес-шоу:</div>
                    <div className="header-title_right">
                        <div>Маркетинг</div>
                        <div className="header-title-vs">
                            <span>VS</span>
                        </div>
                        <div>Продажи</div>
                    </div>
                </div>
                <div className="header-content">
                    <div className="header-left">
                        <div className="header-left_text">
                            <div className="header-left_form">
                                <div className="header-left_desc">Бизнес-шоу, в котором общаемся с экспертами digital-маркетинга и
                                    руководителями продаж о том, как совместно достигать потрясающих результатов.
                                </div>
                                <div className="header-left_button">Подписаться</div>
                                <img className="header-left_rocket" src={rocket}/>
                            </div>
                            <div className="header-left_info">
                                <div className="header-left_socials">
                                    <div className="header-left_socials_text">Слушайте нас, где удобно</div>
                                    <div className="header-left_socials_buttons">
                                        <a href="https://music.yandex.ru/" target="_blank">
                                            <img className="header-left_socials_button" src={yandex}/>
                                        </a>
                                        <a href="https://www.spotify.com/" target="_blank">
                                            <img className="header-left_socials_button" src={spotify}/>
                                        </a>
                                        <a href="#">
                                            <img className="header-left_socials_button" src={radio}/>
                                        </a>
                                        <a href="https://vk.com/carrotquest" target="_blank">
                                            <img className="header-left_socials_button" src={vk}/>
                                        </a>
                                        <a href="https://www.youtube.com/c/CarrotquestTV" target="_blank">
                                            <img className="header-left_socials_button" src={youtube}/>
                                        </a>
                                    </div>
                                </div>
                                <img src={woman} className="header-left_socials_img"/>
                            </div>
                        </div>
                        <div className="header-badge_wrapper">
                            <img src={manOrange}/>
                            <div className="header-badge">
                                <div className="header-badge_name">Дима Сергеев</div>
                                <div className="header-badge_position">CEO Carrot quest</div>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div>
                            <img src={manPink}/>
                        </div>
                        <div className="header-right_link"><a href="#videoplayer">новый выпуск</a></div>
                        <div className="header-right-preview">
                            <a href="#videoplayer"><img className="header-right_video" src={video}/></a>
                            <a href="#videoplayer"><img className="header-right_play" src={play}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="videos">
                <div className="videos-title">Выпуски</div>
                <div className="videos-desc">Подкаст, в котором обсуждаем, как прекратить войну маркетинга и продаж. Смотрите
                    интервью с экспертами digital-маркетинга и руководителями продаж. Рассказываем реальные истории и практики
                    работы этих двух направлений.
                </div>
                <div className="videos-target">
                    <div className="videos-target_avatars">
                        <img className="videos-target_avatar" src={circlePink}/>
                        <img className="videos-target_avatar" src={circlePurple}/>
                        <img className="videos-target_avatar" src={circleYellow}/>
                    </div>
                    <div className="videos-target_text">Для SMO, руководителей Digital-маркетинга, ответственного за привлечения
                        лидов
                    </div>
                </div>
                <div className="videos-playlist">
                    <div id="videoplayer" className="videos-playlist_player">
                        <img id="preview" className="videos-playlist_video" src={video}/>
                        <img id="play" className="header-right_play playlist" src={play}/>
                        <iframe id="video" src="https://www.youtube.com/embed/2c6LbMLsRiM?autoplay=1&mute=1"/>
                        <div className="videos-playlist_footer">
                            <div className="videos-playlist_buttons">
                                <div className="videos-playlist_text">Поделиться:</div>
                                <div className="videos-playlist_socials">
                                    <a href="#"><img src={telegram}/></a>
                                    <a href="#"><img src={facebook}/></a>
                                    <a href="#"><img src={vk}/></a>
                                    <a href="#"><img src={instagram}/></a>
                                </div>
                            </div>
                            <div className="videos-playlist_text">23 минуты</div>
                        </div>
                    </div>
                    <div className="videos-playlist_wrapper">
                        <div className="videos-playlist_items">
                            <VideoComponent number={12} isActive={true}/>
                            <VideoComponent number={11}/>
                            <VideoComponent number={10}/>
                            <VideoComponent number={9}/>
                            <VideoComponent number={8}/>
                            <VideoComponent number={7}/>
                            <VideoComponent number={6}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main
