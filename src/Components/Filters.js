import React from 'react';
import './filters.css'
import StarRatings from 'react-star-ratings';


export default function Filters() {
    return (
        <div>
            <ul className='filters'>
                <li><h3>Authore</h3></li>
                <li>
                    <input id="date" type="checkbox" />
                    <label htmlFor="date">Author1</label>
                </li>
                <li>
                    <input id="Category" type="checkbox" />
                    <label htmlFor="Category">Author2</label>
                </li>
                <li>
                    <input id="Author" type="checkbox" />
                    <label htmlFor="Author">Author3</label>
                </li>
                <li>
                    <input id="Publisher" type="checkbox" />
                    <label htmlFor="Publisher">Author4</label>
                </li>
                <li>
                    <input id="Name" type="checkbox" />
                    <label htmlFor="Name">Author5</label>
                </li>
            </ul>
            <ul className='filters'>
                <li><h3>Language</h3></li>
                <li>
                    <input id="date" type="checkbox" />
                    <label htmlFor="date">Language1</label>
                </li>
                <li>
                    <input id="Category" type="checkbox" />
                    <label htmlFor="Category">Language2</label>
                </li>
                <li>
                    <input id="Author" type="checkbox" />
                    <label htmlFor="Author">Language3</label>
                </li>
                <li>
                    <input id="Publisher" type="checkbox" />
                    <label htmlFor="Publisher">Language4</label>
                </li>
                <li>
                    <input id="Name" type="checkbox" />
                    <label htmlFor="Name">Language5</label>
                </li>
            </ul>
            <ul className='filters'>
                <li><h3>Review</h3></li>
                <li>


                    <StarRatings
                        rating={5}
                        starDimension="25px"
                        starSpacing="3px"
                    />
                </li>
                <li>
                   
                        <StarRatings
                            rating={4}
                            starDimension="25px"
                            starSpacing="3px"
                        />
                    
                </li>
                <li>
                    
                        <StarRatings
                            rating={3}
                            starDimension="25px"
                            starSpacing="3px"
                        />
                   
                </li>
                <li>
                   
                        <StarRatings
                            rating={2}
                            starDimension="25px"
                            starSpacing="3px"
                        />
                   
                </li>
                <li>
                    
                        <StarRatings
                            rating={1}
                            starDimension="25px"
                            starSpacing="3px"
                        />
                   
                </li>
            </ul>
        </div>
    )
}
