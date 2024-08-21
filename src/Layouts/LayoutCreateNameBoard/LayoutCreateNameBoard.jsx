/* eslint-disable react/prop-types */

const LayoutCreateNameBoard = ({ handleStep }) => {
  return (
    <div>
        <button onClick={() => {
            handleStep(1)
        }}>back</button>    
    </div>
  )
}

export default LayoutCreateNameBoard