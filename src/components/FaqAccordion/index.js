import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ_ITEMS = [
  {
    question: "Comment fonctionne le système de rotation des tiny houses ?",
    answer: "Chaque tiny house est installée pour une durée maximale de 3 mois consécutifs sur votre terrain. Cette rotation est obligatoire et permet de respecter la réglementation tout en diversifiant notre offre. Vous ne pouvez accueillir une tiny house que 3 mois sur une année."
  },
  {
    question: "Comment sont calculés mes revenus ?",
    answer: "Vous recevez une commission de 20% sur chaque nuitée louée. Par exemple, pour une nuitée à 120€, vous percevez 24€. Le paiement est effectué mensuellement pour toutes les locations du mois précédent."
  },
  {
    question: "Quels sont mes engagements en termes d'entretien ?",
    answer: "Votre rôle se limite à la maintenance quotidienne légère : veille de la propreté, petits ajustements si nécessaire, et entretien des abords immédiats. Nous prenons en charge toute la maintenance lourde des tiny houses."
  },
  {
    question: "Quels types de terrains recherchez-vous ?",
    answer: "Nous recherchons des terrains situés dans des zones touristiques attractives, stables et facilement accessibles. Le terrain doit permettre l'installation sécurisée d'une tiny house et respecter les normes locales d'urbanisme."
  },
  {
    question: "Qui gère les réservations et les clients ?",
    answer: "Notre société prend en charge l'intégralité de la gestion des réservations, la relation client, et la logistique. Vous n'avez pas à vous occuper de ces aspects, nous gérons tout de A à Z."
  },
  {
    question: "Y a-t-il des coûts d'installation ou de maintenance ?",
    answer: "Non, l'installation et la maintenance lourde sont entièrement prises en charge par notre société. Vous n'avez aucun investissement à faire, ni pour l'installation, ni pour l'entretien majeur."
  }
];

const FaqAccordion = () => {
  return (
    <Box>
      {FAQ_ITEMS.map((item, index) => (
        <Accordion
          key={index}
          elevation={0}
          sx={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            '&:not(:last-child)': { mb: 1 },
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              '& .MuiAccordionSummary-content': {
                my: 2,
              },
            }}
          >
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="text.secondary">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FaqAccordion;
