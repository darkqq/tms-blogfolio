import React from 'react';
import './CardSm.css'
import {BookmarkIcon, MoreHorizontalIcon, ThumbDownIcon, ThumbUpIcon} from "../../icons";

type CardSmProps = {
    title: string
    image?: string
    likes?: number
    dislikes?: number
    date: string
    isSaved?: boolean
}


const CardSm = ({title, image, likes, dislikes, date, isSaved}: CardSmProps) => {
    return (
        <div className='card-sm'>
            <div className="card-sm-body">
                <div className="card-sm-content">
                    <p>{date}</p>
                    <p>{title}</p>
                </div>
                <div className="card-sm-body__img">
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

export default CardSm;