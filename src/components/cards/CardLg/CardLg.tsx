import React from 'react';
import './CardLg.css'
import {BookmarkIcon, MoreHorizontalIcon, ThumbDownIcon, ThumbUpIcon} from "../../icons";


type CardLGPropsType = {
    title: string
    description: string
    image?: string
    likesCount?: number
    dislikesCount?: number
    date: string
    isSaved?: boolean
}

const CardLg = ({title, description, image, likesCount, dislikesCount, date, isSaved}: CardLGPropsType) => {
    return (
        <div className='card-lg'>
            <div className="card-lg-body">
                <div className="card-lg-content">
                    <p>{date}</p>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
                <div className="card-lg-body__img">
                    <img src={image}/>
                </div>

            </div>
            <div className="card-actions">
                <div>
                    <ThumbUpIcon/>
                    <ThumbDownIcon/>
                </div>
                <div>
                    <BookmarkIcon/>
                    <MoreHorizontalIcon/>
                </div>
            </div>
        </div>
    );
};

export default CardLg;