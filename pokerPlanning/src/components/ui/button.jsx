import React from 'react'

export const Button = ({text, className}) => {
  return (
    <button className={className} type="submit">{text}</button>
    )
}
