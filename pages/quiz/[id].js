import React from 'react';

export default function QuizDaGaleraPage(props) {
  return (
    <div>
      Desafio da próxima aula junto com animações.
      <pre>
        {JSON.stringify(props.dbExterno)}
      </pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('Infos que o NEXT provê:', context.query.id);

  const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
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
