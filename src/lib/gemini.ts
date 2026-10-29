export interface GroundedPlace {
  title: string;
  uri: string;
  reviewSnippets?: string[];
}

export interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
  image?: string;
  places?: GroundedPlace[];
  usedMaps?: boolean;
  timestamp?: string;
}

export interface ChatResponse {
  text: string;
  places?: GroundedPlace[];
  usedMaps?: boolean;
  error?: string;
}

/**
 * Sends a chat message to the server-side Gemini endpoint (/api/gemini/chat).
 * This endpoint leverages gemini-3.8-flash with Google Maps Grounding.
 */
export async function sendChatMessage({
  messages,
  newMessage,
  image,
  location,
}: {
  messages: ChatMessage[];
  newMessage: string;
  image?: string | null;
  location?: { latitude: number; longitude: number } | null;
}): Promise<ChatResponse> {
  const payload = {
    messages: messages.map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      text: m.text,
      image: m.image,
    })),
    newMessage,
    image,
    location,
  };

  const response = await fetch('/api/gemini/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMsg = 'সার্ভার থেকে উত্তর পাওয়া যায়নি।';
    try {
      const errData = await response.json();
      if (errData?.error) errorMsg = errData.error;
    } catch {}
    throw new Error(errorMsg);
  }

  return await response.json();
}
