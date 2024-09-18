import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import Title from "../Common/Title";
import * as S from "./styles";

const newMessageFormValidationSchema = z.object({
  name: z.string().min(3, "Informe seu nome"),
  email: z.string().email("Digite um email válido").min(5),
  message: z.string().min(5, "Informe aqui sua mensagem")
});

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(newMessageFormValidationSchema)
  });

  const onSendMessage = (data) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      reply_to: data.email, // Mudança de email para reply_to
    };

    emailjs
      .send(
        "service_u9t21jm", // Substitua pelo ID do seu serviço
        "template_8hbjqhk", // Substitua pelo ID do seu modelo
        templateParams,
        "FpsMSmz0lsukTNBXo" // Substitua pela sua chave pública
      )
      .then(
        (response) => {
          alert("Mensagem enviada com sucesso");
          reset();
          return response;
        },
        (error) => {
          alert("Mensagem não enviada: " + error.text); // Ajuste para mostrar a mensagem de erro
        }
      );
  };

  return (
    <S.Section id="Contact">
      <Title text="Contato" />
      <S.Container>
        <form onSubmit={handleSubmit(onSendMessage)}>
          <input
            type="text"
            placeholder="Nome"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <textarea
            placeholder="Escreva sua mensagem aqui"
            {...register("message")}
          />
          {errors.message && <span>{errors.message.message}</span>}
          <button type="submit">Enviar</button>
        </form>
      </S.Container>
    </S.Section>
  );
};

export default Contact;
