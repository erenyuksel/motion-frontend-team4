import './styles.css'

const Spinner = () => {
  return (
    <div className="page">
      <div className="loadContainer">
        <div className="loadInner">
          <div className="loadCircle">
            <div className="loadCircleInner"></div>
          </div>
          <div className="loadCircle">
            <div className="loadCircleInner"></div>
          </div>
          <div className="loadCircle">
            <div className="loadCircleInner"></div>
          </div>
          <div className="loadCircle">
            <div className="loadCircleInner"></div>
          </div>
          <div className="loadCircle">
            <div className="loadCircleInner"></div>
          </div>
        </div>
      </div>
    </div>
    // <div className="spiner">
    //   <h1>Spiner</h1>
    // </div>
  )
}

export default Spinner
