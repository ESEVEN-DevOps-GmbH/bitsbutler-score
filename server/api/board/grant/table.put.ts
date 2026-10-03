/**
 * Das Gerät wählt seinen Tisch — oder wechselt ihn.
 *
 * Es gibt EINE Adresse für alle Schirme im Saal; gewählt wird am Gerät.
 * Deshalb ist die Tischwahl vom Einlösen getrennt.
 *
 * EIN WECHSEL VERLANGT DEN TAFELCODE — SEIT DEM 03.10.2026
 *
 * Hier stand das Gegenteil: ein Schirm, der von Tisch 3 nach Tisch 7 rollt,
 * sollte nicht den Code der Turnierleitung wieder erfragen müssen. Das war
 * die Lücke — eine Freigabe für Tisch X wechselte ohne jede Prüfung auf
 * Tisch Y und zählte dort. Jetzt gilt: die ERSTE Wahl einer Freigabe ohne
 * Tisch und die Wahl desselben Tisches gehen ohne `code`; jeder andere
 * Wechsel braucht den sechsstelligen Tafelcode der Veranstaltung. Geprüft
 * wird im Backend (`identity.claim_board_table`), mit derselben Bremse wie
 * beim Einlösen; hier wird `code` nur durchgereicht — und nur, wenn er da
 * ist und aus sechs Ziffern besteht.
 *
 * Fehlt er oder stimmt er nicht, antwortet das Backend 403 mit dem Wort
 * (`BOARD_CODE_REQUIRED`, `WRONG_CODE`, `LOCKED`, `OUT_OF_WINDOW`) unter
 * `error`; `toAdmin` reicht den Rumpf unverändert durch.
 */
export default defineEventHandler(async (event) => {
  const body = await readBody<{ tableNumber?: number, code?: string }>(event)
  const tableNumber = body?.tableNumber

  if (!Number.isInteger(tableNumber) || (tableNumber as number) < 1 || (tableNumber as number) > 999) {
    throw createError({ statusCode: 400, statusMessage: 'Keine Tischnummer' })
  }

  // Ein leerer Wert zählt als "kein Code" (die Tischwahl ohne Wechsel schickt
  // keinen); alles andere muss genau sechs Ziffern sein.
  const code = body?.code
  const hasCode = code !== undefined && code !== null && code !== ''
  if (hasCode && !/^[0-9]{6}$/.test(String(code))) {
    throw createError({ statusCode: 400, statusMessage: 'Kein sechsstelliger Code' })
  }

  return await toAdmin<{ tableNumber: number }>(
    event, '/board/grant/table',
    { method: 'PUT', body: hasCode ? { tableNumber, code: String(code) } : { tableNumber } })
})
