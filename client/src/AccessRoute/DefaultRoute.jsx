import React from 'react'
import {Route} from 'react-router-dom'

 
export default function DefaultRoute ({component: MatchedPage, ...rest}) {
    return (
        <Route {...rest} render={(matchProps) => {
            return(<div>
                {/* <NavbarC/> */}
                
 
                <hr/>
                <MatchedPage {...matchProps} />
            </div>)
        }} />
    )
};