import { IMsgDataTypes } from "@/types/chat";
import { ChatUsersType } from "@/types/userProfile";
import { atom, useAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import deepEqual from 'fast-deep-equal';

type openedChatsType = {
  target: string;
}

const openedChatsAtom = atom<openedChatsType[]>([]);

const derivedOpenedChatsAtom = atom(
  (get) => get(openedChatsAtom),
  (get, set, newArr: openedChatsType, operation?: 'add' | 'remove') => {
    const openedChats = get(openedChatsAtom)
    // console.log(newArr);
    if (operation === 'remove') {
      const newChats = openedChats.filter((chat) => chat.target !== newArr.target)
      set(openedChatsAtom, newChats)
      return
    }
    if (openedChats.length >= 3) {
      set(openedChatsAtom, [...openedChats.slice(1), newArr])
      return
    }
    set(openedChatsAtom, [...openedChats, newArr])

    // console.log(get(openedChatsAtom));
  },
)

export const useOpenedChats = () => useAtom(derivedOpenedChatsAtom);

const chatUsersListAtom = atom<ChatUsersType[]>([]);

export const useChatProfilesList = () => useAtom(chatUsersListAtom);

const chatAllMessagesAtom = atom<IMsgDataTypes[]>([]);

export const useChatAllMessagesAtom = () => useAtom(chatAllMessagesAtom);

// Create a derived atom family
const filteredMessagesAtomFamily = atomFamily((chatParticipants: { from_user_id: string, to_user_id: string }) =>
  atom(
    (get) => {
      const allMessages = get(chatAllMessagesAtom);
      const filteredMessages = allMessages.filter((message) => {
        // Check if the sender_id or receiver_id matches values from the tuple
        if (
          (message.from_user_id === chatParticipants.from_user_id && message.to_user_id === chatParticipants.to_user_id)
          || (message.from_user_id === chatParticipants.to_user_id && message.to_user_id === chatParticipants.from_user_id)
        ) {
          return message;
        }
        return []
      });
      return filteredMessages;
    }
  ), deepEqual
)
export const useFilteredMessagesAtom = (chatParticipants: { from_user_id: string, to_user_id: string }) => useAtom(filteredMessagesAtomFamily(chatParticipants));

export const fooFamily = atomFamily((param) => atom(param), deepEqual)


// Onboarding atom
type OnboardingType = {
  location: {
    state: string,
    city: string,
  }
}
const onboardingAtom = atom<OnboardingType>({
  location: {
    state: '',
    city: '',
  }
});
export const useOnboardData = () => useAtom(onboardingAtom);
