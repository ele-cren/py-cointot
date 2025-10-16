import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion'

export function Faq() {
  return (
    <section className="bg-muted/30 px-6 py-12" id="questions-frequentes">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 xl:px-0">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-2xl leading-none font-semibold">
            Vos questions les plus fréquentes
          </h2>
          <p className="mx-auto max-w-full text-center text-base lg:max-w-1/2">
            Parce qu'une première consultation peut soulever des interrogations,
            voici quelques réponses aux questions les plus souvent posées en
            cabinet.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              🕒 Comment se déroule une séance d&apos;ostéopathie ?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Une séance dure en moyenne <strong>45 minutes</strong>.
              </p>
              <p>
                Après un échange sur vos antécédents et vos symptômes, je
                réalise un <strong>bilan global</strong> avant d&apos;effectuer
                des manipulations manuelles adaptées à votre situation.
              </p>
              <p>
                La séance se termine par des conseils personnalisés pour
                prolonger les effets du traitement.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>👕 Quelle tenue prévoir ?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Privilégiez des{' '}
                <strong>vêtements souples et confortables</strong> (jogging,
                legging, t-shirt…).
              </p>
              <p>
                Il est parfois nécessaire de retirer certaines couches pour
                faciliter le travail du praticien, toujours dans le respect et
                la pudeur du patient.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              🩺 Faut-il une ordonnance pour consulter ?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Non, l&apos;ostéopathie est une{' '}
                <strong>consultation directe</strong>.
              </p>
              <p>
                Vous pouvez prendre rendez-vous librement, sans prescription
                médicale.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              💸 L&apos;ostéopathie est-elle remboursée ?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                L&apos;acte n&apos;est{' '}
                <strong>pas pris en charge par la Sécurité sociale</strong>,
                mais de nombreuses <strong>mutuelles</strong> remboursent tout
                ou partie de la séance.
              </p>
              <p>
                Une <strong>facture vous sera remise</strong> à l&apos;issue de
                la consultation pour votre demande de remboursement.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              🏃‍♂️ Combien de séances sont nécessaires ?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Cela dépend du motif de consultation et de la réactivité du
                corps.
              </p>
              <p>
                En général, <strong>1 à 3 séances</strong> suffisent pour
                traiter un problème ponctuel.
              </p>
              <p>
                Certaines personnes choisissent aussi de venir{' '}
                <strong>en prévention</strong>, une à deux fois par an.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
