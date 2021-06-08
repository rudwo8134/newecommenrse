import style, {css} from  'styled-components'

const same = css`
width: 23%;
`

export const CheckoutItemcontainer = style.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
`

export const ImageContainer = style.div`
width: 23%;
padding-right: 15px;
`

export const Imgfile =style.img`
width: 100%;
height: 100%;
`
export const Name = style.span`
    ${same}
`
export const Quantity = style.span`
${same}
display: flex;
`

export const Price = style.span`
${same}
`

export const Arrow =style.div`
cursor: pointer;
`
export const Value= style.span`
margin: 0 10px;
`
export const RemoveButton = style.div`
padding-left: 12px;
cursor: pointer;
`

