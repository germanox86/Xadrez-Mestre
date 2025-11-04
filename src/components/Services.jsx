import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { xadrezBeneficios } from "../constants";
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Por que aprender Xadrez?"
          text="O xadrez é um jogo de estratégia que desenvolve habilidades cognitivas importantes, como pensamento crítico, resolução de problemas e planejamento."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Homem sorridente"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Seu Cérebro Agradece</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Treine a mente, vença desafios e divirta-se!
              </p>
              <ul className="body-2">
                {xadrezBeneficios.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Mulher jogando xadrez encarando a câmera"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Do Iniciante Mirim ao Mestre</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Xadrez não tem idade: une crianças, adultos e idosos em uma batalha de inteligência e estratégia. Desde os primeiros movimentos até as jogadas mais complexas.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Um Super Poder para a Mente</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  O xadrez é um exercício cerebral intenso. Ele fortalece a capacidade de pensar estrategicamente, vislumbrar consequências futuras com precisão e desenvolver uma memória fotográfica para posições e jogadas. Além disso, exige habilidades de resolução de problemas complexos, concentração profunda e tomada de decisão sob pressão. Jogar xadrez regularmente é como fazer exercícios para o seu cérebro, construindo múltiplas competências cognitivas essenciais.
                </p>


              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Mulheres jogando xadrez"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
