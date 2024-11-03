function InputComp(){
  return <div className="row samp-row">
  <div className="col-6">
    <input type="text" placeholder="Enter ToDo Here" />
  </div>
  <div className="col-4">
    <input type="date" placeholder="Enter Due Date"/>
  </div>
  <div className="col-2"><button type="button" className="btn btn-success samp-btn">Success</button></div>
</div>
}

export default InputComp;