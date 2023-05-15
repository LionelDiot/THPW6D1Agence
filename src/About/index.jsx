import React from "react";
import Showdown from "showdown";
const converter = new Showdown.Converter();

export default function About()  {
  const note = `### Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.

  De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
  Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.`;
  const html = converter.makeHtml(note);

  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: html }} />
      
    </>
  );
}