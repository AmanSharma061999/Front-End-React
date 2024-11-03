let CurrentTime = () => 
{
  let date= new Date();
  return (
  <p>The Current Time is :{date.toLocaleTimeString()}</p>
  );
};

export default CurrentTime;