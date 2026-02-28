const API_URL = "https://script.google.com/macros/s/AKfycbxgN7cb_sYlj8WG3FuMdd-v4Q4GGCZrXBgbKiLQR611sl4OenIkgRT55qwoKr34DFxWtA/exec"

async function postData(data){

  const res = await fetch(API_URL,{
    method:"POST",
    body:JSON.stringify(data)
  })

  return await res.json()
}
