import React from 'react';
import QuizScreen from '../../src/screens/Quiz';
import { ThemeProvider } from 'styled-components';


export default function QuizDaGaleraPage({dbExterno}) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <div>
        Desafio da próxima aula junto com animações.
        <QuizScreen externalQuestions={dbExterno.questions} externalBg={dbExterno.bg} />
        <pre>
          {JSON.stringify(dbExterno)}
        </pre>
      </div>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  console.log('Infos que o NEXT provê:', context.query.id);
  const [projectName, gitUser] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${projectName}.${gitUser}.vercel.app/api/db`)
  .then((respostaDoServer) => {
    if(respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error('Falha na recuperação dos dados.');
  })
  .then((respostaConvertidaEmObjeto) => {
    return respostaConvertidaEmObjeto;
  })
  .catch((error) => {
    console.log(error);
  })

  console.log(dbExterno);

  return {
    props: {
      dbExterno,
    },
  };
}
