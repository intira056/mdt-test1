window.onload = loginLoad;
function loginLoad()
{
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString =  window.location.search; //constคือประเภทตัวแปรที่มีค่าคงตัว .location.searchไว้หาโลเคชั่นของเว็บ
	const urlParams = new URLSearchParams(queryString); //หาค่าที่queryStringแล้วเอาค่าไปไว้ที่urlParams 
	const urlUsername = urlParams.get('Username'); //urlUsernameประกาศตัวแปรเพิ่ม เพื่อเอาข้อมูลจาก urlParamsที่มีidชื่อ username 
	const urlPassword = urlParams.get('Password');
	var Formusername = document.forms["myLogin"]["Username"] //รับข้อมูลจากform formนี้มาจากหน้าlogin
	var Formpassword = document.forms["myLogin"]["Password"]

	if((urlUsername == Formusername.value)&&(urlPassword == Formpassword.value))
	{
		alert("Login success");
		
	}
	else
	{
		alert("usernama or password uncorrect");
		return false;
	}
}

			