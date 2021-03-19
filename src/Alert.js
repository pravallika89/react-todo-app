

const AlertComponent=({alert})=>{

return(
  alert ? (
    <div className='row'>
    <div className='col'>
      <div className='alert alert-success' role='alert'>
        Successfully saved Task!
      </div>
    </div>
  </div>
  ):(
    <div></div>
  )

)
}
export default AlertComponent;