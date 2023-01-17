import React from 'react'
import { PagintaionProps } from './types'
import './styles.css'

export default function Pagination(props: PagintaionProps) {
  const last = '<----'
  const next = '---->'
  return (
    <div className='pagination-container'>
      <button disabled={props.currentPage === 1} onClick={props.onLast}>
        {last}
      </button>
      <div>{props.currentPage}</div>
      <button
        disabled={props.currentPage === props.pagesCount}
        onClick={props.onNext}
      >
        {next}
      </button>
    </div>
  )
}
