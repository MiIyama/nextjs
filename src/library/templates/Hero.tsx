import Link from 'next/link';
import React from 'react';

import { Background } from '@/library/components/atoms/background/Background';
import { Button } from '@/library/components/atoms/button/Button';
import { HeroOneButton } from '@/library/components/organisms/hero/HeroOneButton';
import { Section } from '@/library/layout/Section';
import { NavbarTwoColumns } from '@/library/navigation/NavbarTwoColumns';
import { Logo } from '@/library/templates/Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
