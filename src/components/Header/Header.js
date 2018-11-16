import React from "react"
import Card from "../Card/Card"

import './Header.scss'

const Header = (props) => (
    <div className="l-absolute-centered">
        <Card title={ props.title } desc={ props.desc }/>
    </div>
)

export default Header