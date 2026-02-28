async function login(){

  const username=document.getElementById("user").value
  const password=document.getElementById("pass").value

  const res=await postData({
    accion:"login",
    username,
    password
  })

  if(!res.status){
    alert("Credenciales incorrectas")
    return
  }

  localStorage.setItem("id",res.id)
  localStorage.setItem("tipo",res.tipo)

  if(res.tipo=="admin"){
    location.href="admin.html"
  }else{
    location.href="dashboard.html"
  }
}
