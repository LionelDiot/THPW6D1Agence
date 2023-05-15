import React from "react";
import { Card } from 'react-bootstrap';
import Showdown from "showdown";
const converter = new Showdown.Converter();


export default function Home()  {
  const note = `### Confiez vos rêves à des experts du Web

  Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
  Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.`;
  const html = converter.makeHtml(note);

  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: html }} />
      
    </>
  );
}