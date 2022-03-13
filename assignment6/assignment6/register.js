window.onload = pageLoad; 
function pageLoad(){ //ฟังก์ชันpageloadถ้ามี()ข้างหน้าไม่ต้องใส่วงเล็บ
	var form = document.getElementById("MyForm"); //ประกาศตัวแปรกลางว่าจะเก็บเป็นค่าอะไรในกรณีนี้จะไปเก็บข้อมูลจากelementที่ระบุidไว้
    form.onsubmit = validateForm; //เมื่อกดซับมิดจะรับข้อมูลจากฟอร์มไปเก็บที่ฟังก์ชั่นที่เลือก
}

function validateForm() { 
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var spantext = document.getElementById("errormsg");//แบบเดียวกับvarform 
   
    var    Password  = document.forms["MyForm"]["Password"]//รับข้อมูลจากฟอร์ม id myform เป็นตัวที่มี id เป็น password
    var    RetypePassword = document.forms["MyForm"]["RetypePassword"]


    if(Password.value != RetypePassword.value)//เงื่อนไขการเช็ค
    {
        spantext.textContent = "Password Uncorrect";//spantextคือตัวแปรจากด้านบน .textcontentเอาไว้เปลี่ยนtextของตัวแปร
        return false;
    }
}