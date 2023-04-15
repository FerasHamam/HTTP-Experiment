import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Image Viewer"
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
      <div className="container mr-50 ml-50">
        <div className="row p-0 m-0">
          {http1Images.map((img) => {
            return (
              <div className="col-1 m-0 p-0">
                <img src={img} alt="" className="img-fluid"></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-1 mt-1"></div>
      <h1 className="text-center">HTTP/2</h1>
      <div className="container mr-5 ml-5">
        <div className="row m-0 p-0">
          {http2Images.map((img) => {
            return (
              <div className="col-1 m-0 p-0">
                <img src={img} alt="" className="img-fluid"></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-5 mt-5"></div>
    </>
  );
}

export default App;
