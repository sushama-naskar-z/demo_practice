import React from 'react';
import Bookcover from '../images/bookcover.jpeg';
import './booklist.css';
import { Link } from 'react-router-dom';
import Data from '../data/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from 'react-star-ratings';
import { ReactComponent as Prev } from '../images/prev.svg';
import { ReactComponent as Next} from '../images/next.svg';


export default function Booklist() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} style={{ ...style}}>
                <div className='arrow'><Next width="15"/></div>
                </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} style={{ ...style}}>
                <div className='arrow'><Prev width="15"/></div>
                </div>

        );
    }
    var settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const booklist = Data.bookList;
    console.log(booklist);
    return (
        <div className='booklist'>
            {
                booklist.map((book) => {
                    return (
                        <div  key={book.category.category_id} className="category">
                            <h2>{book.category['catgory_name']}</h2>
                            <hr></hr>
                            <Slider {...settings} className="b">
                                {book.books.map((ele) => {
                                    return (
                                        <Link to="/book" key={ele.id} className="a">
                                            <div className='a'><img src={Bookcover} width={128} /></div>
                                            <div>
                                                {ele.title}
                                            </div>
                                            <div>by Author Name</div>
                                            <div>
                                                <StarRatings
                                                    rating={4.5}
                                                    starDimension="28px"
                                                    starSpacing="3px"
                                                />


                                            </div>





                                        </Link>
                                    )
                                })}
                            </Slider>
                        </div>


                    )

                })
            }

        </div>
    )
}


{/* <div key={book.category.category_id}>{book.category['catgory_name']}
                            <Carousel responsive={responsive}
                                
                                autoPlay={false}
                            >
                                {book.books.map((ele) => {
                                    return (
                                        <div draggable={false}>{ele.title}</div>
                                    )
                                })}
                            </Carousel>
                        </div> */}

{/* <h1>Booklist</h1>
            <Link to="/book" className='booklist' >
                
                
                <div>
                    <div className='title'>Book Title</div>
                    <div><span className='grey-font'>by</span>Author Name</div>
                </div>

            </Link> */}


        //     <div
        //     className={className}
        //     style={{ ...style, display: "block", background: "white" ,border:"1px solid gray"}}
        //     onClick={onClick}
        //   />