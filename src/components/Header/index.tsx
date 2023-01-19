import { Button, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import * as Dialog from '@radix-ui/react-dialog'

import { Container, LinkContainer } from './styles'
import { Modal } from '../Dialog'

export function Header() {
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  return (
    <Container>
      {isSignedIn ? (
        <LinkContainer href="/register/update-profile">
          <Text>Edite sua agenda</Text>
        </LinkContainer>
      ) : (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="secondary" size="sm">
              Entrar
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Modal connect={handleConnectCalendar} title="Entrar" />
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </Container>
  )
}
