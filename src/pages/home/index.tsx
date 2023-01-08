import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { Policy } from '../../components/Policy'
import { Animation } from '../../components/Animation'

import {
  Container,
  ContainerHero,
  Description,
  Features,
  FeaturesImages,
  Preview,
} from './styles'

import previewImage from '../../assets/app-preview.png'
import AvailabilityImage from '../../assets/availability.png'
import AgendaImage from '../../assets/agenda.png'
import AgendaProfileImage from '../../assets/agenda-profile.png'
import GoogleCalendarImage from '../../assets/google-calendar.png'
import GoogleLogoImage from '../../assets/google.png'

export default function Home() {
  return (
    <Container>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos
        no seu tempo livre."
      />
      <ContainerHero>
        <Description>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </Description>

        <Preview>
          <Image
            src={previewImage}
            alt="Calendário simbolizando a aplicação em funcionamento"
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </ContainerHero>

      <Animation from={{ opacity: 0 }} to={{ opacity: 1 }}>
        <Features>
          <Preview>
            <FeaturesImages
              src={AvailabilityImage}
              quality={100}
              alt="Prévia da função de disponibilidade"
            />
          </Preview>
          <Description>
            <Heading size="2xl">
              Configure em quais dias da semana e em quais horários você tem
              disponibilidade.
            </Heading>
          </Description>
        </Features>
      </Animation>

      <Animation from={{ opacity: 0 }} to={{ opacity: 1 }}>
        <Features direction="inverted">
          <Preview>
            <FeaturesImages
              src={GoogleCalendarImage}
              quality={100}
              alt="Logo Google Calendar"
              style={{ maxWidth: 200 }}
            />
            <FeaturesImages
              src={GoogleLogoImage}
              quality={100}
              alt="Logo Google"
              style={{ maxWidth: 200 }}
            />
          </Preview>
          <Description>
            <Heading size="2xl">
              Conecte sua conta Google e seu Google Calendar.
            </Heading>
            <Policy />
          </Description>
        </Features>
      </Animation>

      <Animation from={{ opacity: 0 }} to={{ opacity: 1 }}>
        <Features>
          <Preview>
            <FeaturesImages
              src={AgendaProfileImage}
              style={{ maxWidth: '600px' }}
              quality={100}
              alt="Prévia da agenda Ignite Call mostrando dias do mês e horários disponíveis"
            />
          </Preview>
          <Description>
            <Heading size="2xl">
              Compartilhe o link da sua agenda com seus contatos e pronto!
            </Heading>
            <Heading size="2xl" style={{ marginTop: '40px' }}>
              Eles já podem marcar um horário com você!
            </Heading>
          </Description>
        </Features>
      </Animation>

      <Animation from={{ opacity: 0 }} to={{ opacity: 1 }}>
        <Features direction="inverted">
          <Preview>
            <FeaturesImages
              src={AgendaImage}
              style={{ maxWidth: '600px' }}
              quality={100}
              alt="Prévia da agenda Google com o evento marcado"
            />
          </Preview>
          <Description>
            <Heading size="2xl">
              Nós marcamos na sua Google Agenda a reunião e geramos
              automaticamente o link para a chamada.
            </Heading>
          </Description>
        </Features>
      </Animation>

      <Policy />
    </Container>
  )
}
