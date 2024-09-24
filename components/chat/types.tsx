export interface ChatMessage {
  id: number;
  text: string;
}

export interface Friend {
  id: number;
  firstName: string;
  lastName: string;
  lastMessage: string;
  lastMessageDate: string; // ISO format or any other format you prefer
  notificationsCount: number | null;
  imageUrl: string; // URL da imagem do amigo
}
