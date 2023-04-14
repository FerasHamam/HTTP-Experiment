import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Image Assembler"
  }, [])
  
  const http1Images = [];
  const http2Images = [];
  for (let index = 1; index <= 144; index++)
  { 
    http1Images.push(`https://localhost:4040/image_part_${index}.jpg`);
    http2Images.push(`https://localhost:8443/image_part_${index}.jpg`);
  }
  
  return (
    <>
      <h1 className="text-center">HTTP/1.1</h1>
      <div className="container h-50 p-0 mr-5 ml-5">
        <div className="row d-flex p-0 m-0">
          {http1Images.map((img) => {
            return (
              <div className="col-sm-1 d-inline m-0 p-0">
                <img src={img} alt="" className="img-fluid"></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-5 mt-5"></div>
      <h1 className="text-center">HTTP/2</h1>
      <div className="container mr-5 ml-5 h-50 p-0 ">
        <div className="row d-flex p-0 m-0">
          {http2Images.map((img) => {
            return (
              <div className="col-1 d-inline m-0 p-0">
                <img src={img} alt="" className="img-fluid"></img>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
