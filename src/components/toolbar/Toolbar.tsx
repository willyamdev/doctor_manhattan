import React from 'react';
import { BuyTicketButton, TextsContainer, ToolbarContainer } from './styles';

const Toolbar: React.FC = () => {
    return (
        <ToolbarContainer>
            <TextsContainer>
                <span>Story</span>
                <span>Trailer</span>
                <span>Gallery</span>
            </TextsContainer>

            <BuyTicketButton>Buy Tickets</BuyTicketButton>

        </ToolbarContainer>
    )
}

export default Toolbar;