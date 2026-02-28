const API_URL = "https://script.google.com/macros/s/AKfycbwSiLRhbAsDp1_vmeepf72E_3MDuedhfrMCwctuIYYnTimqbYOdktac_zljT7kROgGOoA/exec"

async function postData(data){

  const res = await fetch(API_URL,{
    method:"POST",
    body:JSON.stringify(data)
  })

  return await res.json()
}
