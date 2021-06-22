import React from 'react';
import styled from'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSection() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={'Atque, porro magnam? Dolorum ipsum ut explicabo corrupti adipisci.'} />
                    <ReviewItem text={'Atque, porro magnam? Dolorum ipsum ut explicabo corrupti adipisci. Dolorum ipsum ut explicabo corrupti adipisci.'} />
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.div`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
            
        }
    }
`;

export default ReviewsSection
