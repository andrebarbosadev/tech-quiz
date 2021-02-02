/* eslint-disable func-names */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Ultimate Tech Quiz!</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            Quiz Tech!
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                onChange={(event) => { setName(event.target.value); }}
                placeholder="Qual o seu nome?"
                name="nomeDoUsuario"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
            {db.external.map((linkExterno) => {
              const [projectName, gitUser] = linkExterno.replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');

              return (
                <li key={linkExterno}>
                  <Widget.Topic 
                    as={Link}
                    href={`/quiz/${projectName}___${gitUser}`}>
                    {gitUser}/{projectName}
                  </Widget.Topic>
                </li>
              );
            })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/andrebarbosafoz" />
    </QuizBackground>
  );
}
