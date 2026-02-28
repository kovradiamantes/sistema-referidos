async function cargar(){

  const id=localStorage.getItem("id")

  const res=await postData({
    accion:"dashboard",
    id
  })

  document.getElementById("pend").innerText=res.pendientes

  let html=""

  res.historial.forEach(r=>{
    html+=`<tr>
      <td>${r[3]}</td>
      <td>${r[4]}</td>
      <td>${r[5]}</td>
    </tr>`
  })

  tabla.innerHTML=html
}

cargar()
