import React from 'react';
import { ReactComponent as Search } from '../images/search.svg';
import { ReactComponent as Filters } from '../images/filters.svg';
import { ReactComponent as User } from '../images/user.svg';
import {ReactComponent as Addbook} from '../images/addbook.svg';
import './userNav.css';

export default function UserNav({userType,funShowDiv}) {
      console.log(userType);
    return (
        <div className='user_nav'>
            <div className='inner_container'>
                <Filters width={30} className="filters_icon" onClick={()=>{funShowDiv("filter")}}/>
                <Search width={40} className="search_icon" onClick={()=>{funShowDiv("search")}}/>
                {
                    userType=="Admin"?<Addbook width={40} className="add_book_icon"/>:""

                }
                
                {/* <User width={60}/> */}
                <div className='logout'>Log out</div>
            </div>
        </div>
    )
}
