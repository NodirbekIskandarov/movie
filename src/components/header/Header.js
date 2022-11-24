import React from 'react'
import './style.css'
import {GrSearch} from 'react-icons/gr'
import {FaPlus} from 'react-icons/fa'
import {BsBellFill} from 'react-icons/bs'

function Header() {
  return (
    <div className='main'>
        <div className='container header'>
            <div className='list'>
                <a className='tmdb' href="">T M D B</a>
                <ul className='father-ul'>
                    <li className='movies'><a href="">Movies</a>
                        <ul className='movie'>
                            <li>Popular</li>
                            <li>Now Playing</li>
                            <li>Upcoming</li>
                            <li>Top Rates</li>
                        </ul>
                    </li>
                    <li className='movies'><a href="">TV Shows</a>
                        <ul className='movie'>
                            <li>Popular</li>
                            <li>Airing Today</li>
                            <li>On TV</li>
                            <li>Top Rates</li>
                        </ul>
                    </li>
                    <li className='movies'><a href="">People</a>
                        <ul className='movie'>
                            <li>Popular People</li>
                        </ul>
                    </li>
                    <li className='movies'><a href="">More</a>
                        <ul className='movie'>
                            <li>Discussions</li>
                            <li>Leaderboard</li>
                            <li>Support</li>
                            <li>API</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='profile'>
                <a href=""> <FaPlus/> </a>
                <button className='changer'>Eng</button>
                <a href=""> <BsBellFill/> </a>
                <button className='login'>N</button>
                <a href=""> <GrSearch /> </a>
            </div>
        </div>
    </div>
  )
}

export default Header