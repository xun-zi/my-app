import React from 'react'
import './TopNavigation.less'


export default function TopNavigation():React.ReactElement{
    
    return(
        <div className='TopNavigation'>
            <h2>微信</h2>
            
            <div className='search-fn'>
            <i className="fa fa-search" aria-hidden="true"></i>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
        </div>
    )
}