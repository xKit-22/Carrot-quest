import heart from "../images/heart.svg";
import telegram from "../images/telegram.svg";
import facebook from "../images/facebook.svg";
import vk from "../images/vk.svg";
import youtube from "../images/youtube.svg";
import instagram from "../images/instagram.svg";
import starPink from "../images/star_pink.svg";
import starWhite from "../images/star_white.svg";
import * as React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer-social">
                <img className="footer-social_heart" src={heart}/>
                <div className="footer-social_wrapper">
                    <div className="footer-social_title">Слушайте и читайте, где удобно</div>
                    <div className="footer-social_buttons">
                        <div className="footer-social_button">
                            <a href="#">
                                <img src={telegram}/>
                            </a>
                        </div>
                        <div className="footer-social_button">
                            <a href="https://ru-ru.facebook.com/" target="_blank">
                                <img src={facebook}/>
                            </a>
                        </div>
                        <div className="footer-social_button">
                            <a href="https://vk.com/carrotquest" target="_blank">
                                <img src={vk}/>
                            </a>
                        </div>
                        <div className="footer-social_button">
                            <a href="https://www.youtube.com/c/CarrotquestTV" target="_blank">
                                <img src={youtube}/>
                            </a>
                        </div>
                        <div className="footer-social_button">
                            <a href="https://www.instagram.com/" target="_blank">
                                <img src={instagram}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-news">
                <img className="footer-news-pink" src={starPink}/>
                <img className="footer-news-white" src={starWhite }/>
                <div className="footer-news_wrapper">
                    <div className="footer-news_title">Подпишитесь на уведомления о выходе новых материалов</div>
                    <div className="footer-news_form">
                        <input type="email" placeholder="Введите ваш e-mail" className="footer-news_input"/>
                        <div className="footer-news_button">Подписаться</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
