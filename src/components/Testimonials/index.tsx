import { BackIcon, NextIcon } from "@/constants/icons";
import { Avaliacao } from "@/model/avaliacao.model";
import { TestimonialsPops } from "@/model/interfaces/general-interfaces";
import { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import { TestimonialsAction } from "./actions";
import {
  TestimonialArea,
  TestimonialBody,
  TestimonialInfo,
  TestimonialItem,
  TestimonialName
} from "./style";
import { Stars } from "../Stars";

const Testimonials: React.FC<TestimonialsPops> = ({ idEstabelecimento }) => {

  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const service = new TestimonialsAction();


  const consultarAvaliacoes = () => {
    service.listAvaliacoesByEstabelecimentoId(idEstabelecimento)
    .then((avaliacoes) => {
      setAvaliacoes(avaliacoes);
    })
  }

  useEffect(() => {
    consultarAvaliacoes();
  }, []);

  return (
    <>
      {avaliacoes.length > 0 ? (
      <TestimonialArea>
        <Swiper 
          key={avaliacoes.length}
          showsPagination={false}
          showsButtons={true}
          prevButton={<BackIcon size={30} color='#268596' />}
          nextButton={<NextIcon size={30} color='#268596' />}>
          {avaliacoes.length > 0 && avaliacoes.map((avaliacao, index) => (
            <TestimonialItem key={index}>
              <TestimonialInfo>
                <TestimonialName>{avaliacao.user.nome}</TestimonialName>
                <Stars stars={avaliacao.nota} showNumber={false} backgroundColor='#268596' />
              </TestimonialInfo>
              <TestimonialBody>{avaliacao.comentario}</TestimonialBody>
            </TestimonialItem>
          ))}
        </Swiper>
      </TestimonialArea>
    ) : (
      <></>
    )}
  </>
  );
}

export default Testimonials;