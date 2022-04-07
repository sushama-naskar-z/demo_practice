import React, { useState, useEffect } from 'react';
import './bookDetails.css';
import BookCover from '../images/bookcover.jpeg';
import Reviews from '../images/reviews.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {ReactComponent as Star} from '../images/star.svg';

export default function BookDetails() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [review,setReview]=useState(0);

    const addReview=(id)=>{
        
        setReview(id);
    }
    return (
        <div className='book_details'>
            <div className='book_info'>
                <div>
                    <div className='inner_div'>
                        <div>
                            <img src={BookCover} width={130} />
                        </div>
                        <div className='right_div'>
                            <div><h2>Book Title</h2></div>
                            <div><h5>by Author Name</h5></div>
                            <div className='review'>
                                <img src={Reviews} width={90} className='review_icon' />777 reviews
                            </div>
                        </div>

                    </div>
                    <div className='review_btn'>
                        <Button variant="primary" onClick={handleShow}>
                            Add a review
                        </Button>

                    </div>

                </div>

                <div className='summary'>
                    <h2>Summary</h2>
                    <div className='summary_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus,
                        purus nec placerat fringilla, arcu massa fermentum ligula, interdum eleifend eros nulla et velit.
                        Praesent lacus lorem, rhoncus sit amet lacinia nec, blandit pharetra orci. Vivamus efficitur turpis vitae urna bibendum,
                        eget volutpat lacus porta. Cras id augue eget tortor finibus tincidunt vel quis risus. Phasellus quis lobortis felis. Nullam euismod lobortis consectetur.
                        Nunc pellentesque egestas metus sit amet viverra. Nulla egestas,
                        nibh sit amet sollicitudin commodo, dui urna iaculis turpis, id consequat neque lectus sit amet ex. Aliquam sagittis commodo venenatis.
                        Integer cursus finibus tincidunt. Mauris et dapibus est.

                        Cras pulvinar vel mi ut commodo. Donec
                        feugiat ornare neque. Vestibulum mauris nisi, gravida at nisl et, elementum dictum felis. Nullam mattis dui non lorem dictum facilisis.
                        Etiam non scelerisque sem. In sed bibendum justo. Cras laoreet est magna, in dapibus nunc aliquet ac. Nam mollis fermentum volutpat.
                        Curabitur ac consequat enim. Sed porta orci quis mi molestie, et fermentum sapien ultricies. Vestibulum et neque semper, laoreet velit at,
                        faucibus libero. Pellentesque porttitor ultrices libero rutrum pulvinar. In congue consequat ante placerat volutpat. Ut id fermentum enim,
                        quis tincidunt magna.
                    </div>

                </div>
            </div>
            <div className='comments'>
                <div className='inner_div'>
                    <h2>Comments</h2>
                    <div className='comment_list'>
                        <div className='comment'>
                            <div className='user'>
                                <div className='user_image'>

                                </div>
                                <div>
                                    <p>User Name</p>
                                    <h6>review 10 min ago</h6>
                                </div>
                            </div>
                            <div className='comment_text'>
                                loeje idkj ifh oa
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
               <h2> Rate this book</h2>
                    <div className='d-flex justify-content-center'>
                        
                        <div onClick={()=>{addReview(1)}}><Star fill={`${review>=1?"gold":"#C4C4C4"}`} /></div>
                        <div onClick={()=>{addReview(2)}}><Star fill={`${review>=2?"gold":"#C4C4C4"}`} /></div>
                        <div onClick={()=>{addReview(3)}}><Star fill={`${review>=3?"gold":"#C4C4C4"}`} /></div>
                        <div onClick={()=>{addReview(4)}}><Star fill={`${review>=4?"gold":"#C4C4C4"}`} /></div>
                        <div onClick={()=>{addReview(5)}}><Star fill={`${review>=5?"gold":"#C4C4C4"}`} /></div> 
                    </div>
                    <h2>Add a comment</h2>
                   <div className='d-flex justify-content-center'> <input type="text" className='comment_input'/></div>
                    <div className='my-3 d-flex justify-content-end'>
                    <Button variant="secondary" onClick={handleClose} className="mx-3">
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                       Submit
                    </Button>
                    </div>
                </Modal.Body>



            </Modal>
        </div>
    )
}
