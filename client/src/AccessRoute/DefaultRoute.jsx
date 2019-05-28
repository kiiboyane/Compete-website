import React from 'react'
import {Route} from 'react-router-dom'
// import API from './server/API'

 
export default function DefaultRoute ({component: MatchedPage, ...rest}) {
    return (
        <Route {...rest} render={(matchProps) => {
            return(<div>
                <hr/>
                <MatchedPage {...matchProps} />
            </div>)

           
        }} />
    )
};



 // if(API.isAdmin()){
            //     return (<div>
            //         <hr/>
            //         <MatchedPage {...matchProps} />
            //     </div>)
            // }else{
            //     alert("seul l'admin peut acceder à cette fenetre");
            //     <Redirect to="/" />
            // }



