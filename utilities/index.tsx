interface ResetProps {
  setLoginInfo: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    }>
  >;
}
export const resetForm = ({ setLoginInfo }: ResetProps) => {
  setLoginInfo({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
};
