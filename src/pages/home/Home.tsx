import React, { useRef } from 'react';
import Layout from '../../components/layout/Layout';
import { ContentContainer, HeaderTitle, HomeSection, LogoContainer, StoryContainer } from './styles';
import logo from '../../assets/global/doctor_manhattan_logo.png';
import TrailersCarousel from '../../components/trailers-carousel/TrailersCarousel';
import { useElementScroll, useTransform } from 'framer-motion';

const Home: React.FC = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useElementScroll(ref);
    const scaleAnim = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, 200])

    return (
        <Layout>
            <HomeSection ref={ref}>
                <LogoContainer>
                    <HeaderTitle style={{ scale: scaleAnim, y: yPosAnim }}>
                        <span>Yahya Abdul-Mateen II</span>
                        <img src={logo} alt="" />
                    </HeaderTitle>
                </LogoContainer>

                <ContentContainer>
                    <StoryContainer>
                        <h4>The Story</h4>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique viverra platea quisque laoreet odio vestibulum. Neque fusce vel suspendisse volutpat fermentum nibh vulputate. Et duis pellentesque interdum arcu sed pharetra, in. Dui hendrerit egestas eget tortor magna eu, in eu. Sagittis eros mi ac mauris tellus sollicitudin sodales ut.
                            Massa aliquam fermentum consectetur lacinia gravida odio ut. Gravida gravida cursus neque, aliquam ultrices. Id pharetra blandit at elit vulputate pulvinar amet. Hendrerit lorem tristique ut convallis habitant. Cras luctus mi, sed in pretium mattis bibendum. Sed tincidunt sit facilisi tellus. Facilisis habitasse amet, quis leo nisl, sed suscipit aliquam sed. Suscipit bibendum fames lectus id elit. At quam non blandit sed non, duis eget egestas. Commodo mauris ut bibendum senectus eu habitasse sapien non elementum. Sed tempor sit sed id. Eget eros a eleifend sed nulla.
                            Justo leo at varius vitae faucibus vitae, in. Vitae vitae dolor urna dolor faucibus at morbi. Et et nunc vestibulum maecenas imperdiet purus elementum ullamcorper semper. Commodo sit quis ipsum aliquam consectetur. Vulputate sit mattis arcu aliquet pellentesque sit. Posuere lacus commodo laoreet in venenatis placerat quam sit. Justo pellentesque consequat mi, a eget et. Malesuada pellentesque elit quam amet, et. In tristique non, orci aliquet. Id magna nec tortor justo in elit.
                        </p>
                    </StoryContainer>

                    <TrailersCarousel />
                </ContentContainer>
            </HomeSection>
        </Layout>
    )
}

export default Home;