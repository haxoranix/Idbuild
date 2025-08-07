//function to toogle the name of the button
let btnPreview = document.querySelector('button');
btnPreview.addEventListener('click', () => {
    if(inputfields["name"].value != "" 
    && inputfields["roll"].value != ""
    && inputfields["studentnumber"].value != ""
    && inputfields["branch"].value != ""
       && inputfields["expiry"].value != ""
    && inputfields["schoolname"].value != ""
    && inputfields["course"].value != ""){
        if(btnPreview.innerText == "Edit"){
            btnPreview.innerText = "Preview";
        }
        
        else{
            btnPreview.innerText = "Edit";
        }
    }
    
} );



//main work
const image = document.querySelector('#file-ip-1-preview');
const output = document.querySelector('.output');
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const inputfields = document.querySelector('.input-fields');


function toggle2(){
    output2.innerHTML=`
    <p style="color: black; text-align: center; text-transform: uppercase; font-weight: bold; margin-top: 5px; font-family: Georgia, 'Times New Roman', Times, serif;">${inputfields["name"].value}</p>`
                 };




function toggle(){
         output.innerHTML=`
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["course"].value} </p>
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["branch"].value} </p>
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["roll"].value} </p>
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["studentnumber"].value} </p>
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["expiry"].value} </p>
         `
                      };


function toggle1(){
            output1.innerHTML=`
          <p style="color: red; text-align: center; font-weight: bold;">${inputfields["schoolname"].value}</p>`
   
           };
   
   


    function showPreview(event){
        if(event.target.files.length > 0){
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("file-ip-1-preview");
          preview.src = src;
          preview.style.display = "block";
        }

      }

