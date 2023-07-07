import React from 'react'
import '../components/Menu.css'
import Products from './Products'

import products from '../Data/Data'

function Menu() {


    return (
        <div>
          <Products item={products}/>
        </div>

    )
}

export default Menu