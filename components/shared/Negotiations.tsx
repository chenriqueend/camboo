export type NegociationType = {
  id: number;
  clientName: string;
  firstName?: string;
  secondaryComment: string;
  type: string;
  sendMessage?: boolean;
  date?: string;
  post?: string;
  image: string;
};

export const negociations: NegociationType[] = [
  {
    id: 1,
    clientName: "joice kleber",
    firstName: "joice",
    secondaryComment: "quer negociar contigo",
    type: "message",
    date: "1 dia atrás",
    post: "carro xxx",
    sendMessage: false,
    image: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    clientName: "Francisco fisco",
    firstName: "Francisco",
    secondaryComment: "enviou solicitação de amizade",
    type: "message",
    date: "1 dia atrás",
    sendMessage: false,
    image: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    clientName: "Fernande fernandes",
    firstName: "Fernande",
    secondaryComment: "enviou uma nova proposta ...",
    type: "message",
    date: "1 dia atrás",
    post: "carro xxx",
    sendMessage: false,
    image: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    clientName: "José felipe",
    firstName: "José",
    secondaryComment: "curtiu seu comentário",
    type: "message",
    date: "1 dia atrás",
    post: "carro xxx",
    sendMessage: true,
    image: "https://via.placeholder.com/40",
  },
];
