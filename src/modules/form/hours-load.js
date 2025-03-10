import dayjs from "dayjs"
import {openingHours} from "../../utils/opening-hours.js"

const hours =document.getElementById("hours")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    //Recupera somente a hora
    const [scheduleHour, scheduleMinute] = hour.split (":")

      // Cria um objeto dayjs com a data selecionada e o horário específico
      const selectedDateTime = dayjs(date)
      .set("hour", scheduleHour) // Define a hora
      .set("minute", scheduleMinute); // Define os minutos

    // Verifica se o horário está no passado
    const isHourPast = selectedDateTime.isBefore(dayjs());

    return {
      hour,
      available: !isHourPast, // Inverte o valor para disponibilidade
    };
  });

 //Renderiza os horários
 opening.forEach(({hour, available}) => {
  const li = document.createElement("li")

  li.classList.add("hour")
  li.classList.add(available ? "hour-available": "hour-unavailable")

  li.textContent = hour 
  hours.append(li)
 })

}