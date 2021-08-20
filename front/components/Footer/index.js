import React from 'react';
import { Icon } from 'antd';
import { Footer } from './styles';

const Footer = () => {
    return (
        <Footer>
            <div>
                <Ul>
                    <Li>
                        <a href="https://github.com/Taewoong1378" target="_blank" rel="noreferrer noopener">
                            <Github icon={faGithub} />
                        </a>
                    </Li>
                    <Li>
                        <a href="https://www.instagram.com/tae_coding/" target="_blank" rel="noreferrer noopener">
                            <Instagram icon={faInstagram} />
                        </a>
                    </Li>
                    <Li>
                        <a href="https://www.facebook.com/profile.php?id=100008233455158" target="_blank" rel="noreferrer noopener">
                            <Facebook icon={faFacebook} />
                        </a>
                    </Li>
                </Ul>
            </div>
        </Footer>
    );
}

export default Footer;
