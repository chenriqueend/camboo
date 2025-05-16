import { Friend } from "./types";

export const friends: Friend[] = [
  {
    id: 1,
    firstName: "Joana ",
    lastName: "Barros",
    lastMessage: "Ainda está disponível?",
    lastMessageDate: "2024-09-30",
    notificationsCount: null,
    imageUrl: "/assets/Woman 1.png",
  },
  {
    id: 1,
    firstName: "Gabriel ",
    lastName: "Marques",
    lastMessage: "já foi vendido :/",
    lastMessageDate: "2024-09-28",
    notificationsCount: 1,
    imageUrl: "/assets/Guy 3.png",
  },
  {
    id: 1,
    firstName: "Gabriela",
    lastName: "Garcia",
    lastMessage: "Aceita a oferta?",
    lastMessageDate: "2024-09-21",
    notificationsCount: 3,
    imageUrl: "/assets/Woman 3.png",
  },
];
