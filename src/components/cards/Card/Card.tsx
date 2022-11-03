import React from 'react';
import './Card.css'
import CardMd from "../CardMd/CardMd";
import CardLg from "../CardLg/CardLg";
import CardSm from "../CardSm/CardSm";

type CardProps = {
    type: 'lg' | 'md' | 'sm'
    title: string
    description?: string
    image: string
    likesCount?: number
    dislikesCount?: number
    date: string
    isSaved?: boolean
}

const Card = ({type, title, description = '', image, likesCount, dislikesCount, date, isSaved}: CardProps) => {

    const getCard = (type: 'lg' | 'md' | 'sm') => {
        switch (type) {
            case "lg":
                return <CardLg
                    title={title}
                    description={description}
                    likesCount={likesCount}
                    dislikesCount={dislikesCount}
                    date={date}
                    image={image}
                    isSaved={isSaved}/>
            case "md":
                return <CardMd
                    date={date}
                    title={title}
                    image={image}/>
            case "sm":
                return <CardSm
                    title={title}
                    date={date}
                    image={image}/>
        }
    }


    return (
        <>
            {getCard(type)}
        </>
    );
};

export default Card;