import React from 'react';
import './CardMd.css'
import {BookmarkIcon, MoreHorizontalIcon, ThumbDownIcon, ThumbUpIcon} from "../../icons";

type CardMdPropsType = {
    title: string
    image?: string
    likes?: number
    dislikes?: number
    date: string
    isSaved?: boolean
}

const CardMd = ({title, image, likes, dislikes, date, isSaved}: CardMdPropsType) => {
    return (
        <div className='card-md'>
            <div className="card-md-body">

                <div className="card-md-body__img">
                    <img src={image}/>
                </div>

                <div className="card-md-content">
                    <p>{date}</p>
                    <p>{title}</p>
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

export default CardMd;