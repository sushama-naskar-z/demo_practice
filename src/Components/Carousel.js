import React, { useState, useEffect } from 'react'

export default function Carousel() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");


    const url = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            }).then((data) => {
                setPosts(data);
            }).catch((error) => {
                setError(error.message);
            })

    }, [])
    return (
        <div className='w-100 border'>
           
            <div className="container-fluids border">
                <div className="carousel slide d-flex justify-content-center w-100" data-ride="carousel" id="multi_item">
                    <div className="carousel-inner w-75">
                        {
                            posts.length>0?
                            <div>
                                
                               { posts.map((ele,index)=>{
                                   if(Number(Number(index)%4)==0){
                                       console.log(index)
                                       return(
                                        <div className={`carousel-item ${index==0 ?'active':""} w-100`}>
                                        <div className="row ">
                                        <div className="col-sm"><div className="d-block w-100" >{index} {posts[index].title}</div></div>
                                        <div className="col-sm"><div className="d-block w-100" >{index+1} {posts[index+1].title}</div></div>
                                        <div className="col-sm"><div className="d-block w-100" >{index+2} {posts[index+2].title}</div></div>
                                        <div className="col-sm"><div className="d-block w-100" >{index+3} {posts[index+3].title}</div></div>
                                            </div>

                                        </div>

                                       )
                                       
                                   }
                                   
                                    

                                   


                                })}


                            </div>
                            :null
                        }
                   
                       
                    </div>
                    <a className="carousel-control-prev" href="#multi_item" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#multi_item" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
