import React from 'react'
import {SpinnerOverlay,SpinnerContainer} from './with_spinner.style'

const with_spinner = (WrappedComponet) => ({isLoading, ...others})=> {
  return (
    isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    ):(
      <WrappedComponet {...others}/>
    )
    )
}

export default with_spinner
