import Button from "../Button/Button";
import Input from "../Input/Input";

const Form = () => {
  return (
    <form>
      <Input
        type="text"
        placeholder="Enter your email"
        styleInput="hero-input"
      />
      <Button styleBtn="hero-button" text="Get started" />
    </form>
  );
};

export default Form;
