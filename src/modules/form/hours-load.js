import dayjs from "dayjs"
import {openingHours} from "../../utils/opening-hours.js"
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

  console.log(opening);
}