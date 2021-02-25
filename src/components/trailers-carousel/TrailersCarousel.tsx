import React, { useRef, useState } from 'react';
import { TrailesContainer, TrailersItemsContainer, ControllersContainer, CarouselItemTrace } from './styles';
import trailer1 from '../../assets/home/trailer1.png';
import trailer2 from '../../assets/home/trailer2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TrailersCarousel: React.FC = () => {

    const trailers = [
        { cape: trailer1 },
        { cape: trailer2 },
        { cape: trailer2 },
        { cape: trailer2 },
        { cape: trailer2 },
    ];

    const trailersContainerRef = useRef<HTMLDivElement>(null);

    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const next = () => {
        if (selectedIndex === (trailers.length - 1)) return;

        setSelectedIndex(selectedIndex + 1);

        trailersContainerRef.current?.scrollTo((trailersContainerRef.current?.scrollLeft + 360), 0);
    }

    const prev = () => {
        if (selectedIndex === 0) return;

        setSelectedIndex(selectedIndex - 1);

        trailersContainerRef.current?.scrollTo((trailersContainerRef.current?.scrollLeft - 360), 0);
    }

    return (
        <TrailesContainer>
            <h4>Trailers</h4>

            <TrailersItemsContainer ref={trailersContainerRef}>
                {
                    trailers.map((data, index) => (
                        <img src={data.cape} alt="" />
                    ))
                }
            </TrailersItemsContainer>

            <ControllersContainer>
                <div className="carousel-items-trace-container">

                    {trailers.map((data, index) => (
                        <CarouselItemTrace isSelected={index === selectedIndex} />
                    ))}
                </div>

                <div className="right-left-controllers-container">
                    <FontAwesomeIcon className="icon" onClick={prev} icon={faArrowLeft} />
                    <FontAwesomeIcon className="icon" onClick={next} icon={faArrowRight} />
                </div>
            </ControllersContainer>
        </TrailesContainer>
    )
}

export default TrailersCarousel;