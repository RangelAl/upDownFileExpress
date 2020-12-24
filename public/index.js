var fileList;
document.getElementById("file").onchange = function(event) {
    fileList = event.target.files;
    //TODO do something with fileList.  
 }
document.getElementById("btnSubmit").addEventListener("click", ()=>{

    var formData = new FormData();  
    formData.append("image", fileList[0]);
  
    fetch('http://localhost:3000/upload', {
        method: 'POST',
      /*  headers: {
        "Content-Type": "multipart/form-data"
        },*/
        body: formData
    }).then((resp)=>{
        console.log(resp);
    }).catch((er)=>{
        console.log(er);
    })
})