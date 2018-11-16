import React from "react"

const Card = (props) => (
    <div className="card l-one-whole l-one-whole-mobile l-landscape l-landscape-mobile card--left">
        <div className="l-absolute-centered card-content">
            <h1 className='t-title'>{ props.title }</h1>
            <h2>{ props.desc }</h2>
            <p>
                Check out the <a href="https://github.com/ginetta/Skeleton/blob/master/README.md">skeleton readme</a> for more infos
            </p>
        </div>
    </div>
)

export default Card