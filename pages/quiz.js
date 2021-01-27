/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import { useRouter, useState } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

function LoadingWidget() {
    return(
      <Widget>
        <Widget.Header>
          Carregando
        </Widget.Header>
        <Widget.Content>
          [Desafio Tech]
        </Widget.Content>
      </Widget>
    );
}

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Ultimate Tech Quiz!</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            Quiz Tech!
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            Demais quizes criados!
          </Widget.Content>
        </Widget>
        <LoadingWidget/>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/andrebarbosafoz" />
    </QuizBackground>
  );
}
