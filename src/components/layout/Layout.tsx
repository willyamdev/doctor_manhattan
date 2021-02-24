import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Toolbar from '../toolbar/Toolbar';
import { ContentSection, LayoutContainer, RightContainer } from './styles';

const Layout: React.FC = ({ children }) => {
    return (
        <LayoutContainer>
            <Sidebar>

            </Sidebar>
            <RightContainer>
                <Toolbar>

                </Toolbar>

                <ContentSection>
                    {children}
                </ContentSection>
            </RightContainer>
        </LayoutContainer>
    )
}

export default Layout;