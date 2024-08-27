import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

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
        {/* quality para 100 porque o default eh 80, altura max 400 o resto se adapta */}
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendar showing the application funcionality"
        />
      </Preview>
    </Container>
  )
}
