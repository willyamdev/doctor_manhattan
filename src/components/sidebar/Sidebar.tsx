import React from 'react';
import { HBOContainer, MovieInfosContainer, ShareContainer, SidebarContainer } from './styles';
import hboLogo from '../../assets/sidebar/HBO_logo.png';

const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>

            <HBOContainer>
                <img src={hboLogo} alt="" />
            </HBOContainer>

            <MovieInfosContainer>
                <span dangerouslySetInnerHTML={{
                    __html: `Music by: 
                Hans Zimmer`}} />

                <span dangerouslySetInnerHTML={{
                    __html: `Director:
                    Zack Snyder`}} />

                <span dangerouslySetInnerHTML={{
                    __html: `Date:
                    2022`}} />

            </MovieInfosContainer>

            <ShareContainer>

                <span>Share</span>

                <div className='content'>
                    <div className="item">
                        <span>FB</span>
                    </div>
                    <div className="item">
                        <span>TW</span>
                    </div>
                    <div className="item">
                        <span>IG</span>
                    </div>
                </div>

            </ShareContainer>

        </SidebarContainer>
    )
}

export default Sidebar;