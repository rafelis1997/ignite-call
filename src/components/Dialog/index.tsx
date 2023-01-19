import { Text } from '@ignite-ui/react'
import { X } from 'phosphor-react'
import Image from 'next/image'

import {
  Button,
  CloseButton,
  Content,
  ContentContainer,
  Overlay,
  Title,
} from './styles'

import normalButton from '../../assets/google-button/btn_google_light_normal_ios.svg'

interface Props {
  title: string
  connect: () => Promise<void>
}

export function Modal({ connect, title }: Props) {
  return (
    <>
      <Overlay />
      <Content>
        <Title>{title}</Title>

        <ContentContainer>
          <Text size="lg">Google</Text>
          <Button onClick={connect}>
            <Image
              src={normalButton}
              alt="Google Logo"
              width={48}
              height={48}
            />
            Sign in with Google
          </Button>
        </ContentContainer>

        <CloseButton>
          <X size={48} />
        </CloseButton>
      </Content>
    </>
  )
}
