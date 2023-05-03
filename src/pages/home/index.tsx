import Image from 'next/image'

import { Heading, Text } from '@ignite-ui/react'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import { Container, Preview, Hero } from './styles'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          quality={100}
          priority
          height={400}
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
