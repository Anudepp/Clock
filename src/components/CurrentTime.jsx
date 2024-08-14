let CurrentTime  = ()=>{
  let time = new Date();


  return(
    <p>Today  Date is :  {time.toLocaleDateString()} Local time now  {time.toLocaleTimeString()};
    </p>

  );

};

export default CurrentTime;