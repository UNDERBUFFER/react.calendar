import React from 'react'
import './styles.css'
import { PaginationConfigProps } from './types'

export default function PaginationConfig(props: PaginationConfigProps) {
  return (
    <div className='pagination-form'>
      <div className='use-pagination'>
        <input
          type='checkbox'
          id='up'
          name='interest'
          value='up'
          defaultChecked={false}
          onChange={() => props.onCBChange()}
        />
        <label htmlFor='up'>Use pagintaion?</label>
      </div>
      {props.selected && (
        <div className='pagination-conf'>
          <input
            type='number'
            min='5'
            defaultValue={5}
            onChange={(e) => props.onInputChange(+e.target.value)}
          />
        </div>
      )}
    </div>
  )
}
