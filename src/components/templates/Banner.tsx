import Link from 'next/link';

import { Button } from '@/components/atoms/button/Button';
import { Section } from '@/components/layout/Section';

import { CTABanner } from '../organisms/cta/CTABanner';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
