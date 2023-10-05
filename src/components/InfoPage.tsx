import { ReactNode } from "react";
import Container from "./Container";
import Section from "./Section";

type Props = {
  children: ReactNode;
  pageTitle: string;
  pageDescription: string;
};

const InfoPage = ({ children, pageTitle, pageDescription }: Props) => {
  return (
    <Section>
      <Container className="flex flex-col font-light text-xl gap-8">
        <div className="flex flex-col gap-8">
          <h1>{pageTitle}</h1>
          <p>{pageDescription}</p>
        </div>
        <code className="flex flex-col">{children}</code>
      </Container>
    </Section>
  );
};

export default InfoPage;
