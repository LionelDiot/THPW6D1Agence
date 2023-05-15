import React from "react";
import Showdown from "showdown";
import { useParams } from 'react-router-dom';

const converter = new Showdown.Converter();

export default function CaseStudies()  {
  const studies = [
    { name: 'Platon', slug: 'platon', text: `## Le challenge

    Platon a décidé de se lancer à l'époque malgré une crise économique difficile.  
    Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.` },
    { name: 'Solane', slug: 'solane', text: `## Solane est le premier vendeur de fraises du Poitou-Charentes

    Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.` },
    { name: 'Sedal', slug: 'sedal', text: `## Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas

    Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".` },
  ];
  const { slug } = useParams();
  const study = studies.find((study) => study.slug === slug);

  const note = study.text;
  const html = converter.makeHtml(note);
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}