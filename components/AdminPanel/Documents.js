import classes from "./Documents.module.css";
import React, { useState, useEffect } from 'react';
import Resizer from 'react-image-file-resizer'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default function Documents() {
  const [order, setOrder] = useState(false);
  const [documentService, setDocuments] = useState([]);
  const [documentUploadedName, setDocumentUploadedName] = useState(null);
  const [useEffectStop, setUseEffectStop] = useState(false);
  const [documentName, setDocumentName] = useState(null);
  const [image, setResizeImage] = useState(null);
  const [uploading,setUpload] = useState(false);
  

  const setImage = async (e) => {
    Resizer.imageFileResizer(e,720,500,'JPEG', 100, 0, async(uri) =>{
      try{
        setResizeImage(uri);
      }catch(err){
        console.log(err,'image uploaded failed')
      }
    })
  }

  const photographHandlerButton = (name) => {
    setUpload(true);
    console.log(name,documentName)

    try {
      fetch('/api/admin-panel/document-upload/submitDocuments', {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          nameOfDocument:documentName,
          image:image,
          topic:name
        }),
      }).then((response) => response.json()).then((data) => {
        setUpload(false);
        toast(data.message)
        setUpload(false);
      })
    } catch (error) {
      setUpload(false);
      toast(error.message)
    }
  }

  useEffect(() => {

    if(useEffectStop){
      return;
    }else{
      fetch('/api/admin-panel/orders').then((response) => response.json()).then((data) => {
        setOrder(data.message);

        if(data.message){

          for (let i = 0; i < data.total; i++) {
  
            try {
              fetch('/api/admin-panel/document-upload/getDocuments', {
                method: 'POST',
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                  serviceName: data.orderData[i].topic
                }),
              }).then((response) => response.json()).then((data) => {
                setDocuments(prevState => [...prevState, data])
                // documents.push(data);
              })
            } catch (error) {
              console.log(error)
            }
          }
          setUseEffectStop(true)
        }

        
      })
    }

    
  }, [])


  return (
    <>

      <h3>Uploaded Documents</h3>
      <span className={classes.bigcard}>
        <div className={classes.left}>
          {
            order ? `Upload all The Documents According To Your Service` : 'There are no uploaded documents'
          }
        </div>
      </span>

      {
        order ?
          <div>
            {
              documentService.map((data,index) => (
                <span>
              <h3>{data.name}</h3>
              <div className={classes.yellowcontainer}>
                <span>
                  <select id='documentSelect' onChange={(e)=>setDocumentName(e.target.value)}>
                    {
                      data.document.map((data,index) => 
                       { 
                         return(
                          <option value={data.name}>{data.name}</option>
                        )
                      }
                        
                      )
                    }
                  </select>
                  <div>
                    <>
                      <input accept='image/*' onChange={(e)=>setImage(e.target.files[0])} type='file'></input>
                      {uploading?
                       <button type="submit" onClick={()=>photographHandlerButton(data.name)}>uploading</button>:
                       <button type="submit" onClick={()=>photographHandlerButton(data.name)}>upload</button>
                      }
                     
                    </>
                  </div>
                </span>
              </div>
            </span>

              ))

            }
          </div>
          : null
      }

    </>
  );
}
