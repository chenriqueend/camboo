export type NotificationType = {
  id: number;
  clientName: string;
  secondaryComment: string;
  type: string;
  image: string;
  date?: string;
  question?: string;
  hasPost?: boolean;
  post?: string;
};

export const notifications: NotificationType[] = [
  {
    id: 1,
    clientName: "joice kleber",
    secondaryComment: "comentou no seu post",
    type: "question",
    question: "qual tamanhoXX? ",
    date: "1 dia atrás",
    hasPost: false,
    image: "https://via.placeholder.com/40",
  },

  {
    id: 3,
    clientName: "Fernande fernandes",
    secondaryComment: "enviou uma nova proposta ...",
    type: "message",
    date: "4 dias atrás",
    hasPost: true,
    post: "carro xxx",
    image: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    clientName: "José felipe",
    secondaryComment: "curtiu seu comentário",
    type: "message",
    date: "6 dias atrás",
    hasPost: true,
    post: "carro xxx",
    image: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    clientName: "Francisco fisco",
    secondaryComment: "enviou solicitação de amizade",
    type: "friend_request",
    date: "8 dias atrás",
    image: "https://via.placeholder.com/40",
  },
  {
    id: 5,
    clientName: "Filipino de jesus",
    secondaryComment: "Can you review the document I sent?",
    type: "message",
    date: "11 dias atrás",
    hasPost: true,
    post: "carro xxx",
    image: "https://via.placeholder.com/40",
  },
  {
    id: 6,
    clientName: "Mikhail kalashnikov",
    secondaryComment: "Michael Wilson wants to add you as a friend",
    type: "friend_request",
    date: "12 dias atrás",
    image: "https://via.placeholder.com/40",
  },
];
