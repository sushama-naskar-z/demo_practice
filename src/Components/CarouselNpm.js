import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselNpm() {
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>

      {posts.length > 0 ? <div>

        <Carousel responsive={responsive}
          autoPlay={false}
          autoPlaySpeed={20000}
        >
          {posts.map((ele) => {
            return (
              <div draggable={false}>{ele.title}</div>
            )
          })}
        </Carousel>

      </div> : null}



    </div>
  )
}
