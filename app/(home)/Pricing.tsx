import { Button } from '@/src/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/src/components/ui/item'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table'
import { MapPinIcon, PhoneIcon, ReceiptEuroIcon } from 'lucide-react'

export function Pricing() {
  return (
    <section className="bg-background px-6 py-12 xl:px-0">
      <div className="mx-auto flex max-w-7xl gap-12 max-lg:flex-col max-lg:gap-6">
        <div className="flex min-w-0 basis-1/2 flex-col gap-12 max-lg:basis-full max-lg:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tarifs des séances</CardTitle>
              <CardDescription>
                Le règlement s'effectue à la fin de la séance, par chque ou
                espèces.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Consultation adulte</TableCell>
                    <TableCell>60€</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nourrisson / enfant / étudiant</TableCell>
                    <TableCell>55€</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Consultation à domicile</TableCell>
                    <TableCell>100€</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Item variant="muted">
                <ItemMedia variant="icon" className="max-sm:hidden">
                  <ReceiptEuroIcon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Remboursement</ItemTitle>
                  <ItemDescription className="line-clamp-none">
                    De nombreuses mutuelles remboursent tout ou partie de la
                    consultation d'ostéopathie. N'hésitez pas à vérifier les
                    modalités de votre contrat.
                  </ItemDescription>
                </ItemContent>
              </Item>
            </CardContent>
          </Card>
          <Item
            variant="outline"
            className="max-sm:flex-col max-sm:items-baseline"
          >
            <div className="flex gap-4">
              <ItemMedia variant="icon">
                <PhoneIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Prendre rendez-vous</ItemTitle>
                <ItemDescription>
                  ou contacter le cabinet au 07 45 16 49 95.
                </ItemDescription>
              </ItemContent>
            </div>
            <ItemActions className="max-sm:w-full">
              <Button size="sm" variant="outline" className="w-full">
                Réserver une séance
              </Button>
            </ItemActions>
          </Item>
        </div>
        <Card className="min-w-0 basis-1/2 max-lg:basis-full">
          <CardHeader>
            <CardTitle>Informations pratiques</CardTitle>
            <CardDescription>Horaires et adresse du cabinet.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Item variant={'muted'}>
              <ItemMedia variant={'icon'}>
                <MapPinIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Cabinet d'ostéopathie Pierre-Yves Cointot</ItemTitle>
                <ItemDescription>
                  243 Grande Rue, 73210 Aime-la-Plagne
                </ItemDescription>
              </ItemContent>
            </Item>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Jour</TableHead>
                  <TableHead>Horaires</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Lundi</TableCell>
                  <TableCell>9h00 - 19h00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mardi</TableCell>
                  <TableCell>9h00 - 19h00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mercredi</TableCell>
                  <TableCell>9h00 - 19h00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jeudi</TableCell>
                  <TableCell>9h00 - 19h00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vendredi</TableCell>
                  <TableCell>9h00 - 19h00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Samedi</TableCell>
                  <TableCell>9h00 - 19h00</TableCell>
                </TableRow>
                <TableRow className="bg-muted text-muted-foreground hover:bg-muted-foreground/10">
                  <TableCell>Dimanche</TableCell>
                  <TableCell>Fermé</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
