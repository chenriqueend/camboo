export type LoginFormType = {
  formType: "login" | "register" | "onlyUserAndPassword" | "welcome";
};

export type LoginFormProps = {
  searchParams: { message: string };
  onRegisterSuccess?: () => Promise<void>;
} & LoginFormType;
