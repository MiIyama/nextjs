import Link from 'next/link';
import React from 'react';

import { Button } from '@/library/components/atoms/button/Button';
import { CTABanner } from '@/library/components/organisms/cta/CTABanner';
import { Section } from '@/library/layout/Section';

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
