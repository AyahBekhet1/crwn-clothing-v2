import {FormInputLabel,Group ,Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...others }) => {
  return (
    <Group>
      <Input {...others} />

      {label && (
        <FormInputLabel shrink={others.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
