async function crearUsuario(){

  await postData({
    accion:"registrarUsuario",
    nombre:nombre.value,
    tipo:tipo.value,
    origen:origen.value,
    directo:directo.value,
    username:username.value,
    password:password.value
  })

  alert("Usuario creado")
}

async function recargar(){

  await postData({
    accion:"registrarRecarga",
    cliente:cliente.value,
    monto:monto.value,
    moneda:moneda.value,
    diamantes:diam.value
  })

  alert("Recarga registrada")
}


async function pagar(){

  const usuarioID = prompt("Ingrese ID interno del streamer a pagar")

  const res = await postData({
    accion:"pagarComision",
    usuarioID
  })

  if(res.status){
    alert("Pagado: "+res.pagado+" diamantes")
  }

}
