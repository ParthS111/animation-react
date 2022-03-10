import React from 'react'
import './brand.css'
import {google,slack,shopify,atlassian} from './imports.js'
const Brand=()=> {
  return (
    <div className='gtp3_branch section__padding'>
      <div className=''>
        <img src={google} alt="google"/>
      </div>
      <div className=''>
        <img src={slack} alt="slack"/>
      </div>
      <div className=''>
        <img src={shopify} alt="shopify"/>
      </div>
      <div className=''>
        <img src={atlassian} alt="atlassian"/>
      </div>

    </div>
  )
}

export default Brand