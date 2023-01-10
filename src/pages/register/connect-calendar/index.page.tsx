import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { Modal } from '../../../components/Dialog'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return (
    <>
      <NextSeo title="Conecte sua agenda do Google | Ignite Call" noindex />
      <Container>
        <Header>
          <Heading as="strong">Conecte sua agenda!</Heading>
          <Text>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </Text>
          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Conectar Conta</Text>
            {isSignedIn ? (
              <Button disabled size="sm">
                Conectado
                <Check />
              </Button>
            ) : (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button variant="secondary" size="sm">
                    Conectar
                    <ArrowRight />
                  </Button>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Modal connect={handleConnectCalendar} />
                </Dialog.Portal>
              </Dialog.Root>
            )}
          </ConnectItem>

          {hasAuthError && (
            <AuthError size="sm">
              Falha ao se conectar ao Google, verifique se você habilitou as
              permissões de acesso ao Google Calendar.
            </AuthError>
          )}

          <Button
            onClick={handleNavigateToNextStep}
            type="submit"
            disabled={!isSignedIn}
          >
            Próximo Passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
