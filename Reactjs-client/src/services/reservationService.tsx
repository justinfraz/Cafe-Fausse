export interface ReservationPayload {
  date: string;
  time: string;      // 24-hour format, e.g. "17:30"
  guests: number;    // <-- FIXED: number not string
  name: string;
  email: string;
  phone?: string;
}

export interface ReservationResponse {
  message: string;
  reservation_id: number;
  table_number: number;
}

export async function createReservation(
  payload: ReservationPayload
): Promise<ReservationResponse> {
  const response = await fetch("http://localhost:5000/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to create reservation");
  }

  return response.json();
}