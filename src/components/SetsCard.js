import React from 'react'

const SetsCard = props => {
    return (
        <div>
            <img onClick={props.getData} className="sets" src={props.sets.logoUrl} alt={props.sets.code} />
        </div>
    )
}





export default SetsCard