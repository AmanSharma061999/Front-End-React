function DeleteComp2(){
let todoName = 'Complete React Course';
let todoDate = '10/30/2024';


  return (
    <div className="row samp-row">

      <div className="col-6">
        {todoName}
      </div>

      <div className="col-4">
        {todoDate}
      </div>

      <div className="col-2"><button type="button" className="btn btn-danger samp-btn">Delete</button></div>
      
      </div>
);
}
export default DeleteComp2;