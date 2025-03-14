import { apiConfig } from "./api-config.js" 

export async function scheduleNew({id, name, when}) {
  try {
    // Faz a requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({id, name, when}),
    })

    alert("agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert(" Não foi possível agendar tente novamente mais tarde")
  }
}