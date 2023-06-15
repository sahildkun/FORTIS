import Image from 'next/image'
import { Container } from '@/components/Container'
import { Hero, HeroSubtitle,HeroTitle } from '@/components/Hero'
export default function Home() {
  return (
   <>
   <main>
     <Container className={''}>
     <Hero>
      <HeroTitle>Fortis is a better way to rebuild yourself</HeroTitle>
      <HeroSubtitle>Fortis ex astra, invictus ad astra</HeroSubtitle>
     </Hero>
    </Container>
     </main>
     <footer>
     <Container className={''}>
      <div className='my-96'>
        jkjdsa
      </div>
    </Container>
     </footer>
  
   </>
  )
}
