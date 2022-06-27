import React from 'react';
import styled from 'styled-components';
//Animations
// import { motion } from "framer-motion";
// import {pageAnimation, titleAnimation} from '../animation';

import { About } from '../styles';
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../animation";

//Import images
import ParticipantPhoto from '../img/empty.jpg';
import QuestionnaireOne from '../img/empty.jpg';


const Participant = () => {
  const [element, controls] = useScroll();
  return (
      <Faq variants={scrollReveal} ref={element} animate={controls} inintial="hidden">
        <AnimateSharedLayout>
            <h2>Участник конкурса и предложения</h2>
            <Toggle title='Биография участника конкурса'>
                <div className="answerQuestionnaire">
                    <div className='anketa'>
                      <p><span>Фамилия, имя, отчество:</span> _____;</p><br />
                      <p><span>Образование:</span>______________;</p><br />
                      <p><span>Место работы, должность:</span>___________;</p><br />
                      <p><span>Название первичной профсоюзной организации:</span> _________________;</p><br />
                      <p><span>Название отраслевого профсоюза:</span> _____________;</p><br />
                      <p><span>Стаж профосоюзной деятельности, должность и стаж:</span> член совета молодых работников: ___________;</p><br />
                      <p><span>Краткая характеристика себя как молодого профсоюзного лидера:</span> _____;</p><br />
                      <p><span>Прочее:</span> ____________________;</p>
                    </div>
                    <img className='participantImg' src={ParticipantPhoto} alt='participant' />
                </div>
            </Toggle>
            <Toggle title='Основная проблема'>
                <div className='answer'>
                    <h3>Основной проблемой в настоящее время является побуждение молодежи к вступлению в профсоюз.</h3>
                </div>
            </Toggle>
            <Toggle title='Предложения участника конкурса'>
                <div className="answer">
                    <h3>Мои предложения по решению указанной проблемы:</h3>
                    <p>1. Мотивация профсоюзного членства. Достигается путем проведения бесед с принимаемыми на работу новыми сотруниками.
                    Беседа заключается не в "уговаривании" вступить в профсоюз, а в указании на эффективные инструменты профсоюза по представлению интересов
                    и защите прав работников - членов профсоюза. При этом подчеркивая, что деятельность профсоюза не ограничвается указанным выше.</p><br />
                    <p>2. Использование в беседе эффективной аргументации, путем ссылок на зконодательные акты, статистические данные,
                    факты из открытых источников.</p>
                    <p>С целью более эффективной и плодотворной совместной работы профсоюза и уполномоченных по охране труда, 
                    предложены и используются анкеты-опросник в филиале.</p>
                    <img className="someImg" src={QuestionnaireOne} alt='questionnaireOne' />
                 </div>
            </Toggle>
        </AnimateSharedLayout>
      </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
      display: block;
  }
  h2 {
      background: #004e8f;
      font-weight: bold;
      padding: 10px 0 10px 10px;
      width: 100%;
  }
  .faq-line {
      background: #cccccc;
      height: 0.2rem;
      margin: 2rem 0rem;
      width: 100%;
  }
  .question {
      cursor: pointer;
      padding: 3rem 0rem;
      @media screen and (max-width: 450px) {
        padding: 0.5rem 0rem;
      }
  }
  .answerQuestionnaire {
    display: flex;
    flex-direction: row;
    padding: 2rem 0rem;
    width: 100%;
    .anketa {
      width: 50%;
      p {
        font-size: 1.25rem;
        margin: 0 10px 0 0;
        padding: 0;
        span {
          color: #fff;
          font-weight: lighter;
          text-decoration: underline;
        }
        @media screen and (max-width: 450px) {
        font-size: 0.7rem;
    }
      }
    }
      
      .participantImg {
          //margin: 10px 0 20px;
          width: 50%;
      }
      @media screen and (max-width: 450px) {
        flex-direction: column;
        padding: 0.25rem 0rem;
        .anketa {
            margin-bottom: 10px;
            width: 100%;
        p {
            font-size: 0.825rem;
            margin: 0 10px 0 0;
            padding: 0;
            span {
            color: #fff;
            font-weight: lighter;
            text-decoration: underline;
            }
        }
    }
    .participantImg {
        width: 100%;
    }
    }
  }
  .answer {
      padding: 2rem 0rem;
      p {
          padding: 1rem 0rem;
      }
      .someImg {
          margin: 10px 0 20px;
          width: 100%;
      }
  }
`;

export default Participant;