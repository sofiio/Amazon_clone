import React from 'react'
import { Link } from 'react-router-dom'

function Rules() {
  return (
    <div>
        <p>Some third party services require you to have a Return & Refund Policy The use of ads, analytics or third party payments usually ask you for a Return & Refund Policy. Google Ads might be the one asking for your Return & Refund Policy, or Amazon, and many more</p>
        <Link to="/" className='header_link'>
        <button>OK</button>
        </Link>
    </div>
  )
}

export default Rules